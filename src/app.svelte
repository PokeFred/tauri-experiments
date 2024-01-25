<script lang="ts">
    import { invoke } from "@tauri-apps/api/tauri"

    let name: string = ""
    let greetMsg: string = ""

    async function greet() {
        greetMsg = await invoke("greet", { name })
    }
</script>

<div>
    <input type="text" bind:value={name} class="border">
    <button on:click={greet} class="border">Send</button>
</div>
<div>{greetMsg}</div>
