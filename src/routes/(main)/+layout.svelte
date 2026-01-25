<script lang="ts">
	import '../../app.css';
	import { Navbar, NavBrand, NavUl, NavHamburger } from 'flowbite-svelte';
	import { assets, base } from '$app/paths';
	let { children } = $props();

	// 追蹤懸停狀態
	let isInstagramHovered = $state(false);
	let isFacebookHovered = $state(false);
</script>

<div
	class="flex min-h-screen flex-col bg-[rgba(0,0,0,0.7)] bg-contain bg-fixed bg-center bg-repeat dark"
	style={`background-image: url('${assets}/background.png'); background-blend-mode: multiply;`}
>
	<Navbar class="fixed top-0 z-50 w-full bg-[#22222D] py-1">
		<NavBrand href={`${base}/`}>
			<img src={`${assets}/profile.png`} class="me-3 h-6 sm:h-10" alt="Flowbite Logo" />
			<span class="self-center text-3xl font-semibold whitespace-nowrap text-white">
				<span class="max-[430px]:hidden">2025&nbsp;</span>NTNU CSIE CAMP
			</span>
			
		</NavBrand>
		<NavHamburger />
		<NavUl>
			<a
				href="#CampInfo"
				class="block w-30 border-2 border-white p-1 text-center text-xl text-white transition-colors hover:bg-yellow-500 hover:text-black"
			>
				營隊資訊
			</a>
			<a
				href="#CourseInfo"
				class="block w-30 border-2 border-white p-1 text-center text-xl text-white transition-colors hover:bg-yellow-500 hover:text-black"
			>
				課程資訊
			</a>
			<a
				href="#FAQ"
				class="block w-30 border-2 border-white p-1 text-center text-xl text-white transition-colors hover:bg-yellow-500 hover:text-black"
			>
				FAQ
			</a>
			<a
				href="#CampHistory"
				class="block w-30 border-2 border-white p-1 text-center text-xl text-white transition-colors hover:bg-yellow-500 hover:text-black"
			>
				歷屆回顧
			</a>
			<a
				href="https://forms.gle/tZzXBLQuiR8QSpdKA"
				target="_blank"
				class="box-border block w-30 border-2 border-yellow-300 bg-yellow-300 p-1 text-center text-xl font-bold text-black transition-colors hover:border-yellow-500 hover:bg-yellow-500"
			>
				立即報名
			</a>
		</NavUl>
	</Navbar>

	<main class="container mx-auto max-w-7xl flex-grow px-2 sm:px-4 mt-16">
		{@render children()}
	</main>

	<footer class="flex flex-col items-center gap-5 px-10 pb-10 sm:flex-row sm:items-start sm:gap-0">
		<div class="px-10">
			<img src={`${assets}/profile.png`} alt="NTNU CSIE CAMP" class="size-35 object-contain aspect-square" />
		</div>
		<div class="text-center text-white sm:grow sm:text-left">
			<h2 class="text-2xl sm:text-3xl leading-relaxed sm:leading-normal mb-5">
				<span class="whitespace-nowrap">2025 臺師大資工營</span>
				<span class="hidden sm:inline"> | </span>
				<br class="sm:hidden" />
				資遊你和我的師界
			</h2>
			<p class="text-lg sm:text-xl/10 leading-loose">
				臺北市文山區汀州路四段 88 號<br class="sm:hidden" />
				<span class="hidden sm:inline">&nbsp;</span>應用科學大樓<br />
				<a href="mailto:ntnucsiecamp2025@gmail.com">ntnucsiecamp2025@gmail.com</a><br />
				若有疑問可以來信或私訊粉專
			</p>
		</div>
		<div class="flex flex-col items-center gap-4 flex-grow justify-between sm:self-stretch">
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
								src={`${assets}/icons/btn-ig-hover.png`}
								alt="instagram"
								class="h-16 w-16"
							/>
					{:else}
							<img
								src={`${assets}/icons/btn-ig.png`}
								alt="instagram"
								class="h-16 w-16"
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
								src={`${assets}/icons/btn-fb-hover.png`}
								alt="facebook"
								class="h-16 w-16"
							/>
					{:else}
							<img
								src={`${assets}/icons/btn-fb.png`}
								alt="facebook"
								class="h-16 w-16"
							/>
					{/if}
				</a>
			</div>
			<div class="flex gap-4 text-lg text-white">
				<a 
					href="https://camp.ntnucsie.info/2024" 
					target="_blank" 
					rel="noopener noreferrer"
					class="underline hover:text-yellow-300 transition-colors"
				>
					2024
				</a>
				<a 
					href="https://camp.ntnucsie.info/2023" 
					target="_blank" 
					rel="noopener noreferrer"
					class="underline hover:text-yellow-300 transition-colors"
				>
					2023
				</a>
			</div>
		</div>
	</footer>
</div>
