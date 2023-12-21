<script>
	import { onMount } from "svelte";
	export let config;
	export let collect;

	function getValue(id) {
		return document.getElementById(id).value;
	}

	onMount(() => {
		collect = () => {
			return {
				port: getValue("port"),
				staticPath: getValue("staticPath"),
				startFileName: getValue("startFileName"),
			};
		};
	});
</script>

<div style="padding: 50px;">
	<sl-input class="label-on-left" label="端口" value={config.port} id="port"
	></sl-input>
	<sl-input
		class="label-on-left"
		label="静态路径"
		type="text"
		value={config.staticPath}
		id="staticPath"
	></sl-input>
	<sl-input
		class="label-on-left"
		label="首页文件名"
		type="text"
		value={config.startFileName}
		id="startFileName"
	></sl-input>
</div>

<style>
	.label-on-left {
		--label-width: 8rem;
		--gap-width: 1rem;
	}

	.label-on-left + .label-on-left {
		margin-top: var(--sl-spacing-medium);
	}

	.label-on-left::part(form-control) {
		display: grid;
		grid: auto / var(--label-width) 1fr;
		gap: var(--sl-spacing-3x-small) var(--gap-width);
		align-items: center;
	}

	.label-on-left::part(form-control-label) {
		text-align: right;
	}

	.label-on-left::part(form-control-help-text) {
		grid-column-start: 2;
	}
</style>
