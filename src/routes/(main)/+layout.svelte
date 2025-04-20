<script lang="ts">
	import '../../app.css';
	import { Navbar, NavBrand, NavUl, NavHamburger } from 'flowbite-svelte';
	let { children } = $props();

	// 追蹤懸停狀態
	let isInstagramHovered = $state(false);
	let isFacebookHovered = $state(false);
</script>

<div
	class="flex min-h-screen flex-col bg-[rgba(0,0,0,0.7)] bg-[url(/background.png)] bg-contain bg-fixed bg-center bg-repeat"
	style="background-blend-mode: multiply;"
>
	<Navbar class="sticky top-0 z-20 w-full bg-[#22222D] py-1">
		<NavBrand href="/">
			<img src="/profile.png" class="me-3 h-6 sm:h-10" alt="Flowbite Logo" />
			<span class="self-center text-3xl font-semibold whitespace-nowrap text-white"
				>2025 NTNU CSIE CAMP</span
			>
		</NavBrand>
		<NavHamburger />
		<NavUl>
			<a
				href="#CampInfo"
				class="block w-30 border-2 border-white p-1 text-center text-xl text-white transition-colors hover:bg-yellow-500 hover:text-black"
			>
				活動資訊
			</a>
			<a
				href="#FAQ"
				class="block w-30 border-2 border-white p-1 text-center text-xl text-white transition-colors hover:bg-yellow-500 hover:text-black"
			>
				FAQ
			</a>
			<a
				href="#CourseInfo"
				class="block w-30 border-2 border-white p-1 text-center text-xl text-white transition-colors hover:bg-yellow-500 hover:text-black"
			>
				課程資訊
			</a>
			<a
				href="https://forms.gle/tZzXBLQuiR8QSpdKA"
				class="box-border block w-30 border-2 border-yellow-300 bg-yellow-300 p-1 text-center text-xl font-bold text-black transition-colors hover:border-yellow-500 hover:bg-yellow-500"
			>
				立即報名
			</a>
		</NavUl>
	</Navbar>

	<main class="container mx-auto max-w-7xl flex-grow px-4">
		{@render children()}
	</main>

	<footer class="flex items-center px-10 pb-10">
		<div class="px-10">
			<img src="/profile.png" alt="NTNU CSIE CAMP" class="size-30" />
		</div>
		<div class="grow text-white">
			<h2 class="text-3xl">2025 臺師大資工營 | 資遊你和我的師界</h2>
			<p class="text-xl/10">
				臺北市文山區汀州路四段 88 號 應用科學大樓<br />
				<a href="mailto:ntnucsiecamp2025@gmail.com">ntnucsiecamp2025@gmail.com</a><br />
				若有疑問可以來信或私訊粉專
			</p>
		</div>
		<div class="flex gap-5">
			<a
				href="https://www.instagram.com/ntnucsiecamp2025/"
				target="_blank"
				class="transition-transform hover:scale-110"
				onmouseenter={() => (isInstagramHovered = true)}
				onmouseleave={() => (isInstagramHovered = false)}
			>
				{#if isInstagramHovered}
					<img
						src="/icons/btn-ig-hover.png"
						alt="Instagram"
						class="size-25 object-contain transition-all duration-300"
					/>
				{:else}
					<img
						src="/icons/btn-ig.png"
						alt="Instagram"
						class="size-25 object-contain transition-all duration-300"
					/>
				{/if}
			</a>
			<a
				href="https://www.facebook.com/ntnucsiecamp"
				target="_blank"
				class="transition-transform hover:scale-110"
				onmouseenter={() => (isFacebookHovered = true)}
				onmouseleave={() => (isFacebookHovered = false)}
			>
				{#if isFacebookHovered}
					<img
						src="/icons/btn-fb-hover.png"
						alt="Facebook"
						class="size-25 object-contain transition-all duration-300"
					/>
				{:else}
					<img
						src="/icons/btn-fb.png"
						alt="Facebook"
						class="size-25 object-contain transition-all duration-300"
					/>
				{/if}
			</a>
		</div>
	</footer>
</div>
