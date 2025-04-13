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
	<span class="title">交通方式</span>
</header>

<section class="mx-18 text-pretty min-w-[720px]">
  <table class="styled-table">
    <thead>
      <tr>
        <th class="table-header-left {activeTab === 'left' ? 'active' : ''}"><button on:click={handleLeft}>搭公車</button></th>
        <th class="table-header-right {activeTab === 'right' ? 'active' : ''}"><button on:click={handleRight}>搭捷運</button></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="2" class="table-content-start">{displayContent1}</td>
      </tr>
      <tr>
        <td colspan="2" class="down-arrow">↓</td>
      </tr>
      <tr>
        <td colspan="2" class="table-content-end">{displayContent2}</td>
      </tr>
    </tbody>
  </table>
</section>
