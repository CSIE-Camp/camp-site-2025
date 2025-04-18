<script lang="ts">
	import { Carousel } from 'flowbite-svelte';

	const imageFiles = import.meta.glob('/static/images/*.{jpg,jpeg,png,gif}', { eager: true });
	let images = Object.entries(imageFiles).map(([path, module], index) => ({
		src: path.replace('/static', ''),
		alt: `Image ${index + 1}`
	}));
</script>

<section class="mb-20 text-pretty" id="CampHistory">
	<div class="my-3">
		<span class="text-4xl">歷屆回顧</span>
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
						class=" z-0 translate-x-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
					>
						<div
							class="flex h-12 w-12 items-center justify-center rounded-full bg-black/40 transition-colors hover:cursor-pointer hover:bg-black/80"
						>
							<img src="/icons/preview.png" alt="preview" class="h-3/5 w-3/5 object-contain" />
						</div>
					</ControlButton>

					<ControlButton
						name="Next"
						forward={true}
						on:click={() => changeSlide(true)}
						class="z-0 -translate-x-5 opacity-50 transition-opacity duration-500 group-hover:opacity-100"
					>
						<div
							class="flex h-12 w-12 items-center justify-center rounded-full bg-black/40 transition-colors hover:cursor-pointer hover:bg-black/80"
						>
							<img src="/icons/next.png" alt="preview" class="h-3/5 w-3/5 object-contain" />
						</div>
					</ControlButton>
				</Controls>
			</Carousel>
		</div>
	</div>
</section>
