<script>
  import { Carousel } from 'flowbite-svelte';

  const imageFiles = import.meta.glob('/src/images/*.{jpg,jpeg,png,gif}', { eager: true });
  let images = Object.entries(imageFiles).map(([path, module], index) => ({
    src: path,
    alt: `Image ${index + 1}`
  }));
</script>

<style>
  :global(body) {
    background-image: url('https://truth.bahamut.com.tw/artwork/202205/7245f0d2ec4c17a9180e630470d9bfa2.JPG?w=1000');
    background-size: cover;
    background-attachment: fixed;
    font-family: "Cubic 11" !important;
  }
</style>

<section class="mx-18 text-pretty min-w-[720px]">
  <div class="mt-5 mb-5">
      <span class="text-white text-4xl font-[Cubic 11]">歷屆回顧</span>
  </div>
  <div class="bg-black/40 border-3 border-white font-[Cubic 11] text-center">
    <div class="mt-5 mb-5 text-white text-2xl font-[Cubic 11]">
      2024 | 你們在code什麼
    </div>
    
    <hr class="mt-5 border-2 border-white"/>

    <div class="group">
      <Carousel
        images={images}
        duration={5000}
        let:Controls let:Indicators
        class="aspect-[352/181]"
        style="height:100%;"
      >
        <Indicators />
        <Controls let:ControlButton let:changeSlide >
          <ControlButton 
            name="Previous" 
            forward={false} 
            on:click={()=>changeSlide(false)}
            class=" z-0 translate-x-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            <div 
              class="
                w-12 h-12 rounded-full bg-black/40 
                hover:bg-black/80 transition-colors
                hover:cursor-pointer
                flex items-center justify-center
              "
            >
              <img 
                src="/icons/preview.png"
                alt="preview"
                class="w-3/5 h-3/5 object-contain"
              />
            </div>
          </ControlButton>

          <ControlButton 
            name="Next" 
            forward={true} 
            on:click={()=>changeSlide(true)}
            class="z-0 -translate-x-5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"
          >
            <div 
              class="
                w-12 h-12 rounded-full bg-black/40 
                hover:bg-black/80 transition-colors
                hover:cursor-pointer
                flex items-center justify-center
              "
            >
              <img 
                src="/icons/next.png"
                alt="preview"
                class="w-3/5 h-3/5 object-contain"
              />
            </div>
          </ControlButton>
        </Controls>
      </Carousel>
    </div>
  </div>

</section>

