<script lang="ts">
    import { onMount } from 'svelte';

    let countdown = '';
    const eventDate = new Date('2025-05-31T23:59:59');

	// 地圖位置的 Google Maps 連結
    const locations = {
        activity: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.774712013287!2d121.53454321193558!3d25.007770077740933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa1e27ab738b%3A0x2e5be38c37583475!2z5ZyL56uL6Ie654Gj5bir56-E5aSn5a24IOWFrOmkqOagoeWNgA!5e0!3m2!1szh-TW!2stw!4v1743730247104!5m2!1szh-TW!2stw",
        dorm: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.47157532015!2d121.51124971193659!3d25.05200097771215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a97017461e01%3A0xd2290ddf267d9ffe!2z5om_5pSc6KGM5peFIC0g5Y-w5YyX6YeN5oW26aSo!5e0!3m2!1szh-TW!2stw!4v1743730307162!5m2!1szh-TW!2stw"
    };

    let currentMap = locations.activity; // 預設顯示活動地點

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

<style>
	.cube_front {
		font-family: "Cubic 11";
	}
	.camp-info {
		/* Layout - 控制區塊的排版 */
		display: flex;
		width: 1219px;
		height: 63.293px;
		margin-top: 52px;
		margin-bottom: 52px;
		flex-direction: column;
		justify-content: center;
		flex-shrink: 0;

		/* Typography - 控制文字樣式 */
		color: #FFF;
		font-size: 50px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
	.sub_title {
		/* Layout - 控制區塊的排版 */
		display: inline-flex;
		width: 357px;
		height: 103px;
		margin-left: -24px;
		margin-right: -32px;
		flex-direction: column;
		justify-content: center;
		flex-shrink: 0;

		/* Typography - 控制文字樣式 */
		color: #FFF;
		text-align: center;
		font-size: 50px;
		font-style: normal;
		font-weight: 400;
		line-height: 60px; /* 120% */
	}
	.separate-line {
		/* Layout - 控制區塊的排版 */
		margin-left: -18px;
		margin-right: 24px;

		/* Typography - 控制文字樣式 */
		color: #FFF;
		text-align: center;
		font-size: 50px;
		font-style: normal;
		font-weight: 400;
		line-height: 60px; /* 120% */
	}
	.context {
		/* Layout - 控制區塊的排版 */
		display: inline-flex;
		width: 1420px;
		height: 105px;
		flex-direction: column;
		justify-content: center;
		flex-shrink: 0;

		/* Typography - 控制文字樣式 */
		color: #FFF;
		font-size: 40px;
		font-style: normal;
		font-weight: 400;
		line-height: 60px; /* 150% */
	}
	.activate_btn {
		/* Layout - 控制區塊的排版 */
		display: flex;
		width: 278px;
		height: 103px;
		margin-top: 1rem;
		margin-left: 1rem;
		margin-right: 38px;
		flex-direction: column;
		justify-content: center;
		flex-shrink: 0;

		/* Typography - 控制文字樣式 */
		color: #000;
		text-align: center;
		font-family: "Cubic 11";
		font-size: 50px;
		font-style: normal;
		font-weight: 400;
		line-height: 60px; /* 120% */
		border: 3px white solid;
	}
    .map-container {
        width: 90%;
		flex-shrink: 0;
		aspect-ratio: 752/345;
        margin-top: 1rem;
		margin-bottom: 1rem;
		margin-left: 1rem;
		margin-right: 1rem;
		border-radius: 0.5rem;
		overflow: hidden;
		position: relative;
    }

    .btn {
        background-color: #00000000;
        color: #ffffff;
    }

    .btn:hover {
        background-color: #fbbf24;
		color: #000;
    }
	.rectangle-46 {
		width: auto;
		height: auto;
		flex-shrink: 0;
		background: rgba(0, 0, 0, 0.40);
		border: 3px white solid;
	}
	.line-1 {
		width: 100%;
		height: 100%;
		outline: 3px white solid;
		outline-offset: -1.50px;
	}
	.fspan {
		color: white;
		font-size: 60px;
		font-family: Cubic 11;
		font-weight: 400;
		word-wrap: break-word;
	}
	.title {
		width: 100%;
		height: 100%;
		margin-bottom: 22px;
		justify-content: center;
		display: flex;
		flex-direction: column;
	}
	section {
		margin-left: 128px;
		margin-right: 128px;
		display: flex;
		flex-direction: column;
	}
</style>

<section class="p-6 bg-gray-800 text-white">
    <div class="title cube_front"><span class="fspan">營隊資訊</span></div>
    <div class="rectangle-46">
		<p class="cube_front text-center text-yellow-400 mt-2 camp-info" style="margin-left: auto; margin-right: auto;">距離報名截止剩餘：{countdown}</p>
		<div class="line-1"></div>
		<div class="mt-6">
			<p class="cube_front flex items-center"><span class="sub_title inline-flex">報名時間</span><span class="separate-line inline-flex">|</span><span class="context inline-flex">NOW ~ 2025.05.31 (FRI) 23:59</span></p>
			<p class="cube_front flex items-center"><span class="sub_title inline-flex">活動時間</span><span class="separate-line inline-flex">|</span><span class="context inline-flex">2025.07.01 (MON) 10:00 ~ 2025.07.04 (THU) 14:00</span></p>
			<p class="cube_front flex items-center"><span class="sub_title inline-flex">報名費用</span><span class="separate-line inline-flex">|</span><span class="context inline-flex">早鳥優惠 $8787</span></p>
			<p class="cube_front flex items-center"><button type="button" class="btn activate_btn" on:click={() => switchLocation('activity')} on:keydown={(e) => e.key === 'Enter' && switchLocation('activity')}>活動地點 </button><span class="context inline-flex" style="margin-top: 15px;">國立臺灣師範大學公館校區</span></p>
			<p class="cube_front flex items-center"><button type="button" class="btn activate_btn" on:click={() => switchLocation('dorm')} on:keydown={(e) => e.key === 'Enter' && switchLocation('dorm')}>住宿地點</button><span class="context inline-flex" style="margin-top: 15px;">承攜行旅 臺北重慶館 103 臺北市大同區臺北市大同區重慶北路一段 62 號</span></p>
		</div>

		<!-- 地圖嵌入 -->
		<div class="map-container" style="margin-left: auto; margin-right: auto;">
			<iframe
				title="Location Map"
				src={currentMap}
				width="100%"
				height="100%"
				style="border:0;"
				allowfullscreen
				loading="lazy">
			</iframe>
		</div>
	</div>
</section>
