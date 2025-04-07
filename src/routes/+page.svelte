<script>
  import { Carousel } from 'flowbite-svelte';

  const tabs = [
    { year: '2024', title: '你們在code什麼', images: [
      { src: '/images/2024-1.JPG', alt: 'Profile Image 1' },
      { src: '/images/2024-2.JPG', alt: 'Profile Image 2' },
    ] },
    { year: '2023', title: 'E級玩家', images: [
      { src: '/images/2023-1.jpg', alt: 'Settings Image 1' },
      { src: '/images/2023-2.jpg', alt: 'Settings Image 2' },
    ] },
    { year: '2022', title: 'CSI:EDEN', images: [] },
  ];

  let activeTab = 0;
  let image;
</script>

<div class="min-h-screen flex flex-col justify-center items-center space-y-8 bg-gray-900 text-white">

  <!-- Tabs 選單 -->
  <div class="flex border border-white divide-x divide-white">
    {#each tabs as tab, index}
      <button
        class={`px-6 py-2 text-sm ${activeTab === index ? 'bg-yellow-400 text-black' : 'hover:bg-white hover:text-black'}`}
        on:click={() => activeTab = index}
      >
        {tab.year} | {tab.title}
      </button>
    {/each}
  </div>

  <!-- Carousel -->
  <div class="w-[960px] h-[540px]">
    <Carousel
      images={tabs[activeTab].images}
      let:Indicators let:Controls
      on:change={({ detail }) => (image = detail)}
      class="aspect-[16/9]"
    >
      <Controls />
      <Indicators />
    </Carousel>
  </div>

</div>
