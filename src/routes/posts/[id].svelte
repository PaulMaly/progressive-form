<svelte:head>
	<title>{post.title} | Edit post</title>
</svelte:head>

<h1>Edit post</h1>

<PostForm {...post} />

<script>
    import PostForm from '~/components/PostForm.svelte';
    export let post = null;
</script>

<script context="module">
    export async function preload({ params }, session) {
        const res = await this.fetch(`posts/${params.id}.json`);
        const post = await res.json();
        return { post };
    }
</script>