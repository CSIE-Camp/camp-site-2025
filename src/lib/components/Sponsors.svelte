<section class="mb-20 text-pretty" id="Sponsors">
	<div class="my-3 text-center">
		<span class="text-4xl">特別感謝</span>
	</div>
    <div class="bg-black/40 text-center">
        <div class="container mx-auto p-8">
            <div class="flex justify-center items-stretch gap-8 flex-wrap">
                {#each sponsors as sponsor}
                    <div class="logo-item bg-white p-4 flex flex-col items-center w-66">
                        <div class="h-40 w-full overflow-hidden flex justify-center items-center">
                            <img src={sponsor.image} alt={sponsor.alt} class="w-full h-auto" />
                        </div>
                        <p class="text-black mt-4 text-xl">{sponsor.name} <br> {sponsor.description}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
