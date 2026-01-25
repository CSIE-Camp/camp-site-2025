<script lang="ts">
	import { assets } from '$app/paths';
	import { Carousel } from 'flowbite-svelte';

	const imageFiles = import.meta.glob('/static/images/*.{jpg,jpeg,png,gif}', { eager: true });
	let images = Object.entries(imageFiles).map(([path, module], index) => ({
		src: `${assets}${path.replace('/static', '')}`,
		alt: `Image ${index + 1}`
	}));
</script>

<section class="mb-20 text-pretty" id="CampHistory">
	<div class="my-3">
		<span class="text-4xl">歷屆回顧</span>
	</div>
	
	<!-- 歷屆網站連結 -->
	<div class="mb-6 flex flex-wrap gap-4 justify-center">
		<a
			href="https://camp.ntnucsie.info/2024"
			target="_blank"
			rel="noopener noreferrer"
			class="group flex items-center gap-2 border-2 border-white bg-black/40 px-6 py-3 text-xl text-white transition-all hover:bg-yellow-300 hover:text-black hover:border-yellow-300"
		>
			<span>2024 營隊網站</span>
			<svg class="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
			</svg>
		</a>
		<a
			href="https://camp.ntnucsie.info/2023"
			target="_blank"
			rel="noopener noreferrer"
			class="group flex items-center gap-2 border-2 border-white bg-black/40 px-6 py-3 text-xl text-white transition-all hover:bg-yellow-300 hover:text-black hover:border-yellow-300"
		>
			<span>2023 營隊網站</span>
			<svg class="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
			</svg>
		</a>
	</div>

	<div class="border-3 border-white bg-black/40 text-center">
		<div class="border-b-3 border-white text-2xl/15">2024 | 你們在 "code" 什麼</div>
		<div class="group">
			<Carousel
				{images}
				duration={5000}
				let:Controls
				let:Indicators
				class="aspect-[352/181] rounded-none"
				style="height:100%;"
			>
				<Indicators />
				<Controls let:ControlButton let:changeSlide>
					<ControlButton
						name="Previous"
						forward={false}
						on:click={() => changeSlide(false)}
						class="z-0 translate-x-5 hidden md:block"
					>
						<div
							class="flex h-12 w-12 items-center justify-center rounded-full bg-black/40 transition-colors hover:cursor-pointer hover:bg-black/80"
						>
							<img src={`${assets}/icons/preview.png`} alt="preview" class="h-3/5 w-3/5 object-contain" />
						</div>
					</ControlButton>

					<ControlButton
						name="Next"
						forward={true}
						on:click={() => changeSlide(true)}
						class="z-0 -translate-x-5 hidden md:block"
					>
						<div
							class="flex h-12 w-12 items-center justify-center rounded-full bg-black/40 transition-colors hover:cursor-pointer hover:bg-black/80"
						>
							<img src={`${assets}/icons/next.png`} alt="preview" class="h-3/5 w-3/5 object-contain" />
						</div>
					</ControlButton>
				</Controls>
			</Carousel>
		</div>
	</div>
</section>
