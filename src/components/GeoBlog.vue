<template>
    <div class="geo-blog">
        <app-menu></app-menu>
        <div class="panes">
             <blog-map></blog-map>
        </div>
    </div>
</template>

<script>
    import AppMenu from './AppMenu.vue'
    import BlogMap from './BlogMap.vue'
    export default {
        components: {
            AppMenu,
            BlogMap
        }
    }
</script>