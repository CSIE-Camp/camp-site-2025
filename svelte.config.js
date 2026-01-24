import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: {
			name: 'adapter-cloudflare-custom',
			async adapt(builder) {
				const delegate = adapter();
				const originalMkdirp = builder.mkdirp;
				builder.mkdirp = (dir) => {
					originalMkdirp(dir);
					if (dir.endsWith('cloudflare')) {
						originalMkdirp(dir + '/2025');
					}
				};
				await delegate.adapt(builder);
			}
		},
		paths: {
			base: '/2025'
		}
	}
};

export default config;
