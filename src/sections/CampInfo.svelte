<script lang="ts">
    import { onMount } from 'svelte';

    let countdown = '';
	
	const eventDate = new Date('2025-05-31T23:59:59');
	// 地圖位置的 Google Maps 連結
	const locations = {
		activity:
			'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.774712013287!2d121.53454321193558!3d25.007770077740933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa1e27ab738b%3A0x2e5be38c37583475!2z5ZyL56uL6Ie654Gj5bir56-E5aSn5a24IOWFrOmkqOagoeWNgA!5e0!3m2!1szh-TW!2stw!4v1743730247104!5m2!1szh-TW!2stw',
		dorm: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.367900441113!2d121.52431157429362!3d25.021585877824418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9fd810cbc83%3A0x38bf4a0a52f72137!2z5om_5pSc6KGM5peFIC0g5Y-w5YyX5Y-w5aSn6aSo!5e0!3m2!1szh-TW!2stw!4v1743789653775!5m2!1szh-TW!2stw'
	};

	let currentMap = locations.activity; // 預設顯示活動地點

	let stage; // 報名階段

	const now = new Date();
	if (now < new Date('2025-05-01T00:00:00')) {
		stage = 0; // 早鳥報名
	} else if (now < new Date('2025-05-20T00:00:00')) {
		stage = 1; // 一階報名
	} else if (now >= new Date('2025-05-27T00:00:00') && now < new Date('2025-06-02T00:00:00')) {
		stage = 2; // 二階報名
	} else if (now >= new Date('2025-06-02T00:00:00')) {
		stage = 3; // 報名已截止
	} else {
		stage = 4; // 非報名時段
	}

	let stageText = ''; // 報名階段文字

	let dateTexts = [
		'2025/04/21 - 2025/04/30', // 早鳥報名截止日期
		'2025/05/01 - 2025/05/19', // 一階報名截止日期
		'2025/05/27 - 2025/06/01', // 二階報名截止日期
		'', // 報名已截止
		'(若有名額則 5/27 後開放二階報名)' // 非報名時段
	];

	if (stage === 0) {
		stageText = '早鳥報名：' + dateTexts[stage];
	} else if (stage === 1) {
		stageText = '一階報名：' + dateTexts[stage];
	} else if (stage === 2) {
		stageText = '二階報名：' + dateTexts[stage];
	} else if (stage === 3) {
		stageText = '報名已截止' + dateTexts[stage];
	} else if (stage === 4) {
		stageText = '暫不受理報名 ' + dateTexts[stage];
	}

	let stageCostText = ''; // 報名費用文字

	let originalCostText = ''; // 原始報名費用
	if (stage === 0) {
		originalCostText = '7300';
		stageCostText = '6800 元'; // 早鳥報名費用
	} else if (stage === 1) {
		originalCostText = '';
		stageCostText = '7300 元'; // 一階報名費用
	} else if (stage === 2) {
		originalCostText = '';
		stageCostText = '7300 元'; // 二階報名費用
	} else if (stage === 3) {
		originalCostText = '';
		stageCostText = '7300 元 (報名已截止)'; // 報名已截止
	} else if (stage === 4) {
		originalCostText = '';
		stageCostText = '7300 元'; // 非報名時段
	}

	// 倒數計時邏輯
	onMount(() => {
		const interval = setInterval(() => {
			const now = new Date();
			const diff = eventDate.getTime() - now.getTime();

			if (diff <= 0) {
				clearInterval(interval);
				countdown = '報名已截止';
			} else {
				const days = Math.floor(diff / (1000 * 60 * 60 * 24));
				const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
				const minutes = Math.floor((diff / (1000 * 60)) % 60);
				const seconds = Math.floor((diff / 1000) % 60);
				countdown = `${days} 天 ${hours} 小時 ${minutes} 分鐘 ${seconds} 秒`;
			}
		}, 1000);
	});

	// 切換地圖位置
	function switchLocation(location: 'activity' | 'dorm') {
		currentMap = locations[location];
	}
</script>

<section class="mx-18 mb-20 min-w-[720px] text-pretty">
	<div class="my-3">
		<span class="text-4xl">營隊資訊</span>
	</div>
	<div class="border-3 border-white bg-black/40">
		<p class="border-b-3 border-white p-7 text-center text-3xl">
			距離報名截止剩餘：{countdown}
		</p>
		<div class="m-7 grid w-[95%] grid-cols-[15%_85%] items-center justify-center gap-x-6 gap-y-6">
			<div class="border-r-3 py-1 text-center text-3xl">報名時間</div>
			<div class="justify-self-start text-2xl">
				{stageText}
			</div>

			<div class="border-r-3 py-1 text-center text-3xl">報名費用</div>
			<div class="justify-self-start text-2xl">
				<span class="text-xl text-red-500 line-through">{originalCostText}</span>
				{stageCostText}
			</div>

			<div class="border-r-3 py-1 text-center text-3xl">活動時間</div>
			<div class="justify-self-start text-2xl">7/1 (二) - 7/4 (五)</div>

			<div class="border-r-3 py-1 text-center text-3xl">詳細資訊</div>
			<div class="justify-self-start text-2xl">
				<a
					href="https://docs.google.com/document/d/1yZE3Mumvc52DEaeNavlcUavxazWvIfe8/edit?rtpof=true&sd=true"
					class="hover:text-yellow-300">點此查看 活動簡章</a
				>
			</div>

			<button
				type="button"
				class="border-3 border-white py-3 text-center text-3xl hover:cursor-pointer hover:bg-yellow-300 hover:text-black"
				on:click={() => switchLocation('activity')}
				on:keydown={(e) => e.key === 'Enter' && switchLocation('activity')}
			>
				活動地點
			</button>
			<span class="justify-self-start text-2xl"> 國立台灣師範大學公館校區 </span>

			<button
				type="button"
				class="border-3 border-white py-3 text-center text-3xl hover:cursor-pointer hover:bg-yellow-300 hover:text-black"
				on:click={() => switchLocation('dorm')}
				on:keydown={(e) => e.key === 'Enter' && switchLocation('dorm')}
			>
				住宿地點
			</button>
			<span class="justify-self-start text-2xl">
				承攜行旅-台北台大館<br />（台北市中正區羅斯福路三段 98 號）
			</span>
		</div>

		<div class="mx-auto my-5 aspect-[752/345] w-[90%] overflow-hidden rounded-lg">
			<iframe
				title="Location Map"
				src={currentMap}
				class="h-full w-full border-0"
				allowfullscreen
				loading="lazy"
			>
			</iframe>
		</div>
	</div>
</section>