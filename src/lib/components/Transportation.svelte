<script lang="ts">
    let activeTab = 'Bus';
</script>

<section class="mx-18 mb-20 min-w-[720px] text-pretty" id="Transportation">
	<div class="my-3">
		<span class="text-4xl text-white">交通方式</span>
	</div>
	<div class="border-3 border-white bg-black/40">
		<div class="border-b-3 border-white text-2xl/12 flex">
            <button 
                class="flex-1 hover:cursor-pointer
                {activeTab === 'Bus' ? 'bg-yellow-300 text-black' : ''}" 
                on:click={() => {activeTab = 'Bus'}}
            >
            搭公車
            </button>
            <div class="w-[3px] bg-white"></div>
			<button 
                class="flex-1 hover:cursor-pointer
                {activeTab === 'MRT' ? 'bg-yellow-300 text-black' : ''}" 
                on:click={() => {activeTab = 'MRT'}}
            >
            搭捷運
            </button>
		</div>
		<div class="text-2xl p-5 w-full text-center">
            {#if activeTab == 'Bus'}
            <p>搭乘</p>
            <p class="my-3 text-xl"> 
                0 南、109、236 區、251、251 區、252、<br>
                253、278、278 區、280、280 直、284、<br>
                505、52、530、606、643、644、<br>
                648、660、668、棕 11、藍 28、<br>
                羅斯福路幹線、松江新生幹線、復興幹線、基隆路幹線、景美-榮總（快）</p>
            <p>至「師大分部」站</p>
            <p class="text-5xl my-5">↓</p>
            <p>向西步行約 2 分鐘至國立台灣師範大學公館校區門口</p>

            {:else}
            <p>搭乘松山新店線（綠線）至「公館」站 1 號出口</p>
            <p class="text-5xl my-5">↓</p>
            <p>向東南步行約 12 分鐘至國立台灣師範大學公館校區門口</p>

            {/if}
		</div>
	</div>
</section>