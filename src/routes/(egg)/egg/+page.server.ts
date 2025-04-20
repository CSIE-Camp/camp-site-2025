import { building } from '$app/environment';
import { env } from '$env/dynamic/private';
import OpenAI from 'openai';
import { zodResponseFormat } from 'openai/helpers/zod';
import { z } from 'zod';
import data from './data.md?raw';

const openai = new OpenAI({
	apiKey: env.LLM_API_KEY || (building ? 'test' : undefined),
	baseURL: env.LLM_BASE_URL
});

const Website = z.object({
	scriptCdnUrls: z.array(z.string()),
	htmlContent: z.string(),
	cssContent: z.string(),
	jsContent: z.string()
});

const LLM_CACHE_TTL = parseInt(env.LLM_CACHE_TTL || '0', 10) || 30 * 1000; // Default to 30 seconds

// Simple in-memory cache and in-flight promise tracker
let cache: { value: z.infer<typeof Website>; expires: number } | null = null;
let inflight: Promise<z.infer<typeof Website>> | null = null;

export const load = async () => {
	const now = Date.now();

	const keepAlive = new Promise((r) => setTimeout(() => r(Math.random()), 1000 * 60));

	// If cache is valid, return it
	if (cache && cache.expires > now) {
		return { response: cache.value };
	}

	// If cache is expired but present, trigger background revalidation and return stale cache
	if (cache && cache.expires <= now) {
		if (!inflight) {
			inflight = generate()
				.then((result) => {
					cache = { value: result, expires: Date.now() + LLM_CACHE_TTL };
					inflight = null;
					return result;
				})
				.catch((err) => {
					inflight = null;
					throw err;
				});
		}
		// Return stale cache immediately
		return { response: cache.value };
	}

	// If no cache and a request is already in-flight, wait for it
	if (inflight) {
		return { response: inflight, keepAlive };
	}

	// No cache and no in-flight, generate and wait
	inflight = generate()
		.then((result) => {
			cache = { value: result, expires: Date.now() + LLM_CACHE_TTL };
			inflight = null;
			return result;
		})
		.catch((err) => {
			inflight = null;
			throw err;
		});
	return { response: inflight, keepAlive };
};

async function generate() {
	console.log('Generating new response...');
	const response = await openai.chat.completions.create({
		model: env.LLM_MODEL,
		messages: [
			{
				role: 'system',
				content:
					'你是一位創意十足的前端網頁開發者與設計師。你會用最新的前端技術與最佳實踐，產生視覺震撼、現代且互動性高的網頁。你總是確保結果獨特、有吸引力，並且符合活動主題。所有內容請以繁體中文呈現。'
			},
			{
				role: 'user',
				content: [
					'以下是活動資訊（markdown 格式）。請以此為參考，完成一個炫酷、時尚且有創意的夏令營網頁。頁面需：',
					'- 具有強烈視覺衝擊力與創意，採用現代網頁設計。',
					'- 使用大膽色彩、漸層與/或動畫，帶來強烈第一印象。',
					'- 以吸引人的方式完整呈現所有重要活動資訊。',
					'- 運用創意版面、字體設計與視覺元素。',
					'- 加入符合科技/程式夏令營主題的趣味或主題性點綴。',
					'- 使用 p5.js 或 Three.js 等現代前端技術，創造互動性網頁與視覺效果。',
					'- 具備良好的響應式設計，適合各種裝置。',
					'- 不需要處理 head 標籤、meta 標籤或 SEO，專注於網頁內容。',
					'',
					'活動資訊：',
					data
				].join('\n')
			}
		],
		response_format: zodResponseFormat(Website, 'website')
	});

	console.log('Usage:', response.usage);

	const choice = response.choices[0];
	if (!choice || !choice.message.content) {
		throw new Error('No response from OpenAI');
	}

	const parsed = Website.parse(JSON.parse(choice.message.content));
	return parsed;
}
