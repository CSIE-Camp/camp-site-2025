<script lang="ts">
	import '../app.css';
	import { Navbar, NavBrand, NavUl, NavHamburger } from 'flowbite-svelte';
	import { InstagramSolid, FacebookSolid } from 'flowbite-svelte-icons';
	let { children } = $props();
</script>

<div
	class="flex min-h-screen flex-col bg-[rgba(0,0,0,0.7)] bg-[url(/background.png)] bg-contain bg-fixed bg-center bg-repeat"
	style="background-blend-mode: multiply;"
>
	<Navbar class="sticky top-0 z-20 w-full bg-[#22222D] py-1">
		<NavBrand href="/">
			<img src="/profile.png" class="me-3 h-6 sm:h-10" alt="Flowbite Logo" />
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
				target="_blank"
				class="box-border block w-30 border-2 border-yellow-300 bg-yellow-300 p-1 text-center text-xl font-bold text-black transition-colors hover:border-yellow-500 hover:bg-yellow-500"
			>
				立即報名
			</a>
		</NavUl>
	</Navbar>

	<main class="container mx-auto max-w-7xl flex-grow px-2 sm:px-4">
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
		<div class="flex text-white">
			<a href="https://www.instagram.com/ntnucsiecamp2025/" target="_blank">
				<InstagramSolid class="size-20 hover:text-gray-400" />
			</a>
			<a href="https://www.facebook.com/ntnucsiecamp" target="_blank">
				<FacebookSolid class="size-20 hover:text-gray-400" />
			</a>
		</div>
	</footer>
</div>
