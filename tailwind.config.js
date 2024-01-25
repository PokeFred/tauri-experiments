import { skeleton } from "@skeletonlabs/tw-plugin"
import { join as pathJoin } from "path"

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.svelte",
        pathJoin(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,svelte,js,ts}")
    ],
    theme: {
        extend: {}
    },
    plugins: [
        skeleton({
            themes: {
                preset: ["skeleton"]
            }
        })
    ]
}
