<script lang="ts">
	import { onMount } from 'svelte';

	// 計算navbar高度
	let navbarHeight = 0;
	onMount(() => {
		const navbar = document.querySelector('nav');
		if (navbar) {
			navbarHeight = navbar.offsetHeight;
		}
	});
</script>

<section
	class="flex flex-col md:flex-row items-center px-2 sm:px-8"
	style="height: calc(100vh - {navbarHeight}px);"
	id="HeroPage"
>
	<!-- 左側圖片 -->
	<div class="flex flex-1 items-center justify-center">
		<img src="cube.png" alt="資工營主視覺" class="h-auto w-full" />
	</div>

	<!-- 右側文字區塊 -->
	<div class="flex flex-1 flex-col items-start justify-center space-y-4 pl-6">
		<h1 class="text-3xl">2025 臺師大資工營</h1>
		<h2 class="text-6xl/20">資遊你和我的師界</h2>
		<div class="flex max-[1230px]:flex-col min-[1230px]:flex-row min-[1230px]:items-baseline min-[1230px]:gap-2">
			<p class="text-3xl">報名期間</p>
			<p class="text-6xl">
				<span class="min-[800px]:inline hidden">04/21 - 05/19</span>
				<span class="max-[800px]:inline hidden text-5xl">4/21 - 5/19</span>
			</p>
		</div>
		<a
			href="https://forms.gle/tZzXBLQuiR8QSpdKA"
			class="mt-4 rounded-none bg-yellow-300 px-10 py-3 text-3xl font-bold text-black transition hover:bg-yellow-500"
		>
			立即報名
		</a>
	</div>
</section>
