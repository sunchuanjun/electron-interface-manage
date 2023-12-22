<script>
	import Node from "./Node.svelte";
	export let data;

	let tree;

	function onChange() {
		tree = {
			children: data,
			_sync: () => {
				data = tree.children;
			},
		};
	}
	$: data && onChange();
</script>

{#if tree}
	{#each tree.children as node}
		<Node {node} parent={tree} on:click></Node>
	{/each}
{/if}
