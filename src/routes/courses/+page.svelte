<script lang="ts">
	import {
		Heading,
		P,
		Card,
		Badge,
		Button,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Tabs,
		TabItem,
		Input,
		Spinner
	} from 'flowbite-svelte';
	import {
		ArrowRight,
		Code,
		ServerCrash,
		Cpu,
		Presentation,
		Rocket,
		Search,
		Calendar,
		Clock,
		User
	} from '@lucide/svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	const courses = [
		{
			id: 'cs101',
			title: '程式設計基礎',
			description: '以 Python 為例介紹程式設計概念，包括變數、流程控制、函式和基本資料結構。',
			icon: Code,
			level: '初學者',
			color: 'green',
			duration: '2 天',
			instructor: '林教授',
			prerequisites: '無',
			image:
				'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
			date: '2025 年 7 月 10-11 日',
			time: '上午 9:00 - 下午 4:00',
			location: '資訊實驗室 101'
		},
		{
			id: 'cs102',
			title: '資料結構與演算法',
			description:
				'探索陣列、鏈結串列、樹狀結構與圖形等基本資料結構，以及搜尋、排序和解題的常見演算法。',
			icon: Cpu,
			level: '中級',
			color: 'yellow',
			duration: '3 天',
			instructor: '王博士',
			prerequisites: '基礎程式設計知識',
			image:
				'https://images.unsplash.com/photo-1535551951406-a19828b0a76b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
			date: '2025 年 7 月 12-14 日',
			time: '上午 9:00 - 下午 4:00',
			location: '資訊實驗室 102'
		},
		{
			id: 'cs103',
			title: '網頁開發',
			description: '學習如何使用 HTML、CSS、JavaScript 以及熱門框架來建立現代網頁應用程式。',
			icon: ServerCrash,
			level: '中級',
			color: 'yellow',
			duration: '2 天',
			instructor: '陳教授',
			prerequisites: '程式設計基礎',
			image:
				'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
			date: '2025 年 7 月 15-16 日',
			time: '上午 9:00 - 下午 4:00',
			location: '資訊實驗室 103'
		},
		{
			id: 'cs104',
			title: '專案工作坊',
			description: '在協作環境中運用你的技能，由經驗豐富的導師指導下設計並完成整個專案。',
			icon: Presentation,
			level: '所有程度',
			color: 'indigo',
			duration: '3 天',
			instructor: '多位導師',
			prerequisites: '不拘前置課程',
			image:
				'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
			date: '2025 年 7 月 15-17 日',
			time: '上午 9:00 - 下午 5:00',
			location: '資訊中心'
		}
	] as const;

	let searchTerm = '';
	let activeTab = 'all';
	let loading = true;

	onMount(() => {
		setTimeout(() => {
			loading = false;
		}, 500);
	});

	$: filteredCourses = courses.filter((course) => {
		// Filter by search term
		const searchMatch =
			course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			course.description.toLowerCase().includes(searchTerm.toLowerCase());

		// Filter by level tab
		const levelMatch =
			activeTab === 'all' ||
			(activeTab === 'beginner' && course.level === '初學者') ||
			(activeTab === 'intermediate' && course.level === '中級') ||
			(activeTab === 'all-levels' && course.level === '所有程度');

		return searchMatch && levelMatch;
	});
</script>

<svelte:head>
	<title>課程 | 師大資工營 2025</title>
	<meta name="description" content="探索國立台灣師範大學資訊工程夏令營 2025 所提供的課程" />
</svelte:head>

<section>
	<div class="mb-12 text-center">
		<Heading tag="h1" class="text-primary-700 mb-4">探索我們的課程</Heading>
		<P class="mx-auto max-w-2xl text-gray-600">
			透過全面的電腦科學與資訊工程課程，幫助你建立面向數位未來的基本技能。
		</P>

		<div class="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
			<div class="relative w-full max-w-md">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<Search class="size-5 text-gray-400" />
				</div>
				<Input bind:value={searchTerm} placeholder="搜尋課程..." class="pl-10" />
			</div>

			<Tabs style="pill" class="w-full sm:w-auto">
				<TabItem open={activeTab === 'all'} on:click={() => (activeTab = 'all')}>所有課程</TabItem>
				<TabItem open={activeTab === 'beginner'} on:click={() => (activeTab = 'beginner')}
					>初學者</TabItem
				>
				<TabItem open={activeTab === 'intermediate'} on:click={() => (activeTab = 'intermediate')}
					>中級</TabItem
				>
				<TabItem open={activeTab === 'all-levels'} on:click={() => (activeTab = 'all-levels')}
					>所有程度</TabItem
				>
			</Tabs>
		</div>
	</div>

	{#if loading}
		<div class="flex h-40 items-center justify-center" in:fade>
			<Spinner size="12" />
		</div>
	{:else}
		<div class="mb-12 grid gap-6 md:grid-cols-2" in:fade={{ duration: 300 }}>
			{#each filteredCourses as course (course.id)}
				<Card padding="none" class="overflow-hidden transition-all hover:shadow-lg">
					<img src={course.image} alt={course.title} class="h-48 w-full object-cover" />
					<div class="p-5">
						<div class="mb-4 flex items-start justify-between">
							<div>
								<Badge
									color={course.color === 'green'
										? 'green'
										: course.color === 'yellow'
											? 'yellow'
											: course.color === 'indigo'
												? 'indigo'
												: 'blue'}
									class="mb-2"
								>
									{course.level}
								</Badge>
								<Heading tag="h3" class="text-xl">{course.title}</Heading>
							</div>
							<div
								class="bg-primary-50 text-primary-700 flex size-12 items-center justify-center rounded-full"
							>
								<svelte:component this={course.icon} class="size-6" />
							</div>
						</div>
						<P class="mb-4 text-gray-600">{course.description}</P>

						<div class="mb-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
							<div class="flex items-center">
								<Clock class="mr-1 size-4 text-gray-400" />
								<span>{course.duration}</span>
							</div>
							<div class="flex items-center">
								<User class="mr-1 size-4 text-gray-400" />
								<span>{course.instructor}</span>
							</div>
							<div class="flex items-center">
								<Calendar class="mr-1 size-4 text-gray-400" />
								<span>{course.date.split(' ')[2]}</span>
							</div>
							<div class="text-primary-700 flex items-center font-medium">
								先修: {course.prerequisites}
							</div>
						</div>

						<div class="flex justify-between">
							<span class="text-sm text-gray-500">{course.location}</span>
							<Button color="light" class="group" href={`/courses/${course.id}`}>
								更多內容
								<ArrowRight class="ml-2 size-5 transition-transform group-hover:translate-x-1" />
							</Button>
						</div>
					</div>
				</Card>
			{/each}
		</div>

		<div class="mb-12 overflow-hidden rounded-lg border bg-white shadow-sm">
			<div class="border-b bg-gray-50 p-4">
				<Heading tag="h2" class="text-xl">課程時程概覽</Heading>
				<p class="text-sm text-gray-600">完整的夏令營課程時間表</p>
			</div>
			<div class="overflow-x-auto">
				<Table striped hoverable>
					<TableHead>
						<TableHeadCell class="bg-gray-50">課程</TableHeadCell>
						<TableHeadCell class="bg-gray-50">日期</TableHeadCell>
						<TableHeadCell class="bg-gray-50">時間</TableHeadCell>
						<TableHeadCell class="bg-gray-50">地點</TableHeadCell>
						<TableHeadCell class="bg-gray-50">講師</TableHeadCell>
					</TableHead>
					<TableBody>
						{#each courses as course}
							<TableBodyRow>
								<TableBodyCell>
									<div class="flex items-center">
										<div class="bg-primary-100 text-primary-600 mr-3 rounded p-2">
											<svelte:component this={course.icon} class="size-5" />
										</div>
										<div>
											<p class="font-medium">{course.title}</p>
											<Badge color={course.color}>{course.level}</Badge>
										</div>
									</div>
								</TableBodyCell>
								<TableBodyCell>{course.date}</TableBodyCell>
								<TableBodyCell>{course.time}</TableBodyCell>
								<TableBodyCell>{course.location}</TableBodyCell>
								<TableBodyCell>{course.instructor}</TableBodyCell>
							</TableBodyRow>
						{/each}
					</TableBody>
				</Table>
			</div>
		</div>

		<div
			class="from-primary-600 to-primary-800 rounded-xl bg-gradient-to-r p-8 text-center text-white"
		>
			<Heading tag="h2" class="mb-4">準備提升你的技能了嗎？</Heading>
			<P class="mx-auto mb-6 max-w-2xl">
				加入我們的夏令營，邁出你在電腦科學與資訊工程未來的第一步。名額有限，立即報名！
			</P>
			<div
				class="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
			>
				<Button size="xl" color="none" class="text-primary-700 bg-white hover:bg-gray-100">
					<Rocket class="mr-2 size-5" />
					立即報名
				</Button>
				<Button
					color="light"
					size="xl"
					class="border-white bg-transparent text-white hover:bg-white/10"
				>
					下載課程手冊
				</Button>
			</div>
		</div>
	{/if}
</section>
