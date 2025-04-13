<script lang="ts">
  import { descriptions } from './courseDescriptions';
  
  // 課程資料更改為更彈性的結構
  const days = [
    { day: '07.01', abbr: 'TUE' },
    { day: '07.02', abbr: 'WED' },
    { day: '07.03', abbr: 'THU' },
    { day: '07.04', abbr: 'FRI' }
  ];
  const schedules = [
    {
      timeRange: { start: '09:00', end: '12:00' },
      title: 'LUNCH TIME',
      courses: [
        [
          { 
            name: '報到 + 破冰', 
            type: 'basic', 
            rowSpan: 1.05,
            description: '----------------------------------------\n歡迎來到課程！這個環節我們將進行破冰活動，讓大家互相認識。' ,
            gridRow: 'span 1',
            customStyle: 'margin-top: 35px;'
          },
          { 
            name: '開幕', 
            type: 'advanced', 
            rowSpan: 0.5,
            description: '----------------------------------------\n課程開幕式，介紹課程目標與內容大綱。' 
          }
        ],
        [{ 
          name: '主題課程二\n邊緣人的好朋友—在 Discord 跟 AI 機器人聊天吧！', 
          type: 'project', 
          rowSpan: 2,
          description: '----------------------------------------\n相信大家都有在 Discord 跟朋友聊天的經驗吧～\n什麼！你說沒有朋友跟你聊天，幫你 QQ😢\n但是沒關係，在這堂課你可以學會怎麼寫你的第一隻 Discord bot。\n甚至可以透過串接大型語言模型，\n幫你的機器人注入靈魂，\n這樣你就有一個跟你聊天的機器人了～\n再也不需要找朋友聊天了。\n本堂課程你將學到：\n教你寫出第一隻 Discord bot\n講解「非同步處理」的概念\n講解大型語言模型背後的原理\n講解 API 的原理\n教你如何使用 Gemini API，並串接 Discord bot，在 Discord 製作 AI 聊天機器人' 
        }],
        [{ 
          name: '主題課程四\n如何打造自己的遊戲 - Discord Bot 的進階語法', 
          type: 'basic', 
          rowSpan: 2,
          description: '----------------------------------------\n經過雜貨店，不經意的一撇，竟然是大搖 🕹️\n來玩玩看吧，腦海不自覺地浮現這個想法。\n拉張塑膠椅，扭了扭頭，轉了轉手...\n一切，準備就緒！\n「鏘！」十元投下去...\n手指飛快的在按鍵之間飛梭。\n「丟丟丟丟...拐拐...」\n馬上來打臉我的，是大大的「GAMEOVER」字樣 👾\n對，我只是在亂按 🙃\n可惡...這也太難了...\n遊戲機...氣人...\n如果你也覺得遊戲機氣人的話😡\n不妨試試做自己的遊戲機器人🤖\n這堂課，你會學到：\n✅ 考驗即時反應的 QTE 事件\n✅ 模擬 RPG 的對話系統\n✅ 類似寶可夢的回合對戰\n❎ 好討厭的感覺呀~~~\n此外，此外，本堂課將接合前面所學\n利用 AI 幫你生成屬於自己的世界觀 🏞️\n我們將一步步手把手教學，帶你從不會學到會。\n因為：\n「雖然只是遊戲，但可不是鬧著玩的。」 ' 
        }],
        [{ 
          name: '黑客松', 
          type: 'basic', 
          rowSpan: 2,
          description: '----------------------------------------\n黑客松專案開發時間。' 
        }]
      ]
    },
    {
      timeRange: { start: '14:00', end: '17:00' },
      title: 'DINNER TIME',
      courses: [
        [{ 
          name: 'PYTHON 基礎', 
          type: 'basic', 
          rowSpan: 2.1,
          description: '----------------------------------------\n你是不是常常聽到「Python 很簡單，適合初學者」但打開程式編輯器還是覺得好陌生？\n別擔心！這堂課就是為了你這樣的 零經驗新手 設計的 🚀\n從最基本的輸出、變數、計算開始，\n再一路帶你搞懂「什麼是 if 判斷？for 跑來跑去要跑去哪？」\n學完之後，你就能：\n✔️ 寫出自己的小工具\n✔️ 跑迴圈跑得比小明還快\n✔️ 和別人說「我會 Python 喔！」\n我們還會透過實際的 小練習 & 有趣範例，讓你不只是會看，也真的寫得出來～\n別擔心看不懂、不敢問，這堂課就是你的 程式啟蒙起點！' 
        }],
        [
          { 
            name: '選修課一', 
            type: 'basic', 
            rowSpan: 1,
            description: descriptions.course1 
          },
          { 
            name: '主題課程三\n擁有自己的男女朋友 - Discord bot AI 生圖', 
            type: 'basic', 
            rowSpan: 1,
            description: '----------------------------------------\n「ㄟㄟ，聽說每月的 14 號都是情人節诶欸。1 月是日記情人節，2 月是西洋情人節，3 月是白色情人節......」「夠了，別說了。嗚嗚嗚......」\n每月的情人節都是自己過或是情人節想增加一些樂趣嗎？Discord bot 來幫忙 !!!\n本堂課你將學到：\n✅在 Discord 中，利用 Discord bot 傳送圖片\n✅將 Discord bot 搭配 AI，使其能夠在 Discord 中生圖\n✅網頁框架 Flask\n✅內網穿透 ngrok\n✅diffuser（圖片生成式AI)' 
          }
        ],
        [
          { 
            name: '選修課二', 
            type: 'basic', 
            rowSpan: 1,
            description: descriptions.course2  
          },
          { 
            name: '活動三', 
            type: 'basic', 
            rowSpan: 1,
            description: '----------------------------------------\n敬請期待！🥰' 
          }
        ],
        [
          { 
            name: '黑客松報告', 
            type: 'basic', 
            rowSpan: 1.3,
            description: '----------------------------------------\n各組展示黑客松專案成果，講師提供回饋。' 
          },
          { 
            name: '閉幕', 
            type: 'basic', 
            rowSpan: 0.7,
            description: '----------------------------------------\n課程總結與結業式，頒發證書與合影。' 
          }
        ]
      ]
    },
    {
      timeRange: { start: '19:00', end: '21:00' },
      title: 'CODING/SLEEPING TIME',
      courses: [
        [
          { 
            name: '活動一', 
            type: 'basic', 
            rowSpan: 2,
            description: '----------------------------------------\n敬請期待！🥳' 
          }
        ],
        [{ 
          name: '活動二', 
          type: 'basic', 
          rowSpan: 2,
          description: '----------------------------------------\n敬請期待！🤩' 
        }],
        [{ 
          name: '黑客松', 
          type: 'basic', 
          rowSpan: 2,
          description: '----------------------------------------\n黑客松專案開發時間'
        }]
      ]
    }
  ];

  // 用於控制彈出視窗
  let showModal = false;
  let selectedCourse: {
    name: string;
    type: string;
    rowSpan: number;
    description: string;
  } | null = null;

  // Handling errors
  let loadError = false;
  
  // Function to handle image load error
  function handleImageError() {
    loadError = true;
    console.error("Failed to load image");
  }
  
  // Close modal function
  function closeModal() {
    showModal = false;
    selectedCourse = null;
  }
  
  // Add keyboard event listener for ESC key
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && showModal) {
      closeModal();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<section class="container mx-auto text-white min-w-[720px]">
  <div class="mt-3 mb-3">
    <span class="text-white text-4xl font-[Cubic 11]">課程介紹</span>
  </div>
  
  <div class="bg-black/40 border-3 border-white p-5 relative">
    <!-- 使用絕對定位放置蘑菇圖片 -->
    <div class="absolute top-2 left-15">
      {#if !loadError}
        <img src="src\routes\material-5.PNG" alt="Camp mascot" class="mushroom" on:error={handleImageError} />
      {:else}
        <div class="mushroom bg-gray-600 flex items-center justify-center">
          <span class="text-xs">圖片載入失敗</span>
        </div>
      {/if}
    </div>
    
    <!-- Consistent grid layout with precise widths and more spacing -->
    <div class="flex">
      <!-- Time column placeholder with exact width -->
      <div class="w-[150px] mr-6"></div>
      
      <!-- Day headers grid with fixed column widths -->
      <div class="grid grid-cols-4 gap-2 mb-4 w-[calc(100%-190px)]">
        {#each days as { day, abbr }, i}
          <div class="bg-gray-300 text-black p-3 text-center font-[Cubic 11] text-xl w-full">
            {day} ({abbr})
          </div>
        {/each}
      </div>
    </div>

    <!-- Course schedules with matching grid layout -->
    {#each schedules as schedule, scheduleIndex}
      <div class="flex mb-4 gap-6">
        <!-- Time column with exact same width as placeholder -->
        <div class="bg-gray-300 text-black p-3 flex flex-col justify-between items-center font-[Cubic 11] text-xl w-[150px] min-h-[200px]">
          <div>{schedule.timeRange.start}</div>
          <div class="font-bold">|</div>
          <div>{schedule.timeRange.end}</div>
        </div>

        <!-- Course slots using same width calculation -->
        <div class="grid grid-cols-4 gap-2 w-[calc(100%-190px)]" style="grid-auto-rows: 95px;">
          {#each schedule.courses as daySlots, dayIndex}
            <div class="flex flex-col gap-2 w-full">
              {#each daySlots as course, courseIndex}
                <button 
                  class="course-button border-3 border-white p-4 text-center flex items-center justify-center font-[Cubic 11] text-xl bg-transparent hover:bg-[#f1cc10] cursor-pointer transition-colors w-full {course.name.length < 5 ? 'short-text' : ''}"
                  style="grid-row: {course.gridRow || 'auto'}; min-height: {course.rowSpan * 95}px; {course.customStyle || ''};"
                  on:click={() => {
                    selectedCourse = course;
                    showModal = true;
                  }}
                  on:keydown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      selectedCourse = course;
                      showModal = true;
                    }
                  }}
                  aria-label={`View details for ${course.name}`}
                >
                  <div class="course-content">
                    {course.name}
                  </div>
                </button>
              {/each}
            </div>
          {/each}
        </div>
      </div>

      <!-- Break time label -->
      {#if scheduleIndex === 0}
        <!-- For LUNCH TIME and DINNER TIME - full width with all 4 days -->
        <div class="bg-gray-300 text-black p-3 text-center mb-5 font-[Cubic 11] text-2xl w-full">
          {schedule.title}
        </div>
      {:else if scheduleIndex === 2 || (scheduleIndex === 1)}
        <!-- For CODING/SLEEPING TIME - not for day 4 -->
        <div class="flex mb-5">
          <div class="bg-gray-300 text-black p-3 text-center font-[Cubic 11] text-2xl w-[calc(77.5%)]">
            {schedule.title}
          </div>
        </div>
      {/if}
    {/each}
  </div>
</section>

<!-- 新風格彈出視窗 -->
{#if showModal && selectedCourse}
  <div class="modal-overlay" style="display: flex;" on:click|self={closeModal}>
    <div class="modal">
      <span class="close-btn" on:click={closeModal}>×</span>
      <h2>{selectedCourse.name}</h2>
      <p>{selectedCourse.description}</p>
    </div>
  </div>
{/if}

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background-color: #000;
    color: white;
  }

  /* Custom font usage */
  @font-face {
    font-family: 'Cubic 11';
    src: url('/fonts/Cubic11.woff2') format('woff2'),
         url('/fonts/Cubic11.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  /* Custom image for mushroom */
  .mushroom {
    width: 80px;
    height: 80px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  /* Fix for border-3 in Tailwind */
  .border-3 {
    border-width: 3px !important;
  }

  /* Add the custom left-15 class */
  .left-15 {
    left: 3.75rem;
  }

  /* 文字容器樣式 - 不再使用漸淡效果 */
  .course-button {
    position: relative;
    overflow: hidden;
    white-space: pre-line;
  }

  .course-content {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem;
  }

  /* 星空風格彈出視窗 */
  .modal-overlay { 
    position: fixed; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; 
    background-color: rgba(0, 0, 0, 0.7);
    display: none; 
    align-items: center; 
    justify-content: center; 
    z-index: 10; 
  } 
  
  .modal {
    background: #111;
    color: #fff;
    padding: 30px;
    max-width: 600px;
    width: 90%;
    max-height: 80vh; /* 限制視窗的最大高度為視窗高度的 80% */
    overflow-y: auto; /* 當內容超出高度時顯示垂直滾動條 */
    border: 3px solid white;
    box-shadow: 0 0 10px white;
    text-align: left;
    position: relative;
    font-family: 'Cubic 11', monospace;
    image-rendering: pixelated;
    white-space: pre-line;
  }

  .modal h2 {
    font-size: 20px;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .modal p {
    font-size: 16px;
    line-height: 1.8;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 20px;
    cursor: pointer;
  }
</style>