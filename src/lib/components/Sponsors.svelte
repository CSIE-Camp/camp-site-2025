<script lang="ts">
    import { assets } from '$app/paths';
</script>

<section class="mb-20 text-pretty" id="Sponsors">
	<div class="my-3 text-center">
		<span class="text-4xl">特別感謝</span>
	</div>
    <div class="bg-black/40 text-center">
        <div class="container mx-auto p-8">
            <div class="flex justify-center items-stretch gap-8 flex-wrap">
                <div class="logo-item bg-white p-4 flex flex-col items-center w-72">
                    <div class="h-40 w-full overflow-hidden flex justify-center items-center">
                        <img src={`${assets}/sponsors/raingo_logo.png`} alt="Raingo" class="w-full h-auto" />
                    </div>
                    <p class="text-black mt-4 text-xl">raingo <br> 樂眾科技股份有限公司</p>
                </div>
                <div class="logo-item bg-white p-4 flex flex-col items-center w-72">
                    <div class="h-40 w-full overflow-hidden flex justify-center items-center">
                        <img src={`${assets}/sponsors/SuDo_Research_Labs_Logo.png`} alt="SuDo Research Labs" class="w-full h-auto" />
                    </div>
                    <p class="text-black mt-4 text-xl">SuDo Research Labs <br> 蘇度科技有限公司</p>
                </div>
            </div>
        </div>
    </div>
</section>
