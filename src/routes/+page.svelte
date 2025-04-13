<script lang="ts">
  import '../app.css';
  let displayContent1 = "「師大分部」站：搭乘0南、109、236 區、251、251 區、252、253、278、278 區、280、280 直、284、505、52、530、606、643、644、648、660、668、棕 11、藍 28、羅斯福路幹線、松江新生幹線、復興幹線、基隆路幹線、景美-榮總（快）";
  let displayContent2 = "向西步行約 2 分鐘至國立台灣師範大學公館校區門口";
  let activeTab = 'left';

  function handleLeft() {
    displayContent1 = "「師大分部」站：搭乘0南、109、236 區、251、251 區、252、253、278、278 區、280、280 直、284、505、52、530、606、643、644、648、660、668、棕 11、藍 28、羅斯福路幹線、松江新生幹線、復興幹線、基隆路幹線、景美-榮總（快）";
    displayContent2 = "向西步行約 2 分鐘至國立台灣師範大學公館校區門口";
    activeTab = 'left';
  }

  function handleRight() {
    displayContent1 = "搭乘松山新店線（綠線）至「公館」站 1 號出口";
    displayContent2 = "向東南步行約 12 分鐘至國立台灣師範大學公館校區門口";
    activeTab = 'right';
  }
</script>

<header class="mx-18 text-pretty min-w-[720px]">
	<span class="text-xl text-yellow-300">交通方式</span>
</header>

<section class="mx-18 text-pretty min-w-[720px]">
  <table class="w-4/5 border-collapse border-3 border-white">
    <thead>
      <tr>
        <th class="border-2 border-white px-3 py-15 w-1/2 h-full text-lg cursor-pointer transition-all duration-300 bg-yellow-300  {activeTab === 'left' ? 'active' : ''}">
          <button class="bg-yellow-300 text-white z-1 relative" on:click={handleLeft}>搭公車</button>
        </th>
        <th class="border-2 border-white px-3 py-15 w-1/2 h-full text-lg cursor-pointer transition-all duration-300 bg-yellow-300 text-white {activeTab === 'right' ? 'active' : ''}">
          <button class="bg-yellow-300 text-white z-1 relative" on:click={handleRight}>搭捷運</button>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="2" class="pt-5 pl-7. pr-7 border-t-3 border-white text-center text-base text-white">{displayContent1}</td>
      </tr>
      <tr>
        <td colspan="2" class="text-center text-6xl text-white">↓</td>
      </tr>
      <tr>
        <td colspan="2" class="text-center text-base pb-5">{displayContent2}</td>
      </tr>
    </tbody>
  </table>
</section>
