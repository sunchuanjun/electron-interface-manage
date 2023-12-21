<script>
	import { onMount } from "svelte";
	import Tree from "../tree/Tree.svelte";
	export let config;
	export let collect;

	let data = [];
	let drawer, textarea;
	let drawerData;

	onMount(() => {
		data = config;
		collect = () => {
			return data;
		};
	});

	async function openFile(e) {
		const { file, name } = e.detail;
		if (!file) return;
		const hasFile = await window.runMainFn?.("has.file", file);
		const fileData = await window.runMainFn?.("get.file", file);

		drawerData = {
			hasFile,
			fileData,
			file,
			name,
		};
		setTimeout(() => {
			drawer.show();
		}, 0);
	}
	function add() {
		data = data.concat({});
	}
	function saveFile() {
		window.runMainFn?.("save.file", drawerData.file, textarea.value);
		drawer.hide();
	}
</script>

<table>
	<thead>
		<tr>
			<th>名称</th>
			<th>路径</th>
			<th>文件名</th>
			<th></th>
			<th>
				<sl-icon-button name="plus-lg" label="新增" on:click={add}
				></sl-icon-button>
			</th>
		</tr>
	</thead>
	<tbody>
		<Tree bind:data on:click={openFile}></Tree>
	</tbody>
</table>

{#if drawerData}
	<sl-drawer
		label={drawerData.name}
		bind:this={drawer}
		on:sl-hide={() => {
			drawerData = null;
		}}
	>
		<sl-textarea
			resize="auto"
			value={drawerData.fileData}
			bind:this={textarea}
		></sl-textarea>
		<sl-divider></sl-divider>
		<sl-button slot="footer" variant="success" on:click={saveFile}>
			<sl-icon slot="prefix" name="save"></sl-icon>
			保存
		</sl-button>
	</sl-drawer>
{/if}

<style>
	table {
		border-spacing: 0;
		border-collapse: collapse;
		width: 100%;
	}
	thead {
		background: #ddd;
		border: 1px solid #ddd;
	}
</style>
