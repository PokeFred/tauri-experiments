<script lang="ts">
    import { invoke } from "@tauri-apps/api/tauri"

    let name: string = ""
    let greetMsg: string = ""

    async function greet() {
        greetMsg = await invoke("greet", { name })
    }
</script>

<body data-theme="skeleton" class="dark">
    <div class="card m-4 p-4">
        <div>
            <input type="text" bind:value={name} class="border">
            <button on:click={greet} class="border">Send</button>
        </div>
        <div>{greetMsg}</div>
    </div>
</body>
