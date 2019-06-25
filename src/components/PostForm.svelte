<form action="{action}?_redirect=/" method="POST">
    <input name="id" value={id} type="hidden">
    <input name="userId" value={userId} type="hidden">
    <input bind:value={title} name="title">
    <textarea bind:value={body}></textarea> 
    {#if ! id}
    <button on:click={save}>Create</button>
    {:else}
    <button on:click={save} formaction="{action}?_redirect=/&_method=put">Save</button>
    <button on:click={remove} formaction="{action}?_redirect=/&_method=delete" class="del">Delete</button>
    {/if}
</form>

<script>
    import { goto } from '@sapper/app';

    const headers = { 'Content-Type': 'application/json' };

    export let id = 0,
        userId = 0,
        title = '',
        body = '';

    $: data = JSON.stringify({ id, userId, title, body });
    $: action = `/posts${id ? '/' + id : ''}.json`;

    async function save(e) {
        e.preventDefault();
        await fetch(action, { method: id ? 'PUT' : 'POST', headers, body: data });
        goto('/');
    }

    async function remove(e) {
        e.preventDefault();
        await fetch(action, { method: 'DELETE', headers, body: data });
        goto('/');
    }
</script>

<style>
    form {
        font: 95% Arial sans-serif;
        margin: 10px auto;
        padding: 16px;
        background: #F7F7F7;
    }
    input, textarea {
        outline: none;
        box-sizing: border-box;
        width: 100%;
        background: #fff;
        margin-bottom: 4%;
        border: 1px solid #ccc;
        padding: 3%;
        color: #555;
        font: 95% Arial sans-serif;
    }
    input:focus, textarea:focus {
        box-shadow: 0 0 5px #43D1AF;
        padding: 3%;
        border: 1px solid #43D1AF;
    } 
    button {
        box-sizing: border-box;
        width: 49%;
        display: inline-block;
        padding: 3%;
        background: #43D1AF;
        border-bottom: 2px solid #30C29E;
        border-top-style: none;
        border-right-style: none;
        border-left-style: none;	
        color: #fff;
        cursor: pointer;
    }
    button:hover{ background: #2EBC99; }
    button.del {
        border: none;
        background: transparent;
        color: rgb(153, 18, 86);
    }
    button.del:hover {
        background: rgb(255, 142, 142);
    }
</style>