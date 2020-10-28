<template>
    <div>
    <HeaderComponent></HeaderComponent>
        <b-embed type="video" controls autoplay aspect="21by9">
            <source src="@/assets/falah_video.mp4" type="video/mp4">
        </b-embed>
    </div>
</template>

<script>
    import HeaderComponent from "../components/HeaderComponent";
    export default {
        name: "AboutUs",
        components : {HeaderComponent},
        // computed: {
        //     videoElement() {
        //         return this.$refs.video;
        //     },
        // }
    }
</script>

<style scoped>

</style>
