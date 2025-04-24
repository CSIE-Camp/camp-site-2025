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
	class="flex min-h-screen flex-col md:min-h-[calc(100vh-var(--navbar-height))] md:flex-row items-center px-2 sm:px-8 py-4"
	id="HeroPage"
>
	<!-- 左側圖片 -->
	<div class="flex flex-1 items-center justify-center">
		<img
			src="cube.png"
			alt="資工營主視覺"
			class="h-auto w-full max-w-lg floating"
		/>
	</div>
	
	<!-- 右側文字區塊 -->
	<div class="flex flex-1 flex-col items-start justify-center space-y-4 pl-6 py-4">
		<h1 class="text-3xl">2025 臺師大資工營</h1>
		<h2 class="text-6xl/20">資遊你和我的師界</h2>
		<div class="flex max-[1230px]:flex-col min-[1230px]:flex-row min-[1230px]:items-baseline min-[1230px]:gap-2">
			<p class="text-3xl">活動日期</p>
			<p class="text-6xl">
				<span class="min-[800px]:inline hidden">7/1 - 7/4</span>
				<span class="max-[800px]:inline hidden text-5xl">7/1 - 7/4</span>
			</p>
		</div>
		<a
			href="https://forms.gle/tZzXBLQuiR8QSpdKA"
			target="_blank"
			class="mt-4 rounded-none bg-yellow-300 px-10 py-3 text-3xl font-bold text-black transition hover:bg-yellow-500"
		>
			立即報名
		</a>
	</div>
</section>

<style>
	:root {
		--navbar-height: 0px;
	}

	@keyframes float {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-20px);
		}
		100% {
			transform: translateY(0);
		}
	}

	.floating {
		animation: float 3s ease-in-out infinite;
	}
</style>
