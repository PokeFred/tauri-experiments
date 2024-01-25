<script lang="ts">
    import { writable} from "svelte/store"
    import type { Writable } from "svelte/store"

    type Theme = "skeleton"
    let selectedTheme: Writable<Theme> = writable<Theme>("skeleton")
    let isDarkMode: Writable<boolean> = writable<boolean>(true)
</script>

<div data-theme="{$selectedTheme}" class="{$isDarkMode ? 'dark' : 'light'}">
    <slot />
</div>
