<script>
	import Config from "./tabs/Config.svelte";
	import Router from "./tabs/Router.svelte";
	import Package from "./tabs/Package.svelte";
	import { onMount } from "svelte";

	let config,
		isLazy = false,
		collect = [],
		btns = [
			{
				loading: false,
				disabled: false,
				label: "保存",
				time: 1000,
				variant: "primary",
				fn: function () {
					changeBtns(0, this.time);
					ipc(
						"file.save",
						"config.json",
						JSON.stringify(
							collect.map((item) => item()),
							null,
							"\t"
						)
					);
				},
			},
			{
				loading: false,
				disabled: false,
				label: "启动",
				time: 1000,
				variant: "success",
				fn: function () {
					changeBtns(1, this.time);
					ipc("server.start");
				},
			},
			{
				loading: false,
				disabled: false,
				label: "关闭",
				time: 1000,
				variant: "danger",
				fn: function () {
					changeBtns(2, this.time);
					ipc("server.exit");
				},
			},
		];

	onMount(async () => {
		const data = await ipc("file.data", "config.json");
		if (data) {
			config = JSON.parse(data);
		}
	});

	function changeBtns(index, time) {
		isLazy = true;
		if (typeof index === "number") {
			btns[index].loading = true;
			btns[index].disabled = true;
		}

		const arr = Array(btns.length)
			.fill(0)
			.map((_, index) => index)
			.filter((v) => v != index);

		arr.forEach((v) => {
			btns[v].loading = false;
			btns[v].disabled = true;
		});
		if (time) {
			setTimeout(() => {
				for (let i = 0; i < btns.length; i++) {
					btns[i].loading = false;
					btns[i].disabled = false;
				}
				isLazy = false;
			}, time);
		}
	}
</script>

<main>
	<sl-tab-group class="sl-tab-group">
		<sl-tab slot="nav" panel="0" active>基础设置</sl-tab>
		<sl-tab slot="nav" panel="1">路由</sl-tab>
		<sl-tab slot="nav" panel="2">工具包</sl-tab>
		<sl-tab slot="nav" class="tab-other" disabled>
			{#each btns as btn}
				<sl-button
					style="margin-right: 10px;"
					variant={btn.variant}
					loading={btn.loading}
					disabled={btn.disabled}
					on:click={() => !isLazy && btn.fn()}
					>{btn.label}
				</sl-button>
			{/each}
		</sl-tab>

		{#if config}
			<sl-tab-panel name="0">
				<Config config={config[0]} bind:collect={collect[0]} />
			</sl-tab-panel>
			<sl-tab-panel name="1">
				<div style="overflow: auto;max-height:calc(100vh - 100px); ">
					<Router config={config[1]} bind:collect={collect[1]} />
				</div>
			</sl-tab-panel>
			<sl-tab-panel name="2">
				<Package></Package>
			</sl-tab-panel>
		{/if}
	</sl-tab-group>
</main>

<style>
	.sl-tab-group::part(tabs) {
		align-items: center;
	}
	.tab-other::part(base) {
		opacity: 1;
		cursor: default;
	}
</style>
