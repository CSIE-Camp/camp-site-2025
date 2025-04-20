<script lang="ts">
	import HeroPage from '$lib/components/HeroPage.svelte';
	import Introduction from '$lib/components/Introduction.svelte';
	import CampInfo from '$lib/components/CampInfo.svelte';
	import Transportation from '$lib/components/Transportation.svelte';
	import CourseInfo from '$lib/components/CourseInfo.svelte';
	import Hackathon from '$lib/components/Hackathon.svelte';
	import CampHistory from '$lib/components/CampHistory.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Egg from '$lib/components/Egg.svelte';
</script>

<svelte:head>
	<title>2025 師大資工營</title>
	<meta name="description" content="2025 師大資工營 7/1 ~ 7/4 在台北！" />
	<meta property="og:image" content="https://camp.ntnucsie.info/social.png" />
	<meta property="twitter:card" content="summary_large_image" />
</svelte:head>

<HeroPage />

<Introduction />

<CampInfo />

<Transportation />

<CourseInfo />

<Hackathon />

<Faq />

<CampHistory />

<Egg />
