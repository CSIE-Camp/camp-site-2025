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

<div class="">
	<main>
		{@render children()}
	</main>
</div>
