<script lang="ts">
	import { FAQList } from './Faq';
	// Create a reactive local copy of FAQList for reactivity
	let faqList = FAQList.map(item => ({ ...item }));
</script>

<section class="mb-20 text-pretty" id="FAQ">
	<div class="my-3">
		<span class="text-4xl">FAQ</span>
	</div>
	<div class="border-3 border-white bg-black/40 p-5 text-2xl/12">
		<div class="grid auto-rows-min gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{#each faqList as schedules}
				<button
					class="border-3 border-white p-5 text-left text-2xl/10 whitespace-pre-line transition-colors hover:cursor-pointer hover:bg-yellow-300 hover:text-black {schedules.class}"
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
