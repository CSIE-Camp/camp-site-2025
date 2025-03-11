<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { ChevronLeft, ChevronRight } from '@lucide/svelte';

	export let autoplay = true;
	export let interval = 5000; // Time in milliseconds between slides
	export let showControls = true;
	export let indicatorType = 'dots'; // 'dots' or 'bars'

	let currentIndex = 0;
	let slides: HTMLElement[] = [];
	let container: HTMLElement;
	let timer: ReturnType<typeof setInterval>;
	let hovering = false;
	let touching = false;
	let touchStartX = 0;
	let touchEndX = 0;

	onMount(() => {
		// Get all direct children as slides
		if (container) {
			slides = Array.from(container.children) as HTMLElement[];
			updateSlides();
		}

		// Set up autoplay if enabled
		if (autoplay) {
			startAutoplay();
		}
	});

	onDestroy(() => {
		if (timer) clearInterval(timer);
	});

	function startAutoplay() {
		timer = setInterval(() => {
			if (!hovering && !touching) {
				next();
			}
		}, interval);
	}

	function resetAutoplay() {
		if (autoplay) {
			clearInterval(timer);
			startAutoplay();
		}
	}

	function updateSlides() {
		slides.forEach((slide, index) => {
			if (index === currentIndex) {
				slide.classList.remove('hidden');
				slide.classList.add('block');
				slide.setAttribute('aria-hidden', 'false');
			} else {
				slide.classList.remove('block');
				slide.classList.add('hidden');
				slide.setAttribute('aria-hidden', 'true');
			}
		});
	}

	function next() {
		currentIndex = (currentIndex + 1) % slides.length;
		updateSlides();
		resetAutoplay();
	}

	function prev() {
		currentIndex = (currentIndex - 1 + slides.length) % slides.length;
		updateSlides();
		resetAutoplay();
	}

	function handleMouseEnter() {
		hovering = true;
	}

	function handleMouseLeave() {
		hovering = false;
	}

	function handleTouchStart(e: TouchEvent) {
		touching = true;
		touchStartX = e.touches[0].clientX;
	}

	function handleTouchEnd(e: TouchEvent) {
		touchEndX = e.changedTouches[0].clientX;
		handleSwipe();
		touching = false;
	}

	function handleSwipe() {
		const swipeDistance = touchEndX - touchStartX;
		// Require a minimum swipe distance to trigger navigation
		if (Math.abs(swipeDistance) > 50) {
			if (swipeDistance > 0) {
				prev();
			} else {
				next();
			}
		}
	}

	// Removed the unused slideTransition reactive declaration
</script>

<div
	class="relative"
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	on:touchstart={handleTouchStart}
	on:touchend={handleTouchEnd}
	role="region"
	aria-label="Image carousel"
>
	<div bind:this={container} class="carousel-container overflow-hidden rounded-lg">
		<slot />
	</div>

	{#if showControls && slides.length > 1}
		<!-- Previous/Next buttons -->
		<button
			class="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50 focus:ring-2 focus:ring-white/50 focus:outline-none"
			on:click={prev}
			aria-label="Previous slide"
		>
			<ChevronLeft class="size-6" />
		</button>

		<button
			class="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50 focus:ring-2 focus:ring-white/50 focus:outline-none"
			on:click={next}
			aria-label="Next slide"
		>
			<ChevronRight class="size-6" />
		</button>

		<!-- Indicators -->
		<div class="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
			{#each slides as _, i}
				{#if indicatorType === 'dots'}
					<button
						class="h-3 w-3 rounded-full transition-all focus:outline-none {i === currentIndex
							? 'scale-110 bg-white'
							: 'bg-white/50 hover:bg-white/70'}"
						on:click={() => {
							currentIndex = i;
							updateSlides();
							resetAutoplay();
						}}
						aria-label="Go to slide {i + 1}"
						aria-current={i === currentIndex}
					>
					</button>
				{:else}
					<button
						class="h-1 w-6 rounded-full transition-all focus:outline-none {i === currentIndex
							? 'bg-white'
							: 'bg-white/50 hover:bg-white/70'}"
						on:click={() => {
							currentIndex = i;
							updateSlides();
							resetAutoplay();
						}}
						aria-label="Go to slide {i + 1}"
						aria-current={i === currentIndex}
					>
					</button>
				{/if}
			{/each}
		</div>
	{/if}

	<!-- Accessibility info -->
	<div class="sr-only" aria-live="polite">
		{#if slides.length > 0}
			Showing slide {currentIndex + 1} of {slides.length}
		{/if}
	</div>
</div>
