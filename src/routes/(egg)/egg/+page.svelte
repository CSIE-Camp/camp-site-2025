<script lang="ts">
	import { onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let data: {
		response: Promise<{
			scriptCdnUrls: string[];
			htmlContent: string;
			cssContent: string;
			jsContent: string;
		}>;
	};

	let loading = true;
	let error: string | null = null;
	let website: {
		scriptCdnUrls: string[];
		htmlContent: string;
		cssContent: string;
		jsContent: string;
	} | null = null;

	let loadingBar = 0;
	let loadingBarInterval: ReturnType<typeof setInterval> | null = null;
	const MAX_LOADING_TIME = 100_000; // 100 seconds in ms

	function startFakeLoadingBar() {
		const start = Date.now();
		loadingBar = 0;

		loadingBarInterval = setInterval(() => {
			const elapsed = Date.now() - start;
			// Progress slows down as it approaches 100%
			const progress = Math.min(
				99,
				(elapsed / MAX_LOADING_TIME) * 100 * (0.7 + 0.3 * Math.random())
			);
			loadingBar = Math.max(loadingBar, progress);

			// If loadingBar reaches 99% or loading is done, stop
			if (loadingBar >= 99 || !loading) {
				clearInterval(loadingBarInterval!);
				loadingBarInterval = null;
			}
		}, 100);
	}

	let loadingMessage = '';
	let loadingMessageIndex = 0;
	let loadingMessageInterval: ReturnType<typeof setInterval> | null = null;

	const computers = [
		'M3 Ultra Mac Studio',
		'M4 Max MacBook Pro',
		'iPhone 16 Pro Max',
		'NVIDIA GeForce RTX 5090',
		'NVIDIA DGX Spark'
	];
	const editors = [
		'VS Code',
		'Cursor',
		'Vim',
		'Emacs',
		'WebStorm',
		'Sublime Text',
		'Nano',
		'Xcode',
		'Atom'
	];
	const llms = [
		'OpenAI GPT-4.1',
		'OpenAI o3',
		'Anthropic Claude Sonnet 3.7',
		'Google Gemini 2.5 Pro',
		'Meta Llama 4 Behemoth'
	];
	const powerSources = [
		'確保電供穩定',
		'檢查 UPS 狀態',
		'插上延長線',
		'尋找 110V 插座',
		'更換電池',
		'呼叫工程師檢查電源'
	];

	const computer = computers[Math.floor(Math.random() * computers.length)];
	const powerSource = powerSources[Math.floor(Math.random() * powerSources.length)];
	const editor = editors[Math.floor(Math.random() * editors.length)];
	const llm = llms[Math.floor(Math.random() * llms.length)];

	const loadingMessages = [
		'恭喜你找到彩蛋！這是你專屬的頁面！',
		'正在聯繫我們的工程師，請稍候片刻',
		() => `工程師已就位，正在下單 ${computer}`,
		() => `購買的 ${computer} 已經抵達，正在${powerSource}`,
		() => `啟動 ${editor} 編輯器`,
		() => `正在詢問 ${llm} 意見`,
		'工程師正在進行腦力激盪（其實在喝咖啡）',
		'正在載入超級神秘模組',
		'工程師正在和鴨子討論解法',
		'git commit -am "feat: make .env public"',
		'網站正在 GitHub Actions 上進行測試',
		'正在進行 Code Review',
		'正在等待 CI/CD 綠燈',
		'正在召喚更多工程師加入戰局',
		'工程師正在和 PM 協商需求變更',
		'準備部署至 Cloudflare Pages',
		'好吧，我們可以再稍微等一下',
		'正在進行最後的測試',
		'正在進行最後的測試（真的）',
		'正在進行最後的測試（不然怎麼會這麼久）',
		'正在進行最後的測試（這是最後一次了）',
		'正在進行最後的測試（這是最後一次了，真的）',
		'現在我建議你重新整理一下這個頁面，也許會有所幫助'
	];

	function getLoadingMessage(idx: number) {
		const msg = loadingMessages[idx % loadingMessages.length];
		return typeof msg === 'function' ? msg() : msg;
	}

	function startLoadingMessageRotation() {
		loadingMessageIndex = 0;
		loadingMessage = getLoadingMessage(loadingMessageIndex);
		loadingMessageInterval = setInterval(() => {
			if (loadingMessageIndex < loadingMessages.length - 1) {
				loadingMessageIndex++;
			}
			loadingMessage = getLoadingMessage(loadingMessageIndex);
		}, 5000);
	}

	function stopLoadingMessageRotation() {
		if (loadingMessageInterval) {
			clearInterval(loadingMessageInterval);
			loadingMessageInterval = null;
		}
	}

	$: if (loading) {
		startFakeLoadingBar();
		startLoadingMessageRotation();
	} else {
		loadingBar = 100;
		stopLoadingMessageRotation();
		if (loadingBarInterval) {
			clearInterval(loadingBarInterval);
			loadingBarInterval = null;
		}
	}

	// Load and render the LLM-generated website
	onMount(async () => {
		try {
			website = await data.response;
			console.log('Website data:', website);
			loading = false;

			// Dynamically load external scripts
			if (website?.scriptCdnUrls) {
				for (const url of website.scriptCdnUrls) {
					if (!document.querySelector(`script[src="${url}"]`)) {
						const script = document.createElement('script');
						script.src = url;
						script.async = true;
						document.head.appendChild(script);
					}
				}
			}

			// Inject CSS
			if (website?.cssContent) {
				const style = document.createElement('style');
				style.textContent = website.cssContent;
				document.head.appendChild(style);
			}

			// Inject JS
			if (website?.jsContent) {
				const script = document.createElement('script');
				script.textContent = website.jsContent;
				document.body.appendChild(script);
			}
		} catch (e) {
			error = e instanceof Error ? e.message : String(e);
			loading = false;
		}
	});
</script>

{#if loading}
	<div class="egg-loading">
		<div class="egg-loading-bar-container">
			<div class="egg-loading-bar" style="width: {loadingBar}%"></div>
		</div>
		<div class="loading-message-wrapper">
			{#key loadingMessage}
				<div
					class="loading-message"
					in:fly={{ y: 32, duration: 350, delay: 350, easing: cubicOut }}
					out:fly={{ y: -32, duration: 350, easing: cubicOut }}
				>
					{loadingMessage}
				</div>
			{/key}
		</div>
	</div>
{:else if error}
	<div class="egg-error">Error: {error}</div>
{:else if website}
	{@html website.htmlContent}
{/if}

<style>
	.egg-loading,
	.egg-error {
		text-align: center;
		margin: 2rem;
		font-size: 1.5rem;
		color: #888;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.egg-loading-bar-container {
		width: 80%;
		max-width: 400px;
		height: 8px;
		background: #eee;
		border-radius: 4px;
		overflow: hidden;
		margin-bottom: 2rem;
	}

	.egg-loading-bar {
		height: 100%;
		background: linear-gradient(90deg, #6c63ff 0%, #a084ee 100%);
		transition: width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	}

	/* Optional: Add some styling for the message container if needed */
	.loading-message-wrapper {
		position: relative;
		width: 100%;
		height: 2.5em; /* Adjust as needed for your tallest message */
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.loading-message {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 2em;
		will-change: transform, opacity;
		/* Remove inline-block, since flex is used */
	}
</style>
