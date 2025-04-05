<script lang="ts">
	import '../app.css';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Footer,
		FooterCopyright,
		FooterLink,
		FooterLinkGroup,
		Heading,
		Button
	} from 'flowbite-svelte';
	import { Home, BookOpen, Github, Mail, Instagram } from '@lucide/svelte';
	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col bg-[url(background.png)] bg-[rgba(0,0,0,0.5)] bg-center bg-contain bg-fixed bg-repeat" style="background-blend-mode: multiply;">
	<Navbar
		let:hidden
		let:toggle
		class="sticky top-0 z-10 border-b bg-white/80 py-4 backdrop-blur-sm"
	>
		<NavBrand href="/">
			<span class="self-center text-xl font-semibold whitespace-nowrap">
				<span class="text-primary-600">NTNU</span> CSIE Camp
				<span class="text-primary-600">2025</span>
			</span>
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden} class="ml-auto">
			<NavLi href="/" class="hover:bg-primary-50 rounded-lg">
				<Home class="mr-2 size-5" />
				首頁
			</NavLi>
			<NavLi>
				<Button size="sm" class="ml-2">立即報名</Button>
			</NavLi>
		</NavUl>
	</Navbar>

	<main class="container mx-auto max-w-7xl flex-grow px-4 py-8">
		{@render children()}
	</main>

	<Footer class="mt-auto border-t bg-white">
		<div class="container mx-auto max-w-7xl px-4 py-6">
			<div class="md:flex md:justify-between">
				<div class="mb-6 md:mb-0">
					<FooterCopyright href="/" by="NTNU CSIE" year={2025} />
					<p class="mt-2 text-sm text-gray-500">國立台灣師範大學資訊工程學系</p>
				</div>
				<div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
					<div>
						<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">聯絡資訊</h2>
						<FooterLinkGroup>
							<FooterLink class="flex items-center gap-2" href="mailto:example@ntnu.edu.tw">
								<Mail class="size-4" />
								聯絡我們
							</FooterLink>
						</FooterLinkGroup>
					</div>
					<div>
						<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">資源</h2>
						<FooterLinkGroup>
							<FooterLink href="/courses">課程資訊</FooterLink>
							<FooterLink href="#faq">常見問題</FooterLink>
						</FooterLinkGroup>
					</div>
					<div>
						<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">社群媒體</h2>
						<FooterLinkGroup>
							<FooterLink class="flex items-center gap-2" href="#">
								<Github class="size-4" />
								GitHub
							</FooterLink>
							<FooterLink class="flex items-center gap-2" href="#">
								<Instagram class="size-4" />
								Instagram
							</FooterLink>
						</FooterLinkGroup>
					</div>
				</div>
			</div>
		</div>
	</Footer>
</div>
