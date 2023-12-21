<script>
	import { dependencies } from "../../package.json";
</script>

<div>
	{#each Object.entries(dependencies) as [name, version]}
		<sl-tag variant="primary" style="margin-right: 10px;"
			>{name}@{version}</sl-tag
		>
	{/each}
</div>

<style>
	div {
		display: flex;
		gap: 10px;
		padding: 30px;
		flex-wrap: wrap;
	}
</style>
