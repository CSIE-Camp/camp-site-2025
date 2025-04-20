<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';

	onMount(() => {
		const style =
			'color: #fff; background: linear-gradient(90deg, #ff512f, #dd2476); font-size: 1.1em; font-weight: bold; padding: 2px 8px; border-radius: 4px;';
		console.log(
			'%c我們正是在等待像你這樣的專家！\n如果你能看到這個頁面，代表你已經成功地接近了我們的彩蛋！\n實際的彩蛋在 %s//%s/egg \n趕快來報名我們的營隊，和一群同樣會看 console 的高手一起玩耍吧！',
			style,
			page.url.protocol,
			page.url.host
		);
	});
</script>
