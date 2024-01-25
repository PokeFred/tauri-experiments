<script lang="ts">
    import { invoke } from "@tauri-apps/api/tauri"
    import { appWindow, PhysicalPosition } from "@tauri-apps/api/window"
    import { onMount } from "svelte"

    let greeting: string = "Loading..."
    onMount(async (): Promise<void> => {
        await appWindow.setPosition(new PhysicalPosition(0, 0))
        greeting = await invoke("greet")
    })
</script>

<div class="card m-4 p-4">{greeting}</div>
