<script>
	export let node;
	export let parent;
	export let z = 0;
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();
	const openFile = () => dispatch("click", node);

	node._sync = () => (node = node);

	node._parent = () => parent;

	function add() {
		node.children = [].concat(node.children, {}).filter(Boolean);
	}
	function minus() {
		if (Array.isArray(node.children) && node.children.length > 0) {
			alert("请先移除子项");
		} else {
			parent.children = parent.children.filter((item) => item !== node);
			if (node.file) {
				ipc("file.rm", node.file);
			}
		}
		parent._sync();
	}
</script>

{#if node}
	<tr>
		<td>
			<span style:margin-left={z * 2 + "rem"}></span>
			<input
				type="text"
				bind:value={node.name}
				style="width: calc(100% - {z * 2 + 'rem'} - 20px)"
			/>
		</td>

		<td>
			<input type="text" bind:value={node.path} />
		</td>
		<td>
			<input type="text" bind:value={node.file} />
		</td>
		<td>
			<sl-button variant="text" on:click={openFile}>查看</sl-button>
		</td>
		<td>
			<sl-icon-button name="plus-lg" label="新增" on:click={add}
			></sl-icon-button>
			<sl-icon-button name="dash" label="减去" on:click={minus}
			></sl-icon-button>
		</td>
	</tr>

	{#if node.children}
		{#each node.children as child}
			<svelte:self parent={node} node={child} z={++z} on:click
			></svelte:self>
		{/each}
	{/if}
{/if}

<style>
	td {
		border: 1px solid #ccc;
		padding: 0 10px;
		white-space: nowrap;
		text-align: left;
	}
	input {
		padding: 5px;
		font-size: 16px;
		border-width: 0 0 1px 0;
		width: calc(100% - 20px);
	}
	tr:hover {
		background-color: #eee;
	}
</style>
