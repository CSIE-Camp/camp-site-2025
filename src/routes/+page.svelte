<script lang="ts">
	import { Canvas } from '@threlte/core';
	import { Button, Card, Heading, P, Timeline, TimelineItem, Badge } from 'flowbite-svelte';
	import {
		ArrowRight,
		Calendar,
		GraduationCap,
		Users,
		FlaskRound,
		Code,
		Rocket
	} from '@lucide/svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import HeroScene from '$lib/components/HeroScene.svelte';
</script>

<svelte:head>
	<title>國立台灣師範大學資訊工程夏令營 2025</title>
	<meta name="description" content="國立台灣師範大學電腦科學與資訊工程夏令營 2025" />
</svelte:head>

<!-- 3D Scene Background -->
<Canvas>
	<HeroScene />
</Canvas>

<!-- Hero Section -->
<section class="relative -mx-4 mb-16 overflow-hidden px-4 py-20 text-white">
	<!-- Overlay gradient for better text readability -->
	<div
		class="from-primary-900/80 to-primary-800/70 absolute inset-0 bg-gradient-to-br backdrop-blur-sm"
	></div>

	<div class="container mx-auto flex flex-col items-center gap-8 md:flex-row">
		<div class="z-10 md:w-1/2">
			<Badge class="mb-4 bg-white/20 text-white">2025 年 7 月 10-17 日</Badge>
			<Heading tag="h1" class="mb-6 text-4xl leading-tight font-extrabold md:text-5xl">
				探索程式設計的<span class="underline decoration-yellow-300 decoration-4 underline-offset-4"
					>無限可能</span
				>
			</Heading>
			<P class="mb-8 text-lg text-white/90">
				加入國立台灣師範大學資訊工程夏令營，一同展開充滿刺激的電腦科學與資訊工程之旅。獲得尖端科技的實作經驗，並與志同道合的夥伴建立連結。
			</P>
			<div class="flex flex-wrap gap-4">
				<Button color="none" href="/courses" class="text-primary-700 bg-white hover:bg-gray-100">
					探索課程
					<ArrowRight class="ml-2 size-5" />
				</Button>
				<Button
					color="light"
					href="#schedule"
					class="border-white bg-transparent text-white hover:bg-white/10"
				>
					查看時程
				</Button>
			</div>
		</div>
		<div class="z-10 mt-8 md:mt-0 md:w-1/2">
			<div class="rounded-lg bg-white/10 p-2 backdrop-blur-sm">
				<Carousel interval={6000}>
					<div
						class="relative flex h-56 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 md:h-96"
					>
						<Code class="size-24 text-white/50" />
						<div class="absolute right-0 bottom-0 left-0 bg-black/30 p-4 backdrop-blur-sm">
							<p class="text-xl font-bold text-white">程式設計基礎</p>
							<p class="text-white/80">從零開始學習程式設計的核心概念</p>
						</div>
					</div>
					<div
						class="relative flex h-56 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 md:h-96"
					>
						<FlaskRound class="size-24 text-white/50" />
						<div class="absolute right-0 bottom-0 left-0 bg-black/30 p-4 backdrop-blur-sm">
							<p class="text-xl font-bold text-white">資料結構與演算法</p>
							<p class="text-white/80">深入了解電腦科學的核心概念</p>
						</div>
					</div>
					<div
						class="relative flex h-56 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-600 to-green-800 md:h-96"
					>
						<Users class="size-24 text-white/50" />
						<div class="absolute right-0 bottom-0 left-0 bg-black/30 p-4 backdrop-blur-sm">
							<p class="text-xl font-bold text-white">合作專案</p>
							<p class="text-white/80">團隊協作開發實際應用的軟體專案</p>
						</div>
					</div>
				</Carousel>
			</div>
		</div>
	</div>
</section>

<!-- About Section -->
<section class="py-16" id="about">
	<Heading tag="h2" class="mb-2 text-center">營隊特色</Heading>
	<p class="mx-auto mb-12 max-w-2xl text-center text-gray-500">
		我們提供全方位的電腦科學學習體驗，從基礎理論到實際應用
	</p>

	<div class="grid gap-8 md:grid-cols-3">
		<Card class="border-none transition-transform hover:-translate-y-1 hover:shadow-lg">
			<div class="mb-4 flex justify-center">
				<div
					class="flex size-16 items-center justify-center rounded-full bg-blue-100 text-blue-600"
				>
					<GraduationCap class="size-8" />
				</div>
			</div>
			<Heading tag="h3" class="text-center">扎實學習</Heading>
			<P class="text-center text-gray-500">
				透過互動式講座與工作坊探索基礎電腦科學概念，由經驗豐富的教授親自授課。
			</P>
		</Card>

		<Card class="border-none transition-transform hover:-translate-y-1 hover:shadow-lg">
			<div class="mb-4 flex justify-center">
				<div
					class="flex size-16 items-center justify-center rounded-full bg-purple-100 text-purple-600"
				>
					<FlaskRound class="size-8" />
				</div>
			</div>
			<Heading tag="h3" class="text-center">實作體驗</Heading>
			<P class="text-center text-gray-500">
				在實作程式碼環節中運用知識，打造實際專案。學習最新的開發工具和技術。
			</P>
		</Card>

		<Card class="border-none transition-transform hover:-translate-y-1 hover:shadow-lg">
			<div class="mb-4 flex justify-center">
				<div
					class="flex size-16 items-center justify-center rounded-full bg-green-100 text-green-600"
				>
					<Users class="size-8" />
				</div>
			</div>
			<Heading tag="h3" class="text-center">人脈連結</Heading>
			<P class="text-center text-gray-500">
				與同儕、導師以及業界專家在資訊工程領域交流。建立寶貴的人脈，為未來發展鋪路。
			</P>
		</Card>
	</div>
</section>

<!-- Schedule Section -->
<section class="rounded-xl bg-gray-100 px-8 py-16" id="schedule">
	<div class="mx-auto max-w-4xl">
		<Heading tag="h2" class="mb-2 text-center">夏令營時程</Heading>
		<p class="mx-auto mb-12 max-w-2xl text-center text-gray-500">為期8天的精彩課程與活動安排</p>

		<Timeline>
			<TimelineItem title="第一天：程式設計簡介" date="2025 年 7 月 10 日">
				<div slot="icon" class="bg-primary-100 text-primary-700">
					<Calendar class="size-5" />
				</div>
				<p class="text-gray-600">
					歡迎會議、團隊組成，以及程式設計基礎介紹。建立營隊社群，認識志同道合的夥伴。
				</p>
			</TimelineItem>

			<TimelineItem title="第2-3天：資料結構與演算法" date="2025 年 7 月 11-12 日">
				<div slot="icon" class="bg-primary-100 text-primary-700">
					<Calendar class="size-5" />
				</div>
				<p class="text-gray-600">透過實例學習基礎資料結構與演算法。解決實際問題，參與團隊競賽。</p>
			</TimelineItem>

			<TimelineItem title="第4-5天：網頁開發" date="2025 年 7 月 13-14 日">
				<div slot="icon" class="bg-primary-100 text-primary-700">
					<Calendar class="size-5" />
				</div>
				<p class="text-gray-600">介紹網頁技術、建立響應式介面與後端基礎。開發個人作品集網站。</p>
			</TimelineItem>

			<TimelineItem title="第6-7天：專案開發" date="2025 年 7 月 15-16 日">
				<div slot="icon" class="bg-primary-100 text-primary-700">
					<Calendar class="size-5" />
				</div>
				<p class="text-gray-600">在業界專家的指導下進行合作專案。應用所學知識，解決實際問題。</p>
			</TimelineItem>

			<TimelineItem title="第8天：專案展示" date="2025 年 7 月 17 日">
				<div slot="icon" class="bg-primary-100 text-primary-700">
					<Calendar class="size-5" />
				</div>
				<p class="text-gray-600">
					最終專案報告、頒獎典禮及結營慶祝。與業界代表交流，展示學習成果。
				</p>
			</TimelineItem>
		</Timeline>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16">
	<div
		class="from-primary-600 to-primary-800 mx-auto max-w-4xl rounded-2xl bg-gradient-to-r p-8 text-center text-white shadow-xl"
	>
		<Heading tag="h2" class="mb-4">準備好接受挑戰了嗎？</Heading>
		<P class="mb-8">國立台灣師範大學資訊工程夏令營 2025 名額有限，立即預訂你的席位！</P>
		<div
			class="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
		>
			<Button size="xl" color="none" class="text-primary-700 bg-white hover:bg-gray-100">
				<Rocket class="mr-2 size-5" />
				立即報名
			</Button>
			<Button
				size="xl"
				href="/courses"
				color="light"
				class="border-white bg-transparent text-white hover:bg-white/10"
			>
				探索課程
			</Button>
		</div>
	</div>
</section>
