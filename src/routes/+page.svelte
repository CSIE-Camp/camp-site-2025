<script lang="ts">
	import yourImage from '$lib/assets/cube.png';
	import backgroundImage from '$lib/assets/background.png';

	let title = '2025 臺師大資工營';
	let subtitle = '資遊你和我的師界';
	let signupPeriod = '04/21 - 05/31';
</script>

<section
	class="relative bg-cover bg-center min-h-screen flex items-center px-8"
	style="background-image: url({backgroundImage});"
>
	<!-- 左側圖片 -->
	<div class="flex-1 flex justify-center items-center">
		<img src="{yourImage}" alt="資工營主視覺" class="w-full max-w-lg h-auto" />
	</div>

	<!-- 右側文字區塊 -->
	<div class="flex-1 flex flex-col justify-center items-start pl-6 text-white space-y-4">
		<h1 style="font-family: 'Cubic 11'; font-size: 1.5rem;">
			{title}
		</h1>
		<h2 style="font-family: 'Cubic 11'; font-size: 2.5rem;">
			{subtitle}
		</h2>
		<p style="font-family: 'Cubic 11'; font-size: 1.5rem;" class="flex items-center">
			報名期間
			<span class="ml-2 text-3xl">
				{signupPeriod}
			</span>
		</p>
		<a
			href="https://forms.gle/tZzXBLQuiR8QSpdKA"
			class="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-10 text-2xl rounded-none transition"
		>
			立即報名
		</a>
	</div>
</section>
