<script>
  import { ButtonGroup, Button } from 'flowbite-svelte';
  import { Carousel } from 'flowbite-svelte';

  // 定義圖片數據
  const profileImages = [
    { src: '/images/2024-1.JPG', alt: 'Profile Image 1' },
    { src: '/images/2024-2.JPG', alt: 'Profile Image 2' },
    { src: '/images/2024-3.JPG', alt: 'Profile Image 3' },
    { src: '/images/2024-4.JPG', alt: 'Profile Image 4' },
    { src: '/images/2024-5.JPG', alt: 'Profile Image 5' },
    { src: '/images/2024-6.JPG', alt: 'Profile Image 6' },
  ];

  const settingsImages = [
    { src: '/images/2023-1.jpg', alt: 'Settings Image 1' },
    { src: '/images/2023-2.jpg', alt: 'Settings Image 2' },
  ];


  let activeCarousel = 'profile'; // 預設為 'profile'
  let image; // 用於顯示當前圖片的 alt 屬性
</script>

<div class="min-h-screen flex flex-col justify-center items-center space-y-8 bg-gray-100">
  <!-- 按鈕組 -->
  <ButtonGroup class="ring-2 ring-gray-300 border border-gray-300 divide-x divide-gray-300">
    <Button
      class={`w-100 bg-transparent hover:bg-gray-300 hover:text-black ${
        activeCarousel === 'profile' ? 'bg-white text-black' : 'text-gray-700'
      } focus:outline-none focus:ring-0`}
      on:click={() => (activeCarousel = 'profile')}
    >
      2024<br>你們在 "code" 什麼
    </Button>
    <Button
      class={`w-100 bg-transparent hover:bg-gray-300 hover:text-black ${
        activeCarousel === 'settings' ? 'bg-white text-black' : 'text-gray-700'
      } focus:outline-none focus:ring-0`}
      on:click={() => (activeCarousel = 'settings')}
    >
      2023<br>E 級玩家
    </Button>
  </ButtonGroup>

  <!-- Profile Carousel -->
  {#if activeCarousel === 'profile'}
    <div class="w-[960px] h-[540px] ">
      <Carousel images={profileImages} let:Indicators let:Controls on:change={({ detail }) => (image = detail)} class="aspect-[16/9] object-right">
        <Controls />
        <Indicators />
      </Carousel>
    </div>
  {/if}

  <!-- Settings Carousel -->
  {#if activeCarousel === 'settings'}
    <div class="w-[800px] h-[700px] ">
      <Carousel images={settingsImages} let:Indicators let:Controls on:change={({ detail }) => (image = detail)}>
        <Controls />
        <Indicators />
      </Carousel>
      <div
        class="w-full h-full bg-center bg-cover"
        style="background-image: url({image?.src})"
      ></div>
      <div class="rounded-sm h-10 bg-gray-300 dark:bg-gray-700 dark:text-white p-2 my-2 text-center">
        {image?.alt}
      </div>
    </div>
  {/if}
  
</div>