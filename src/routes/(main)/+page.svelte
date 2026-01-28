<script lang="ts">
	import HeroPage from '$lib/components/HeroPage.svelte';
	import Introduction from '$lib/components/Introduction.svelte';
	import CampInfo from '$lib/components/CampInfo.svelte';
	import Transportation from '$lib/components/Transportation.svelte';
	import CourseInfo from '$lib/components/CourseInfo.svelte';
	import Hackathon from '$lib/components/Hackathon.svelte';
	import CampHistory from '$lib/components/CampHistory.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Sponsors from '$lib/components/Sponsors.svelte';
	import Egg from '$lib/components/Egg.svelte';
	import { assets } from '$app/paths';
</script>

<svelte:head>
	<meta name="theme-color" content="#1e2939" />
	<title>2025 臺師大資工營 NTNU CSIE CAMP</title>
	<meta property="og:title" content="2025 臺師大資工營 NTNU CSIE CAMP" />
	<meta property="og:description" content="2025 臺師大資工營 7/1 ~ 7/4 在師大公館校區，等你來「資遊你和我的師界」！" />
	<meta property="og:image" content="https://camp.ntnucsie.info/2025/social.png" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<HeroPage />

<Introduction />

<CampInfo />

<Transportation />

<CourseInfo />

<Hackathon />

<Faq />

<CampHistory />

<Sponsors />

<Egg />
