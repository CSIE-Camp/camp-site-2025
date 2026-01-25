<script lang="ts">
	import { assets } from '$app/paths';
	import { schedules_morning, schedules_afternoon, schedules_night } from './schedules';

	interface ScheduleItem {
		name: string;
		description: string;
		class?: string;
		showmodal: boolean;
		flag?: {
			text: string;
			color: string;
		};
	}

	type Schedule = ScheduleItem;

	type DaySchedule = {
		date: string;
		morning: Schedule[];
		afternoon: Schedule[];
		night: Schedule[];
	};

	// 四天課程表數據
	const daySchedules: DaySchedule[] = [
		// 7/1: 報到 開幕 Python基礎 敬請期待
		{
			date: '07.01 (TUE)',
			morning: [schedules_morning[3], schedules_morning[4]], // 報到, 開幕
			afternoon: [schedules_afternoon[0]], // Python基礎
			night: [schedules_night[0]] // 敬請期待
		},
		// 7/2: 邊緣人好朋友 選修一 擁有自己的男女朋友 敬請期待
		{
			date: '07.02 (WED)',
			morning: [schedules_morning[0]], // 邊緣人好朋友
			afternoon: [schedules_afternoon[1], schedules_afternoon[4]], // 選修課一, 擁有自己的男女朋友
			night: [schedules_night[1]] // 敬請期待
		},
		// 7/3: 打造自己的遊戲 選修課二 黑客松 敬請期待
		{
			date: '07.03 (THU)',
			morning: [schedules_morning[1]], // 打造自己的遊戲
			afternoon: [schedules_afternoon[2], schedules_afternoon[5]], // 選修課二, 黑客松
			night: [schedules_night[2]] // 敬請期待
		},
		// 7/4: 黑客松 黑客松報告 閉幕
		{
			date: '07.04 (FRI)',
			morning: [schedules_morning[2]], // 黑客松
			afternoon: [schedules_afternoon[3], schedules_afternoon[6]], // 黑客松報告, 閉幕
			night: [] // 無晚間活動
		}
	];

	let currentDayIndex = 0;
	let openModalSchedule: Schedule | null = null;

	function nextDay() {
		if (currentDayIndex < daySchedules.length - 1) {
			currentDayIndex++;
		}
	}

	function prevDay() {
		if (currentDayIndex > 0) {
			currentDayIndex--;
		}
	}

	function openModal(schedule: Schedule) {
		openModalSchedule = schedule;
	}

	function closeModal() {
		openModalSchedule = null;
	}
</script>

<section class="mb-20 text-pretty" id="CourseInfo">
	<div class="my-3">
		<span class="text-4xl">課程資訊</span>
	</div>

	<!-- 桌面版課表 -->
	<div class="hidden overflow-x-auto border-3 border-white bg-black/40 p-5 text-2xl/12 md:block">
		<div
			class="grid min-w-[767px] grid-cols-5 grid-rows-[min-content_min-content_1fr_1fr_min-content_repeat(2,1fr_1fr_min-content)]
			gap-3 text-2xl/12"
		>
			<div
				class="bg-contain bg-center bg-no-repeat"
				style={`background-image: url('${assets}/mushroom.png')`}
			></div>
			<div class="bg-white p-3 text-center text-2xl text-black">07.01 (TUE)</div>
			<div class="bg-white p-3 text-center text-2xl text-black">07.02 (WED)</div>
			<div class="bg-white p-3 text-center text-2xl text-black">07.03 (THU)</div>
			<div class="bg-white p-3 text-center text-2xl text-black">07.04 (FRI)</div>

			<div
				class="col-start-1 row-span-3 flex flex-col items-center justify-evenly bg-white py-3 text-center text-2xl text-black"
			>
				<p>09:00</p>
				<p>|</p>
				<p>12:00</p>
			</div>

			<div class="h-10"></div>

			{#each schedules_morning as schedule, index (index)}
				<button
					class="border-3 border-white px-3 py-5 whitespace-pre-line transition-colors hover:cursor-pointer hover:bg-yellow-300 hover:text-black {schedule.class}"
					on:click={() => openModal(schedule)}
				>
					{#if schedule.name === '開幕 +《走進 CS》講座'}
						開幕<br />+<br />《走進 CS》講座
					{:else}
						{schedule.name}
					{/if}
				</button>
			{/each}

			<div class="col-span-5 bg-white p-3 text-center text-2xl text-black">LUNCH TIME</div>

			<div
				class="col-start-1 row-span-2 flex flex-col items-center justify-evenly bg-white py-3 text-center text-2xl text-black"
			>
				<p>14:00</p>
				<p>|</p>
				<p>17:00</p>
			</div>

			{#each schedules_afternoon as schedule, index (index)}
				<button
					class="border-3 border-white px-3 py-5 whitespace-pre-line transition-colors hover:cursor-pointer hover:bg-yellow-300 hover:text-black {schedule.class}"
					on:click={() => openModal(schedule)}
				>
					{schedule.name}
				</button>
			{/each}

			<div class="col-span-4 bg-white p-3 text-center text-2xl text-black">DINNER TIME</div>

			<div
				class="col-start-1 row-span-2 flex flex-col items-center justify-evenly bg-white py-3 text-center text-2xl text-black"
			>
				<p>19:00</p>
				<p>|</p>
				<p>21:00</p>
			</div>

			{#each schedules_night as schedule, index (index)}
				<button
					class="border-3 border-white bg-transparent px-3 py-5 whitespace-pre-line transition-colors hover:cursor-pointer hover:bg-yellow-300 hover:text-black {schedule.class}"
					on:click={() => openModal(schedule)}
				>
					{schedule.name}
				</button>
			{/each}

			<div class="col-span-4 bg-white p-3 text-center text-2xl text-black">
				CODING/SLEEPING TIME
			</div>
		</div>
	</div>

	<!-- 桌面版模態框 -->
	{#if openModalSchedule}
		<div
			class="fixed inset-0 z-50 hidden items-center justify-center bg-black/75 md:flex"
			on:click={closeModal}
			on:keydown={(e) => e.key === 'Escape' && closeModal()}
			role="button"
			tabindex="0"
		>
			<div
				class="relative flex max-h-[90vh] w-200 max-w-[90vw] flex-col overflow-hidden border-3 border-white bg-black p-8"
				on:click|stopPropagation
				on:keydown={(e) => e.key === 'Escape' && closeModal()}
				role="dialog"
				aria-modal="true"
				aria-labelledby="modal-title-desktop"
				tabindex="-1"
			>
				<div class="mb-6 flex justify-between border-b-2 border-white">
					<div
						class="mr-5 grow text-3xl/12 break-words whitespace-pre-line"
						id="modal-title-desktop"
					>
						{openModalSchedule.name}
					</div>
					<button
						on:click={closeModal}
						class="flex size-8 flex-shrink-0 items-center justify-center border-2 border-white transition-colors hover:cursor-pointer hover:bg-red-500"
						aria-label="Close modal"
					>
						<span class="flex items-center justify-center">x</span>
					</button>
				</div>
				<div
					class="modal-scrollbar h-full overflow-x-hidden overflow-y-auto text-lg/8 break-words whitespace-pre-line"
				>
					{openModalSchedule.description}
					{#if 'flag' in openModalSchedule && openModalSchedule.flag !== undefined}
						{@const flag = openModalSchedule.flag as { color: string; text: string }}
						<p style="color: {flag.color};">{flag.text}</p>
					{/if}
				</div>
			</div>
		</div>
	{/if}

	<!-- 手機版卡片輪播課表 -->
	<div class="border-3 border-white bg-black/40 p-4 text-xl md:hidden">
		<!-- 日期選擇器 -->
		<div class="mb-6 flex items-center justify-between">
			<button
				class="flex size-12 flex-shrink-0 items-center justify-center border-2 border-white p-2 transition-colors hover:bg-yellow-300 hover:text-black disabled:opacity-50"
				on:click={prevDay}
				disabled={currentDayIndex === 0}
			>
				<img
					src={`${assets}/icons/next.png`}
					alt="Previous"
					class="h-full w-full rotate-180 object-contain"
				/>
			</button>
			<div class="flex-1 text-center text-2xl font-bold">{daySchedules[currentDayIndex].date}</div>
			<button
				class="flex size-12 flex-shrink-0 items-center justify-center border-2 border-white p-2 transition-colors hover:bg-yellow-300 hover:text-black disabled:opacity-50"
				on:click={nextDay}
				disabled={currentDayIndex === daySchedules.length - 1}
			>
				<img src={`${assets}/icons/next.png`} alt="Next" class="h-full w-full object-contain" />
			</button>
		</div>

		<!-- 卡片輪播容器 -->
		<div class="relative overflow-hidden px-2">
			<div
				class="flex gap-4 transition-transform duration-300"
				style="transform: translateX(calc(-{currentDayIndex} * (100% + 16px)))"
			>
				{#each daySchedules as daySchedule (daySchedule.date)}
					<div class="w-full flex-shrink-0 border-3 border-white bg-black/20 p-4">
						<!-- 早上課程 -->
						<div class="mb-4">
							<div class="mb-2 border-b-2 border-white pb-1 text-base font-bold text-yellow-300">
								早上
							</div>
							<div class="grid grid-cols-1 gap-2">
								{#each daySchedule.morning as schedule (schedule.name)}
									<button
										class="truncate border-2 border-white px-2 py-2 text-left text-base transition-colors hover:cursor-pointer hover:bg-yellow-300 hover:text-black"
										on:click={() => openModal(schedule)}
									>
										{schedule.name}
									</button>
								{/each}
							</div>
						</div>

						<!-- 下午課程 -->
						<div class="mb-4">
							<div class="mb-2 border-b-2 border-white pb-1 text-base font-bold text-yellow-300">
								下午
							</div>
							<div class="grid grid-cols-1 gap-2">
								{#each daySchedule.afternoon as schedule (schedule.name)}
									<button
										class="truncate border-2 border-white px-2 py-2 text-left text-base transition-colors hover:cursor-pointer hover:bg-yellow-300 hover:text-black"
										on:click={() => openModal(schedule)}
									>
										{schedule.name}
									</button>
								{/each}
							</div>
						</div>

						<!-- 晚上課程 -->
						{#if daySchedule.night.length > 0}
							<div>
								<div class="mb-2 border-b-2 border-white pb-1 text-base font-bold text-yellow-300">
									晚上
								</div>
								<div class="grid grid-cols-1 gap-2">
									{#each daySchedule.night as schedule (schedule.name)}
										<button
											class="truncate border-2 border-white px-2 py-2 text-left text-base transition-colors hover:cursor-pointer hover:bg-yellow-300 hover:text-black"
											on:click={() => openModal(schedule)}
										>
											{schedule.name}
										</button>
									{/each}
								</div>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>

		<!-- 手機版模態框 -->
		{#if openModalSchedule}
			<div
				class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 md:hidden"
				on:click={closeModal}
				on:keydown={(e) => e.key === 'Escape' && closeModal()}
				role="button"
				tabindex="0"
			>
				<div
					class="relative flex max-h-[90vh] w-80 max-w-[90vw] flex-col overflow-hidden border-3 border-white bg-black p-6"
					on:click|stopPropagation
					on:keydown={(e) => e.key === 'Escape' && closeModal()}
					role="dialog"
					aria-modal="true"
					aria-labelledby="modal-title"
					tabindex="-1"
				>
					<div class="mb-6 flex justify-between border-b-2 border-white">
						<div class="mr-5 grow text-3xl/12 break-words whitespace-pre-line" id="modal-title">
							{openModalSchedule.name}
						</div>
						<button
							on:click={closeModal}
							class="flex size-8 items-center justify-center border-2 border-white transition-colors hover:cursor-pointer hover:bg-red-500"
							aria-label="Close modal"
						>
							<span>x</span>
						</button>
					</div>
					<div
						class="modal-scrollbar h-full overflow-x-hidden overflow-y-auto text-lg/8 break-words whitespace-pre-line"
					>
						{openModalSchedule.description}
						{#if 'flag' in openModalSchedule && openModalSchedule.flag !== undefined}
							{@const flag = openModalSchedule.flag as { color: string; text: string }}
							<p style="color: {flag.color};">{flag.text}</p>
						{/if}
					</div>
				</div>
			</div>
		{/if}

		<!-- 指示點 -->
		<div class="mt-4 flex justify-center gap-2">
			{#each daySchedules as daySchedule, idx (daySchedule.date)}
				<button
					class="size-3 border border-white transition-colors {idx === currentDayIndex
						? 'bg-yellow-300'
						: 'bg-transparent'}"
					on:click={() => (currentDayIndex = idx)}
					aria-label="Go to day {idx + 1}"
				></button>
			{/each}
		</div>
	</div>
</section>

<style>
	.modal-scrollbar::-webkit-scrollbar {
		/* 滾動條寬度 */
		width: 8px;
	}

	.modal-scrollbar::-webkit-scrollbar-track {
		/* 軌道背景 */
		background: #333;
	}

	.modal-scrollbar::-webkit-scrollbar-thumb {
		/* 滑塊顏色 */
		background: #fff;
	}

	.modal-scrollbar::-webkit-scrollbar-thumb:hover {
		/* 滑塊懸停時顏色 */
		background: #ffdf20;
	}

	/*temp style*/

	/* Add custom scrollbar for horizontal scrolling */
	.overflow-x-auto::-webkit-scrollbar {
		height: 8px;
	}

	.overflow-x-auto::-webkit-scrollbar-track {
		background: #333;
	}

	.overflow-x-auto::-webkit-scrollbar-thumb {
		background: #fff;
	}

	.overflow-x-auto::-webkit-scrollbar-thumb:hover {
		background: #ffdf20;
	}

	/* 卡片輪播動畫 */
	@media (max-width: 768px) {
		.relative {
			perspective: 1000px;
		}

		.flex {
			will-change: transform;
		}
	}
</style>
