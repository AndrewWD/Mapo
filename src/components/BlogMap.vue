<template>
    <div class="blog-map">
        <googlemaps-map
            :center="center"
            :zoom="zoom"
            :options="mapOptions"
            @update:center="setCenter"
            @update:zoom="setZoom">
            <googlemaps-user-position
                @update:position="setUserPosition">
            </googlemaps-user-position>
        </googlemaps-map>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        computed: {
            ...mapGetters({
                center: 'maps/center',
                zoom: 'maps/zoom',
            }),
            mapOptions() {
                return {
                    fullscreenControl: false
                }
            }
        },
        methods: mapActions({
            setCenter: 'maps/setCenter',
            setZoom: 'maps/setZoom',
            setUserPosition: 'maps/setUserPosition'
        })
    }
</script>