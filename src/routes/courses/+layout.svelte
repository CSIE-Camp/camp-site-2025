<script lang="ts">
	import {
		Breadcrumb,
		BreadcrumbItem,
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper
	} from 'flowbite-svelte';
	import { FileCode, Terminal, Database, GitPullRequest, ArrowLeft } from '@lucide/svelte';
	import { getStores } from '$app/stores'; // Updated from deprecated 'page'
	let { children } = $props();

	const { page } = getStores();

	const courseItems = [
		{
			name: '所有課程',
			href: '/courses',
			icon: ArrowLeft
		},
		{
			name: '程式設計基礎',
			href: '/courses/cs101',
			icon: FileCode
		},
		{
			name: '資料結構與演算法',
			href: '/courses/cs102',
			icon: Terminal
		},
		{
			name: '網頁開發',
			href: '/courses/cs103',
			icon: Database
		},
		{
			name: '專案工作坊',
			href: '/courses/cs104',
			icon: GitPullRequest
		}
	];

	// Get the current course name for the breadcrumb - updated to use $derived
	const currentCourseName = $derived(() => {
		const courseId = $page.url.pathname.split('/').pop();
		const course = courseItems.find((item) => item.href.endsWith(courseId || ''));
		return course ? course.name : '';
	});
</script>

<div class="mb-6">
	<Breadcrumb aria-label="課程導覽" class="rounded-lg bg-white p-3 shadow-sm">
		<BreadcrumbItem href="/" home>首頁</BreadcrumbItem>
		<BreadcrumbItem href="/courses">課程</BreadcrumbItem>
		{#if $page.url.pathname !== '/courses'}
			<BreadcrumbItem>{currentCourseName}</BreadcrumbItem>
		{/if}
	</Breadcrumb>
</div>

<div class="flex flex-col gap-6 md:flex-row">
	<div class="md:w-64">
		<div class="sticky top-24">
			<Sidebar activeUrl={$page.url.pathname} class="rounded-lg border bg-white shadow-sm">
				<SidebarWrapper>
					<SidebarGroup>
						{#each courseItems as item}
							<SidebarItem href={item.href} label={item.name} class="my-1 hover:bg-gray-100">
								<svelte:fragment slot="icon">
									<item.icon
										class="size-5 {$page.url.pathname === item.href
											? 'text-primary-600'
											: 'text-gray-500'}"
									/>
								</svelte:fragment>
							</SidebarItem>
						{/each}
					</SidebarGroup>

					<div class="mt-6 border-t border-gray-100 pt-6">
						<div class="bg-primary-50 rounded-lg p-4">
							<h5 class="text-primary-800 mb-2 text-sm font-medium">需要協助？</h5>
							<p class="text-sm text-gray-600">如有任何問題，請聯絡我們的課程顧問</p>
							<button
								class="bg-primary-600 hover:bg-primary-700 mt-3 w-full rounded-lg px-4 py-2 text-sm text-white"
							>
								聯絡顧問
							</button>
						</div>
					</div>
				</SidebarWrapper>
			</Sidebar>
		</div>
	</div>

	<div class="flex-grow rounded-lg bg-white p-6 shadow-sm">
		{@render children()}
	</div>
</div>
