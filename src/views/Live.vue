<template>
    <div class="container">
        <HeaderComponent></HeaderComponent>

        <div >
            <h1>Friday Live Khutba </h1>

            <iframe width="1080" height="720" src="https://www.youtube.com/embed/JlyaU-65M8o"
                    frameborder="0" allow="accelerometer;
            autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
    import HeaderComponent from "../components/HeaderComponent";
    export default {
    components : {HeaderComponent}
    }
</script>

<style scoped>

</style>
