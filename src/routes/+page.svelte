<script lang="ts">
    // 課程資料更改為更彈性的結構
    const days = [
      { day: '07.01', abbr: 'MON' },
      { day: '07.02', abbr: 'TUE' },
      { day: '07.03', abbr: 'WED' },
      { day: '07.04', abbr: 'THU' }
    ];
    const schedules = [
      {
        timeRange: { start: '09:00', end: '12:00' },
        title: 'LUNCH TIME',
        courses: [
          [
            { name: '報到 + 破冰', type: 'basic', rowSpan: 1.22 },
            { name: '開幕', type: 'advanced', rowSpan: 0.5 }
          ],
          [{ name: '主題課程一', type: 'project', rowSpan: 2 }], // 注意這裡設定 rowSpan: 2
          [{ name: '主題課程二', type: 'basic', rowSpan: 2 }],
          [{ name: '黑客松', type: 'basic', rowSpan: 2 }]
        ]
      },
      {
        timeRange: { start: '14:00', end: '17:00' },
        title: 'DINNER TIME',
        courses: [
          [{ name: 'PYTHON 基礎', type: 'basic', rowSpan: 2.1 }],
          [
            { name: '通識一', type: 'basic', rowSpan: 1 },
            { name: '主題課程二', type: 'basic', rowSpan: 1 }
          ],
          [
            { name: '通識二', type: 'basic', rowSpan: 1 },
            { name: '黑客松', type: 'basic', rowSpan: 1 }
          ],
          [
            { name: '黑客松報告', type: 'basic', rowSpan: 1.3 },
            { name: '閉幕', type: 'basic', rowSpan: 0.5 }
          ]
        ]
      },
      {
        timeRange: { start: '19:00', end: '21:00' },
        title: 'CODING/SLEEPING TIME',
        courses: [
          [{ name: '活動一', type: 'basic', rowSpan: 2 }],
          [{ name: '活動二', type: 'basic', rowSpan: 2 }],
          [{ name: '活動三', type: 'basic', rowSpan: 2 }]
        ]
      }
    ];
  </script>
  
  <section class="container mx-auto text-white min-w-[720px]">
    <div class="mt-3 mb-3">
      <span class="text-white text-4xl font-[Cubic 11]">課程介紹</span>
    </div>
    
    <div class="bg-black/40 border-3 border-white p-5 relative">
      <div class="absolute top-5 left-15">
        <img src="src\routes\material-5.PNG" alt="Camp mascot" class="mushroom" />
      </div>
      
      <div class="flex">
        <!-- Time column placeholder to align with course grid -->
        <div class="w-[150px] mr-8"></div>
        
        <!-- Day headers grid that matches course grid width -->
        <div class="grid grid-cols-4 gap-2 mb-4 flex-grow">
          {#each days as { day, abbr }, i}
            <div class="bg-gray-300 text-black p-3 text-center font-[Cubic 11] text-xl">
              {day} ({abbr})
            </div>
          {/each}
        </div>
      </div>
  
      <!-- Course schedules -->
      {#each schedules as schedule, scheduleIndex}
        <div class="flex mb-4 gap-8">
          <!-- Time column -->
          <div class="bg-gray-300 text-black p-3 flex flex-col justify-between items-center font-[Cubic 11] text-xl w-[150px] min-h-[200px]">
            <div>{schedule.timeRange.start}</div>
            <div class="font-bold">|</div>
            <div>{schedule.timeRange.end}</div>
          </div>
  
          <!-- Course slots -->
          <div class="grid grid-cols-4 gap-2 flex-grow">
            {#each schedule.courses as daySlots, dayIndex}
              <div class="flex flex-col gap-2 h-full">
                {#each daySlots as course, courseIndex}
                  <div 
                    class="border-3 border-white p-4 text-center flex items-center justify-center font-[Cubic 11] text-xl bg-black"
                    style="min-height: {course.rowSpan * 95}px;"
                  >
                    {course.name}
                  </div>
                {/each}
              </div>
            {/each}
          </div>
        </div>
  
        <!-- Break time label -->
        <div class="bg-gray-300 text-black p-3 text-center mb-5 font-[Cubic 11] text-2xl w-full">
          {schedule.title}
        </div>
      {/each}
    </div>
  </section>
  
  <style>
    :global(body) {
      margin: 0;
      padding: 0;
      background-color: #000;
      color: white;
    }
  
    /* Custom image for mushroom */
    .mushroom {
      width: 70px;
      height: 70px;
      background-image: url('src\\routes\\material-5.PNG');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  
    /* Additional Tailwind-like utility classes */
    .border-3 {
      border-width: 3px;
    }
  </style>