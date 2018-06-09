<template>
    <div class="location-info" v-if="currentPost">
        <googlemaps-place-details
            v-if="currentPost.placeId"
            :request="{
                placeId: currentPost.placeId
            }">
            <place-details
                slot-scope="props"
                v-if="props.results"
                :name="props.results.name"
                :address="props.results.formatted_address">
            </place-details>
        </googlemaps-place-details>
        <googlemaps-geocoder 
            v-else
            :request="{
                location: currentPost.position,
            }">
            <PlaceDetails
                slot-scope="props"
                v-if="props.results"
                :name="props.results[1].placeDetails.name"
                :address="props.results[0].formatted_address">
            </PlaceDetails>
        </googlemaps-geocoder>
    </div>
    <div v-else></div>
</template>

<script>
    import PlaceDetails from './PlaceDetails.vue'
    import { mapGetters, createNamespacedHelpers } from 'vuex'

    const {
        mapGetters: postsGetters
    } = createNamespacedHelpers('posts')

    export default {
        components: {
            PlaceDetails
        },
        computed: postsGetters([
            'currentPost'
        ])
    }
</script>