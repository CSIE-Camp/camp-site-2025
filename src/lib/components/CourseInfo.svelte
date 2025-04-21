<script lang="ts">
	import { schedules_mornong, schedules_afternoon, schedules_night } from './schedules';
	// 建立本地副本，方便觸發 reactivity
	let morn = schedules_mornong;
	let aft = schedules_afternoon;
	let ni = schedules_night;

	type Schedule = {
		name: string;
		description: string;
		class?: string;
		showmodal: boolean;
	};

	function openModal(schedule: Schedule) {
		schedule.showmodal = true;
		// 重新分配本地副本強制更新
		morn = [...morn];
		aft = [...aft];
		ni = [...ni];
	}
	function closeModal(schedule: Schedule) {
		schedule.showmodal = false;
		morn = [...morn];
		aft = [...aft];
		ni = [...ni];
	}
</script>

<section class="mb-20 text-pretty" id="CourseInfo">
	<div class="my-3">
		<span class="text-4xl">課程資訊</span>
	</div>
	<div class="border-3 border-white bg-black/40 p-5 text-2xl/12 overflow-x-auto">
		<div
			class="grid grid-cols-5 grid-rows-[min-content_min-content_1fr_1fr_min-content_repeat(2,1fr_1fr_min-content)] gap-3
			text-xl min-w-[767px]"
		> 
			<div class="bg-[url(/mushroom.png)] bg-contain bg-center bg-no-repeat"></div>
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

			{#each morn as schedule}
				<button
					class="border-3 border-white px-3 py-5 whitespace-pre-line transition-colors hover:cursor-pointer hover:bg-yellow-300 hover:text-black {schedule.class}"
					on:click={() => openModal(schedule)}
				>
					{schedule.name}
				</button>

				{#if schedule.showmodal === true}
					<div
						class="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
						on:click|self={() => closeModal(schedule)}
						on:keydown={(e) => e.key === 'Escape' && closeModal(schedule)}
						role="button"
						tabindex="0"
					>
						<div
							class="relative flex max-h-[90vh] w-200 flex-col border-3 border-white bg-black p-8"
						>
							<div class="mb-6 flex justify-between border-b-2 border-white">
								<div class="mr-5 grow text-3xl/12 whitespace-pre-line">{schedule.name}</div>
								<button
									on:click={() => closeModal(schedule)}
									class="flex size-8 items-center justify-center border-2 border-white transition-colors hover:cursor-pointer hover:bg-red-500"
								>
									<span>x</span>
								</button>
							</div>
							<div class="modal-scrollbar h-full overflow-y-auto text-lg/8 whitespace-pre-line">
								{schedule.description}
							</div>
						</div>
					</div>
				{/if}
			{/each}

			<div class="col-span-5 bg-white p-3 text-center text-2xl text-black">LUNCH TIME</div>

			<div
				class="col-start-1 row-span-2 flex flex-col items-center justify-evenly bg-white py-3 text-center text-2xl text-black"
			>
				<p>14:00</p>
				<p>|</p>
				<p>17:00</p>
			</div>

			{#each aft as schedule}
				<button
					class="border-3 border-white px-3 py-5 whitespace-pre-line transition-colors hover:cursor-pointer hover:bg-yellow-300 hover:text-black {schedule.class}"
					on:click={() => openModal(schedule)}
				>
					{schedule.name}
				</button>
				{#if schedule.showmodal === true}
					<div
						class="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
						on:click|self={() => closeModal(schedule)}
						on:keydown={(e) => e.key === 'Escape' && closeModal(schedule)}
						role="button"
						tabindex="0"
					>
						<div
							class="relative flex max-h-[90vh] w-200 flex-col border-3 border-white bg-black p-8"
						>
							<div class="mb-6 flex justify-between border-b-2 border-white">
								<div class="mr-5 grow text-3xl/12 whitespace-pre-line">{schedule.name}</div>
								<button
									on:click={() => closeModal(schedule)}
									class="flex size-8 items-center justify-center border-2 border-white transition-colors hover:cursor-pointer hover:bg-red-500"
								>
									<span>x</span>
								</button>
							</div>
							<div class="modal-scrollbar h-full overflow-y-auto text-lg/8 whitespace-pre-line">
								{schedule.description}
							</div>
						</div>
					</div>
				{/if}
			{/each}

			<div class="col-span-4 bg-white p-3 text-center text-2xl text-black">DINNER TIME</div>

			<div
				class="col-start-1 row-span-2 flex flex-col items-center justify-evenly bg-white py-3 text-center text-2xl text-black"
			>
				<p>19:00</p>
				<p>|</p>
				<p>21:00</p>
			</div>

			{#each ni as schedule}
				<button
					class="border-3 border-white bg-transparent px-3 py-5 whitespace-pre-line transition-colors hover:cursor-pointer hover:bg-yellow-300 hover:text-black {schedule.class}"
					on:click={() => openModal(schedule)}
				>
					{schedule.name}
				</button>

				{#if schedule.showmodal === true}
					<div
						class="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
						on:click|self={() => closeModal(schedule)}
						on:keydown={(e) => e.key === 'Escape' && closeModal(schedule)}
						role="button"
						tabindex="0"
					>
						<div
							class="relative flex max-h-[90vh] w-200 flex-col border-3 border-white bg-black p-8"
						>
							<div class="mb-6 flex justify-between border-b-2 border-white">
								<div class="mr-5 grow text-3xl/12 whitespace-pre-line">{schedule.name}</div>
								<button
									on:click={() => closeModal(schedule)}
									class="flex size-8 items-center justify-center border-2 border-white transition-colors hover:cursor-pointer hover:bg-red-500"
								>
									<span>x</span>
								</button>
							</div>
							<div class="modal-scrollbar h-full overflow-y-auto text-lg whitespace-pre-line">
								{schedule.description}
							</div>
						</div>
					</div>
				{/if}
			{/each}

			<div class="col-span-4 bg-white p-3 text-center text-2xl text-black">
				CODING/SLEEPING TIME
			</div>
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
</style>
