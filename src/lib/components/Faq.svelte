<script lang="ts">
	const FAQList = [
		{
			name: '沒有基礎適合參加嗎 ?',
			description: '非常歡迎。我們的課程都是新手導向，都是在零基礎的情況下設計的。',
			class: 'row-span-1',
			showmodal: false
		},
		{
			name: '我已經有基礎了課程對我而言會不會太簡單？',
			description: '不會。我們會提供補充資料或挑戰任務給已經有基礎的同學挑戰！',
			class: 'row-span-2',
			showmodal: false
		},
		{
			name: '有教授來上課嗎？',
			description: '會！第一天會有系上的教授為我們帶來《走進 CS》演講。',
			class: 'row-span-1',
			showmodal: false
		},
		{
			name: '可以不要跟大家一起住宿嗎？',
			description:
				'課程安排中有包含小隊的團體實作，而多數討論的時間會在回到旅館之後。因此會要求各學員住宿，以便進行小組討論。',
			class: 'row-span-2',
			showmodal: false
		},
		{
			name: '如何往返學校與旅館？',
			description: '我們會一起搭公車前往，所以記得自備有餘額的悠遊卡跟一卡通喔～',
			class: 'row-span-1',
			showmodal: false
		},
		{
			name: '我可以跟朋友同一組或同房間嗎？',
			description: '我們會隨機分組，基本上會跟同一組的夥伴同房喔！',
			class: 'row-span-2',
			showmodal: false
		},
		{
			name: '時程表中「敬請期待」是甚麼？',
			description:
				'除了課程以外，營隊中也會準備一些讓大家放鬆的活動，在學習之餘獲得片刻的閒暇時光！',
			class: 'row-span-1',
			showmodal: false
		},
		{
			name: '我看到課表中有「選修課」，\n這代表我可以自己選想上甚麼課的意思嗎？\n要怎麼選課呢？',
			description:
				'沒錯！選修課就是可以讓你自己選擇有興趣的課上課～在成功報名之後我們會寄送選修課志願序填寫表單，記得去填寫才能上到自己比較喜歡的課喔！選課結果將在營隊中公布',
			class: 'row-span-3',
			showmodal: false
		},
		{
			name: '交出報名表單後還可以修改資料嗎？',
			description: '可以，我們的表單在時限內都可以編輯，到當初填表單的信箱修改即可～',
			class: 'row-span-2',
			showmodal: false
		},
		{
			name: '怎麼知道我有沒有報名成功？',
			description: '若填寫在 Google 表單內的信箱有收到表單回覆的信即為成功送出。',
			class: 'row-span-1',
			showmodal: false
		},
		{
			name: '早鳥優惠的時間是怎麼算的？',
			description: '以最後編輯表單的時間為準，也就是 5/1 00:00 後若編輯回覆可能就沒有早鳥資格喔！',
			class: 'row-span-1',
			showmodal: false
		},
		{
			name: '個人資料填寫中和程式相關的問題是否會影響錄取？',
			description: '不會，這個問題僅供我們做分隊的參考。',
			class: 'row-span-1',
			showmodal: false
		}
	];
</script>

<section class="mb-20 text-pretty" id="FAQ">
	<div class="my-3">
		<span class="text-4xl">FAQ</span>
	</div>
	<div class="border-3 border-white bg-black/40 p-5 text-2xl/12">
		<div class="grid auto-rows-min grid-cols-3 grid-rows-[repeat(6,1fr)] gap-5">
			{#each FAQList as schedules}
				<button
					class="border-3 border-white p-5 text-left text-2xl/10 whitespace-pre-line hover:cursor-pointer hover:bg-yellow-300 hover:text-black {schedules.class}"
					on:click={() => {
						schedules.showmodal = true;
					}}
				>
					{schedules.name}
				</button>

				{#if schedules.showmodal === true}
					<div
						class="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
						on:click|self={() => (schedules.showmodal = false)}
						on:keydown={(e) => e.key === 'Escape' && (schedules.showmodal = false)}
						role="button"
						tabindex="0"
					>
						<div
							class="relative flex max-h-[90vh] w-200 flex-col border-3 border-white bg-black p-8"
						>
							<div class="mb-6 flex justify-between border-b-2 border-white">
								<div class="mr-5 grow text-3xl/12 whitespace-pre-line">{schedules.name}</div>
								<button
									on:click={() => (schedules.showmodal = false)}
									class="flex size-8 items-center justify-center border-2 border-white transition-colors hover:cursor-pointer hover:bg-red-500"
								>
									<span>x</span>
								</button>
							</div>
							<div class="modal-scrollbar h-full overflow-y-auto text-lg/8 whitespace-pre-line">
								{schedules.description}
							</div>
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</section>
