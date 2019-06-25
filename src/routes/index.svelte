<svelte:head>
	<title>Posts list</title>
</svelte:head>

<h1>Your posts!</h1>

<ul>
{#each posts as { title, body, id } (id)}
	<li>
		<a href="/posts/{id}" rel="prefetch">{title}</a>
		<p>{body}</p>
	</li>
{:else}
	<li>No posts</li>
{/each}
</ul>

<script>
	export let posts = [];
</script>

<script context="module">
	export async function preload(page, session) {
		const res = await this.fetch(`posts.json`);
		const posts = await res.json();
		return { posts };
	}
</script>