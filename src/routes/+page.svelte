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
    .cubic_font {
        font-family: "Cubic 11";
    }
</style>

<section class="mx-32 flex flex-col">
    <div class="w-full h-full mb-[22px] justify-center flex flex-col">
        <span class="cubic_font text-white text-[60px] font-[Cubic11] font-normal break-words">營隊資訊</span>
    </div>
    <div class="w-auto h-auto flex-shrink-0 bg-black/40 border-[3px] border-white">
		<p class="cubic_font text-center text-white mt-2 flex w-[1219px] h-[63.293px] mt-[62px] mb-[52px] flex-col justify-center items-center flex-shrink-0 text-[50px] font-normal mx-auto">
			距離報名截止剩餘：{countdown}
		</p>
        <div class="w-full h-full outline outline-[3px] outline-white -outline-offset-[1.5px]"></div>
        <div class="mt-6">
            <p class="cubic_font flex items-center">
                <span class="inline-flex w-[357px] h-[103px] -ml-6 -mr-8 flex-col justify-center flex-shrink-0 text-white text-center text-[50px] font-normal leading-[60px]">報名時間</span>
                <span class="text-white text-center text-[50px] font-normal leading-[60px] -ml-[18px] mr-6">|</span>
                <span class="inline-flex w-[1420px] h-[105px] flex-col justify-center flex-shrink-0 text-white text-[40px] font-normal leading-[60px]">NOW ~ 2025.05.31 (FRI) 23:59</span>
            </p>
            <p class="cubic_font flex items-center">
                <span class="inline-flex w-[357px] h-[103px] -ml-6 -mr-8 flex-col justify-center flex-shrink-0 text-white text-center text-[50px] font-normal leading-[60px]">活動時間</span>
                <span class="text-white text-center text-[50px] font-normal leading-[60px] -ml-[18px] mr-6">|</span>
                <span class="inline-flex w-[1420px] h-[105px] flex-col justify-center flex-shrink-0 text-white text-[40px] font-normal leading-[60px]">2025.07.01 (MON) 16:00 ~ 2025.07.04 (THU) 14:00</span>
            </p>
            <p class="cubic_font flex items-center">
                <span class="inline-flex w-[357px] h-[103px] -ml-6 -mr-8 flex-col justify-center flex-shrink-0 text-white text-center text-[50px] font-normal leading-[60px]">報名費用</span>
                <span class="text-white text-center text-[50px] font-normal leading-[60px] -ml-[18px] mr-6">|</span>
                <span class="inline-flex w-[1420px] h-[105px] flex-col justify-center flex-shrink-0 text-white text-[40px] font-normal leading-[60px]">早鳥優惠 $8787</span>
            </p>
            <p class="cubic_font flex items-center">
                <button type="button" 
                    class="cubic_font flex w-[278px] h-[103px] mt-4 ml-4 mr-[38px] flex-col justify-center flex-shrink-0 text-black text-center font-[Cubic11] text-[50px] font-normal leading-[60px] border-[3px] border-white hover:bg-yellow-400 hover:text-black bg-transparent text-white" 
                    on:click={() => switchLocation('activity')} 
                    on:keydown={(e) => e.key === 'Enter' && switchLocation('activity')}>
                    活動地點
                </button>
                <span class="inline-flex w-[1420px] h-[105px] flex-col justify-center flex-shrink-0 text-white text-[40px] font-normal leading-[60px] mt-[15px]">
                    國立臺灣師範大學公館校區
                </span>
            </p>
            <p class="cubic_font flex items-center">
                <button type="button" 
                    class="cubic_font flex w-[278px] h-[103px] mt-4 ml-4 mr-[38px] flex-col justify-center flex-shrink-0 text-black text-center font-[Cubic11] text-[50px] font-normal leading-[60px] border-[3px] border-white hover:bg-yellow-400 hover:text-black bg-transparent text-white" 
                    on:click={() => switchLocation('dorm')} 
                    on:keydown={(e) => e.key === 'Enter' && switchLocation('dorm')}>
                    住宿地點
                </button>
                <span class="inline-flex w-[1420px] h-[105px] flex-col justify-center flex-shrink-0 text-white text-[40px] font-normal leading-[60px] mt-[15px]">
                    承攜行旅 臺北重慶館<br/> 103 臺北市大同區臺北市大同區重慶北路一段 62 號
                </span>
            </p>
        </div>

        <div class="w-[90%] flex-shrink-0 aspect-[752/345] my-4 mx-4 rounded-lg overflow-hidden relative mx-auto">
            <iframe
                title="Location Map"
                src={currentMap}
                class="w-full h-full border-0"
                allowfullscreen
                loading="lazy">
</section>
