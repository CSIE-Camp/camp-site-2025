<script lang="ts">
  import { fade } from 'svelte/transition';
  
  let faqModal1 = false; 
  let faqModal2 = false; 
  let faqModal3 = false; 
  let faqModal4 = false; 
  let faqModal5 = false; 
  let faqModal6 = false; 
  let faqModal7 = false; 
  let faqModal8 = false; 
  let faqModal9 = false; 
  let faqModal10 = false;
  let faqModal11 = false;
  let faqModal12 = false;

  if (import.meta.env.DEV) {
      import('./dev-style.css');
  }
</script>

<section class="mx-18 text-pretty min-w-[720px]">
  <div class="mt-3 mb-3">
      <span class="text-white text-4xl font-[Cubic 11]">FAQ</span>
  </div>
  <div class="border-3 border-white  text-2xl/10 font-[Cubic 11]">
    <div class="ml-9 mr-9 mt-7 mb-7  grid grid-cols-3 auto-rows-min gap-9">
      <div class="row-span-1 p-4 group border-3 border-white  flex justify-center items-center  text-white font-[Cubic 11] cursor-pointer hover:bg-white/10 transition-colors" 
        on:click={() => (faqModal1 = true)}
        on:keydown={(e) => e.key === 'Enter' && (faqModal1 = true)}
        role="button" 
        tabindex="0"
      >
        <div>沒有基礎適合參加嗎 ?</div>
      </div>
      <div class="row-span-2 p-4 group border-3 border-white  flex justify-center items-center  text-white font-[Cubic 11] cursor-pointer hover:bg-white/10 transition-colors" 
        on:click={() => (faqModal2 = true)}
        on:keydown={(e) => e.key === 'Enter' && (faqModal2 = true)}
        role="button" 
        tabindex="0"
      >
        <div>
          對已經有基礎的人來說<br/>
          課程會不會太簡單 ?
        </div>
      </div>
      <div class="row-span-1 p-5 group border-3 border-white  flex justify-center items-center  text-white font-[Cubic 11] cursor-pointer hover:bg-white/10 transition-colors"
        on:click={() => (faqModal3 = true)}
        on:keydown={(e) => e.key === 'Enter' && (faqModal3 = true)}
        role="button" 
        tabindex="0"
      >
        <div>會有教授來上課嗎 ?</div>
      </div>
      <div class="row-span-2 p-5 group border-3 border-white  flex justify-center items-center  text-white font-[Cubic 11] cursor-pointer hover:bg-white/10 transition-colors"
        on:click={() => (faqModal4 = true)}
        on:keydown={(e) => e.key === 'Enter' && (faqModal4 = true)}
        role="button" 
        tabindex="0"
      >
        <div>可以不要一起住宿嗎 ?</div>
      </div>
      <div class="row-span-1 p-5 group border-3 border白  flex justify-center items-center  text-white font-[Cubic 11] cursor-pointer hover:bg-white/10 transition-colors"
        on:click={() => (faqModal5 = true)}
        on:keydown={(e) => e.key === 'Enter' && (faqModal5 = true)}
        role="button" 
        tabindex="0"
      >
        <div>如何往返學校與旅館 ?</div>
      </div>
      <div class="row-span-1 p-5 group border-3 border白  flex justify-center items-center  text-white font-[Cubic 11] cursor-pointer hover:bg-white/10 transition-colors"
        on:click={() => (faqModal6 = true)}
        on:keydown={(e) => e.key === 'Enter' && (faqModal6 = true)}
        role="button" 
        tabindex="0"
      >
        <div>我可以跟朋友同一組或同房間嗎 ?</div>
      </div>
      <div class="row-span-1 p-5 group border-3 border白  flex justify-center items-center  text-white font-[Cubic 11] cursor-pointer hover:bg-white/10 transition-colors"
        on:click={() => (faqModal7 = true)}
        on:keydown={(e) => e.key === 'Enter' && (faqModal7 = true)}
        role="button" 
        tabindex="0"
      >
        <div>時程表中「敬請期待」是什麼 ?</div>
      </div>
      <div class="row-span-4 p-5 group border-3 border白  flex justify-center items-center  text-white font-[Cubic 11] cursor-pointer hover:bg-white/10 transition-colors"
        on:click={() => (faqModal8 = true)}
        on:keydown={(e) => e.key === 'Enter' && (faqModal8 = true)}
        role="button" 
        tabindex="0"
      >
        <div>
          課表中的「選修課」，<br/>
          是代表我自己能夠選擇<br/>
          我可以學什麼課程嗎 ?<br/>
          我該怎麼選課呢 ?
        </div>
      </div>
      <div class="row-span-1 p-5 group border-3 border白  flex justify-center items-center  text-white font-[Cubic 11] cursor-pointer hover:bg-white/10 transition-colors"
        on:click={() => (faqModal9 = true)}
        on:keydown={(e) => e.key === 'Enter' && (faqModal9 = true)}
        role="button" 
        tabindex="0"
      >
        <div>如何確認有成功報名 ?</div>
      </div>
      <div class="row-span-2 p-5 group border-3 border白  flex justify-center items-center  text-white font-[Cubic 11] cursor-pointer hover:bg-white/10 transition-colors"
        on:click={() => (faqModal10 = true)}
        on:keydown={(e) => e.key === 'Enter' && (faqModal10 = true)}
        role="button" 
        tabindex="0"
      >
        <div>
          當我交出報名表單之後<br/>
          還可以修改資料嗎 ?
        </div>
      </div>
      <div class="row-span-3 p-5 group border-3 border白  flex justify-center items-center  text-white font-[Cubic 11] cursor-pointer hover:bg-white/10 transition-colors"
        on:click={() => (faqModal11 = true)}
        on:keydown={(e) => e.key === 'Enter' && (faqModal11 = true)}
        role="button" 
        tabindex="0"
      >
        <div>早鳥時間是怎麼算的 ?</div>
      </div>
      <div class="row-span-2 p-5 group border-3 border白  flex justify-center items-center  text-white font-[Cubic 11] cursor-pointer hover:bg-white/10 transition-colors"
        on:click={() => (faqModal12 = true)}
        on:keydown={(e) => e.key === 'Enter' && (faqModal12 = true)}
        role="button" 
        tabindex="0"
      >
        <div>
          個人資料填寫中有一些<br/>
          程式相關的問題是否會影響錄取？
        </div>
      </div>
    </div>
  </div>
</section>

{#if faqModal1}
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/75" 
    transition:fade={{ duration: 200 }}
    on:click={() => (faqModal1 = false)}
    on:keydown={(e) => e.key === 'Escape' && (faqModal1 = false)}
    role="button" 
    tabindex="0"
  >
    <div class="relative w-175 bg-black border-3 border-white p-8">
      <div class="text-3xl text-white font-[Cubic 11] mb-6">沒有基礎的適合來參加嗎？</div>
      <button 
        on:click={() => (faqModal1 = false)}
        class="absolute top-2 right-2 text-white border-2 border-white w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:cursor-pointer transition-colors"
      >
        Ｘ
      </button>
      <div class="text-white text-lg font-[Cubic 11] max-h-80 overflow-y-auto">
        非常歡迎。我們的課程都是新手導向，都是在零基礎的情況下設計的。
      </div>
    </div>
  </div>
{/if}

<!-- FAQ Modal 2 -->
<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 {faqModal2 ? 'block' : 'hidden'}" 
  transition:fade={{ duration: 200 }}
  on:click={() => (faqModal2 = false)}
  on:keydown={(e) => e.key === 'Escape' && (faqModal2 = false)}
  role="button" 
  tabindex="0"
>
  <div class="relative w-175 bg-black border-3 border-white p-8">
    <div class="text-3xl text-white font-[Cubic 11] mb-6">我已經有基礎了課程對我而言會不會太簡單？</div>
    <button 
      on:click={() => (faqModal2 = false)}
      class="absolute top-2 right-2 text-white border-2 border-white w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:cursor-pointer transition-colors"
    >
      Ｘ
    </button>
    <div class="text-white text-lg font-[Cubic 11] max-h-80 overflow-y-auto">
      不會。我們會提供補充資料或挑戰任務給已經有基礎的同學挑戰！
    </div>
  </div>
</div>

<!-- FAQ Modal 3 -->
<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 {faqModal3 ? 'block' : 'hidden'}" 
  transition:fade={{ duration: 200 }}
  on:click={() => (faqModal3 = false)}
  on:keydown={(e) => e.key === 'Escape' && (faqModal3 = false)}
  role="button" 
  tabindex="0"
>
  <div class="relative w-175 bg-black border-3 border-white p-8">
    <div class="text-3xl text-white font-[Cubic 11] mb-6">會有教授來上課嗎？</div>
    <button 
      on:click={() => (faqModal3 = false)}
      class="absolute top-2 right-2 text-white border-2 border-white w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:cursor-pointer transition-colors"
    >
      Ｘ
    </button>
    <div class="text-white text-lg font-[Cubic 11] max-h-80 overflow-y-auto">
      會！第一天會有系上的教授為我們帶來《走進 CS》演講。
    </div>
  </div>
</div>

<!-- FAQ Modal 4 -->
<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 {faqModal4 ? 'block' : 'hidden'}" 
  transition:fade={{ duration: 200 }}
  on:click={() => (faqModal4 = false)}
  on:keydown={(e) => e.key === 'Escape' && (faqModal4 = false)}
  role="button" 
  tabindex="0"
>
  <div class="relative w-175 bg-black border-3 border-white p-8">
    <div class="text-3xl text-white font-[Cubic 11] mb-6">可以不要跟大家一起住宿嗎？</div>
    <button 
      on:click={() => (faqModal4 = false)}
      class="absolute top-2 right-2 text-white border-2 border-white w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:cursor-pointer transition-colors"
    >
      Ｘ
    </button>
    <div class="text-white text-lg font-[Cubic 11] max-h-80 overflow-y-auto">
      課程安排中有包含小隊的團體實作，而多數討論的時間會在回到旅館之後。因此會要求各學員住宿，以便進行小組討論。
    </div>
  </div>
</div>

<!-- FAQ Modal 5 -->
<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 {faqModal5 ? 'block' : 'hidden'}" 
  transition:fade={{ duration: 200 }}
  on:click={() => (faqModal5 = false)}
  on:keydown={(e) => e.key === 'Escape' && (faqModal5 = false)}
  role="button" 
  tabindex="0"
>
  <div class="relative w-175 bg-black border-3 border-white p-8">
    <div class="text-3xl text-white font-[Cubic 11] mb-6">我要怎麼往返學校與旅館？</div>
    <button 
      on:click={() => (faqModal5 = false)}
      class="absolute top-2 right-2 text-white border-2 border-white w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:cursor-pointer transition-colors"
    >
      Ｘ
    </button>
    <div class="text-white text-lg font-[Cubic 11] max-h-80 overflow-y-auto">
      我們會一起搭公車前往，所以記得自備有餘額的悠遊卡跟一卡通喔～
    </div>
  </div>
</div>

<!-- FAQ Modal 6 -->
<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 {faqModal6 ? 'block' : 'hidden'}" 
  transition:fade={{ duration: 200 }}
  on:click={() => (faqModal6 = false)}
  on:keydown={(e) => e.key === 'Escape' && (faqModal6 = false)}
  role="button" 
  tabindex="0"
>
  <div class="relative w-175 bg-black border-3 border-white p-8">
    <div class="text-3xl text-white font-[Cubic 11] mb-6">時程表中的「敬請期待」是甚麼？</div>
    <button 
      on:click={() => (faqModal6 = false)}
      class="absolute top-2 right-2 text-white border-2 border-white w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:cursor-pointer transition-colors"
    >
      Ｘ
    </button>
    <div class="text-white text-lg font-[Cubic 11] max-h-80 overflow-y-auto">
      除了課程以外，營隊中也會準備一些讓大家放鬆的活動，在學習之餘獲得片刻的閒暇時光！
    </div>
  </div>
</div>

<!-- FAQ Modal 7 -->
<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 {faqModal7 ? 'block' : 'hidden'}" 
  transition:fade={{ duration: 200 }}
  on:click={() => (faqModal7 = false)}
  on:keydown={(e) => e.key === 'Escape' && (faqModal7 = false)}
  role="button" 
  tabindex="0"
>
  <div class="relative w-175 bg-black border-3 border-white p-8">
    <div class="text-3xl text-white font-[Cubic 11] mb-6">時程表中的「敬請期待」是甚麼？</div>
    <button 
      on:click={() => (faqModal7 = false)}
      class="absolute top-2 right-2 text-white border-2 border-white w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:cursor-pointer transition-colors"
    >
      Ｘ
    </button>
    <div class="text-white text-lg font-[Cubic 11] max-h-80 overflow-y-auto">
      除了課程以外，營隊中也會準備一些讓大家放鬆的活動，在學習之餘獲得片刻的閒暇時光！
    </div>
  </div>
</div>

<!-- FAQ Modal 8 -->
<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 {faqModal8 ? 'block' : 'hidden'}" 
  transition:fade={{ duration: 200 }}
  on:click={() => (faqModal8 = false)}
  on:keydown={(e) => e.key === 'Escape' && (faqModal8 = false)}
  role="button" 
  tabindex="0"
>
  <div class="relative w-175 bg-black border-3 border-white p-8">
    <div class="text-3xl text-white font-[Cubic 11] mb-6">我看到課表中有「選修課」，這是代表我可以自己選想上甚麼課的意思嗎？要怎麼選課呢？</div>
    <button 
      on:click={() => (faqModal8 = false)}
      class="absolute top-2 right-2 text-white border-2 border-white w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:cursor-pointer transition-colors"
    >
      Ｘ
    </button>
    <div class="text-white text-lg font-[Cubic 11] max-h-80 overflow-y-auto">
      沒錯！選修課就是可以讓你自己選擇有興趣的課上課～在成功報名之後我們會寄送選修課志願序填寫表單，記得去填寫才能上到自己比較喜歡的課喔！選課結果將在營隊中公布
    </div>
  </div>
</div>

<!-- FAQ Modal 9 -->
<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 {faqModal9 ? 'block' : 'hidden'}" 
  transition:fade={{ duration: 200 }}
  on:click={() => (faqModal9 = false)}
  on:keydown={(e) => e.key === 'Escape' && (faqModal9 = false)}
  role="button" 
  tabindex="0"
>
  <div class="relative w-175 bg-black border-3 border-white p-8">
    <div class="text-3xl text-white font-[Cubic 11] mb-6">我怎麼知道我有沒有報名成功？</div>
    <button 
      on:click={() => (faqModal9 = false)}
      class="absolute top-2 right-2 text-white border-2 border-white w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:cursor-pointer transition-colors"
    >
      Ｘ
    </button>
    <div class="text-white text-lg font-[Cubic 11] max-h-80 overflow-y-auto">
      若填寫在 Google 表單內的信箱有收到表單回覆的信即為成功送出。
    </div>
  </div>
</div>

<!-- FAQ Modal 10 -->
<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 {faqModal10 ? 'block' : 'hidden'}" 
  transition:fade={{ duration: 200 }}
  on:click={() => (faqModal10 = false)}
  on:keydown={(e) => e.key === 'Escape' && (faqModal10 = false)}
  role="button" 
  tabindex="0"
>
  <div class="relative w-175 bg-black border-3 border-white p-8">
    <div class="text-3xl text-white font-[Cubic 11] mb-6">交出報名表單後還可以修改資料嗎？</div>
    <button 
      on:click={() => (faqModal10 = false)}
      class="absolute top-2 right-2 text-white border-2 border-white w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:cursor-pointer transition-colors"
    >
      Ｘ
    </button>
    <div class="text-white text-lg font-[Cubic 11] max-h-80 overflow-y-auto">
      可以，我們的表單在時限內都可以編輯，到當初填表單的信箱修改即可～
    </div>
  </div>
</div>

<!-- FAQ Modal 11 -->
<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 {faqModal11 ? 'block' : 'hidden'}" 
  transition:fade={{ duration: 200 }}
  on:click={() => (faqModal11 = false)}
  on:keydown={(e) => e.key === 'Escape' && (faqModal11 = false)}
  role="button" 
  tabindex="0"
>
  <div class="relative w-175 bg-black border-3 border-white p-8">
    <div class="text-3xl text-white font-[Cubic 11] mb-6">早鳥優惠的時間是怎麼計算的？</div>
    <button 
      on:click={() => (faqModal11 = false)}
      class="absolute top-2 right-2 text-white border-2 border-white w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:cursor-pointer transition-colors"
    >
      Ｘ
    </button>
    <div class="text-white text-lg font-[Cubic 11] max-h-80 overflow-y-auto">
      以最後編輯表單的時間為準，也就是 5/1 00:00 後若編輯回覆可能就沒有早鳥資格喔！
    </div>
  </div>
</div>

<!-- FAQ Modal 12 -->
<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 {faqModal12 ? 'block' : 'hidden'}" 
  transition:fade={{ duration: 200 }}
  on:click={() => (faqModal12 = false)}
  on:keydown={(e) => e.key === 'Escape' && (faqModal12 = false)}
  role="button" 
  tabindex="0"
>
  <div class="relative w-175 bg-black border-3 border-white p-8">
    <div class="text-3xl text-white font-[Cubic 11] mb-6">個人資料填寫中和程式相關的問題是否會影響錄取？</div>
    <button 
      on:click={() => (faqModal12 = false)}
      class="absolute top-2 right-2 text-white border-2 border-white w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:cursor-pointer transition-colors"
    >
      Ｘ
    </button>
    <div class="text-white text-lg font-[Cubic 11] max-h-80 overflow-y-auto">
      不會，這個問題僅供我們做分隊的參考。
    </div>
  </div>
</div>