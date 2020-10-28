<template>
    <div class="blog">
        <headerVue></headerVue>
        <blog-all v-if="dataLoaded"
                  :category-id="this.categoryId"
        ></blog-all>
    </div>
</template>

<script>

    import headerVue from '../components/HeaderComponent'
    import blogAll from '../components/BlogAll'
    export default {
        components: {
            headerVue,
            blogAll
        },

        data (){
            return{
                categoryId:'',
                blogList:[],
                dataLoaded:false
            }
        },

        created() {
            this.categoryId=this.$route.params.categoryId;
            this.$router.push({
                name: 'BlogAll',
                params: { id: this.categoryId }})
        },
    }

</script>
