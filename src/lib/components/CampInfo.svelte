<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	let countdown = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	};

	// Track previous values to detect changes
	let prevCountdown = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	};

	// Flash flags for each unit
	let flashDay = false;
	let flashHour = false;
	let flashMinute = false;
	let flashSecond = false;

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

	let isCountdownActive = true;
	const secondsProgress = tweened(0, { duration: 1000, easing: cubicOut });

	// 倒數計時邏輯
	onMount(() => {
		const interval = setInterval(() => {
			const now = new Date();
			const diff = eventDate.getTime() - now.getTime();

			if (diff <= 0) {
				clearInterval(interval);
				isCountdownActive = false;
				countdown = {
					days: 0,
					hours: 0,
					minutes: 0,
					seconds: 0
				};
			} else {
				// Store previous values
				prevCountdown = { ...countdown };

				countdown = {
					days: Math.floor(diff / (1000 * 60 * 60 * 24)),
					hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
					minutes: Math.floor((diff / (1000 * 60)) % 60),
					seconds: Math.floor((diff / 1000) % 60)
				};

				// Check for changes and trigger flashes
				if (prevCountdown.days !== countdown.days) {
					flashDay = true;
					setTimeout(() => (flashDay = false), 500);
				}
				if (prevCountdown.hours !== countdown.hours) {
					flashHour = true;
					setTimeout(() => (flashHour = false), 500);
				}
				if (prevCountdown.minutes !== countdown.minutes) {
					flashMinute = true;
					setTimeout(() => (flashMinute = false), 500);
				}
				// Always flash seconds as they change every time
				flashSecond = true;
				setTimeout(() => (flashSecond = false), 500);

				secondsProgress.set(countdown.seconds / 60);
			}
		}, 1000);

		return () => clearInterval(interval);
	});

	// 切換地圖位置
	function switchLocation(location: 'activity' | 'dorm') {
		currentMap = locations[location];
	}
</script>

<section class="mb-20 text-pretty" id="CampInfo">
	<div class="my-3">
		<span class="text-4xl">營隊資訊</span>
	</div>
	<div class="border-3 border-white bg-black/40">
		{#if isCountdownActive}
			<div class="border-b-3 border-white p-7 text-center">
				<p class="mb-4 text-3xl">距離報名截止剩餘</p>
				<div class="countdown-container">
					<div class="countdown-unit {flashDay ? 'flash' : ''}">
						<div class="countdown-value">{countdown.days}</div>
						<div class="countdown-label">天</div>
					</div>
					<div class="countdown-separator">:</div>
					<div class="countdown-unit {flashHour ? 'flash' : ''}">
						<div class="countdown-value">{countdown.hours}</div>
						<div class="countdown-label">時</div>
					</div>
					<div class="countdown-separator">:</div>
					<div class="countdown-unit {flashMinute ? 'flash' : ''}">
						<div class="countdown-value">{countdown.minutes}</div>
						<div class="countdown-label">分</div>
					</div>
					<div class="countdown-separator">:</div>
					<div class="countdown-unit {flashSecond ? 'flash' : ''}">
						<div class="countdown-value">{countdown.seconds}</div>
						<div class="countdown-label">秒</div>
					</div>
				</div>
			</div>
		{:else}
			<p class="border-b-3 border-white p-7 text-center text-3xl">報名已截止</p>
		{/if}
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
			<span class="justify-self-start text-2xl"> 國立臺灣師範大學 公館校區 </span>

			<button
				type="button"
				class="border-3 border-white py-3 text-center text-3xl hover:cursor-pointer hover:bg-yellow-300 hover:text-black"
				on:click={() => switchLocation('dorm')}
				on:keydown={(e) => e.key === 'Enter' && switchLocation('dorm')}
			>
				住宿地點
			</button>
			<span class="justify-self-start text-2xl">
				<a 
					href="https://guidehotel.com.tw/hotel-detail/346" 
					target="_blank"
					class="hover:text-yellow-300"> 承攜行旅-台北台大館 </a><br />
					<a 
						href="https://maps.app.goo.gl/kVK1XueDzAtNsBW6A"
						target="_blank"
						class="hover:text-yellow-300">（臺北市中正區羅斯福路三段 98 號）</a>
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

<style>
	.countdown-container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin: 1rem 0;
	}

	.countdown-unit {
		position: relative;
		background-color: rgba(0, 0, 0, 0.5);
		border: 3px solid white;
		border-radius: 0.5rem;
		padding: 1rem;
		width: 6rem;
		overflow: hidden;
		transition: transform 0.3s ease;
	}

	.flash {
		animation: flash-background 1s ease-out forwards;
	}

	@keyframes flash-background {
		0% {
			background-color: rgba(255, 255, 0, 0.8);
		}
		20% {
			background-color: rgba(255, 255, 0, 0.8);
		}
		50% {
			background-color: rgba(0, 0, 0, 0.5);
		}
		90% {
			background-color: rgba(0, 0, 0, 0.5);
		}
		100% {
			background-color: rgba(255, 255, 0, 0.8);
		}
	}

	.countdown-value {
		font-size: 2.5rem;
		font-weight: bold;
		text-align: center;
		text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
		z-index: 2;
		position: relative;
	}

	.countdown-label {
		text-align: center;
		font-size: 1rem;
		margin-top: 0.5rem;
		color: rgba(255, 255, 255, 0.8);
	}

	.countdown-separator {
		font-size: 2rem;
		font-weight: bold;
		align-self: center;
	}
</style>
