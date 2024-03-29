<script lang="ts">
    import { onMount } from 'svelte'
    import { getName, getTauriVersion, getVersion } from '@tauri-apps/api/app'

    let appName: string = ''
    let tauriVersion: string = ''
    let appVersion: string = ''

    onMount(async (): Promise<void> => {
        appName = await getName()
        tauriVersion = await getTauriVersion()
        appVersion = await getVersion()
    })
</script>

<div>App Name: {appName}</div>
<div>Tauri Version: {tauriVersion}</div>
<div>App Version: {appVersion}</div>
