<script lang="ts">
    import { onMount } from 'svelte';

    if (import.meta.env.DEV) {
        import('./dev-style.css');
    }

    let countdown = '';
    const eventDate = new Date('2025-05-31T23:59:59');
	// 地圖位置的 Google Maps 連結
    const locations = {
        activity: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.774712013287!2d121.53454321193558!3d25.007770077740933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa1e27ab738b%3A0x2e5be38c37583475!2z5ZyL56uL6Ie654Gj5bir56-E5aSn5a24IOWFrOmkqOagoeWNgA!5e0!3m2!1szh-TW!2stw!4v1743730247104!5m2!1szh-TW!2stw",
        dorm: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.367900441113!2d121.52431157429362!3d25.021585877824418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9fd810cbc83%3A0x38bf4a0a52f72137!2z5om_5pSc6KGM5peFIC0g5Y-w5YyX5Y-w5aSn6aSo!5e0!3m2!1szh-TW!2stw!4v1743789653775!5m2!1szh-TW!2stw"
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

<section class="mx-18 text-pretty min-w-[720px]">
    <div class="mt-3 mb-3">
        <span class="text-white text-4xl font-[Cubic 11]">營隊資訊</span>
    </div>
    <div class="bg-black/40 border-3 border-white">
		<p class="mt-7 mb-7 text-center text-white text-3xl font-[Cubic 11]">
			距離報名截止剩餘：{countdown}
		</p>
        <hr class="border-2 border-white mb-5"/>
        <div class="w-[95%] mx-auto grid grid-cols-2 gap-x-6 gap-y-6 grid-cols-[15%_85%] font-[Cubic 11] text-white flex justify-center items-center">
            <div class="py-6 border-r-3 text-3xl text-center">報名時間</div>
            <div class="text-2xl justify-self-start">
                <ul>
                    <li>早鳥 4/21 - 4/30</li>
                    <li>一階 5/1 - 5/19</li>
                    <li>二階 5/27 - 6/1</li>
                </ul>
            </div>

            <div class="py-3 border-r-3 text-3xl text-center">報名費用</div>
            <div class="text-2xl justify-self-start">
                <ul>
                    <li>早鳥 6800</li>
                    <li>一二階 7300</li>
                </ul>
            </div>

            <div class="border-r-3 text-3xl text-center">報名費用</div>
            <div class="text-2xl justify-self-start">7/1 (二) - 7/4 (五)</div>

            <div class="border-r-3 text-3xl text-center">詳細資訊</div>
            <div class="text-2xl justify-self-start"><a href="https://docs.google.com/document/d/1yZE3Mumvc52DEaeNavlcUavxazWvIfe8/edit?rtpof=true&sd=true" class="hover:text-yellow-400">點此查看 活動簡章</a></div>

            <button type="button" 
                class="py-3 border-white border-3 text-3xl text-center hover:bg-yellow-400 hover:text-black hover:cursor-pointer" 
                on:click={() => switchLocation('activity')} 
                on:keydown={(e) => e.key === 'Enter' && switchLocation('activity')}>
                活動地點
            </button>
            <span class="text-2xl justify-self-start">
                國立台灣師範大學公館校區
            </span>
            
            <button type="button" 
                class="py-3 border-white border-3 text-3xl text-center hover:bg-yellow-400 hover:text-black hover:cursor-pointer"
                on:click={() => switchLocation('dorm')} 
                on:keydown={(e) => e.key === 'Enter' && switchLocation('dorm')}>
                住宿地點
            </button>
            <span class="text-2xl justify-self-start">
                承攜行旅-台北台大館<br/>（台北市中正區羅斯福路三段 98 號）
            </span>
        </div>

        <div class="w-[90%] aspect-[752/345] my-5 rounded-lg overflow-hidden mx-auto">
            <iframe
                title="Location Map"
                src={currentMap}
                class="w-full h-full border-0"
                allowfullscreen
                loading="lazy">
</section>
