<script lang="ts">
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
</script>

<svelte:head>
	<title>國立台灣師範大學資訊工程夏令營 2025</title>
	<meta name="description" content="國立台灣師範大學電腦科學與資訊工程夏令營 2025" />
</svelte:head>

<!-- About Section -->
<section class="py-16 font-[Cubic-11]" id="about">
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