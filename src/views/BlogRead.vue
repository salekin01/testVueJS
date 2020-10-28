<template>
    <div>
        <headerVue></headerVue>
        <blog-single v-if="dataLoaded"
            v-bind:blog="blog"
        ></blog-single>
        <div>
            <share :content-link="this.$route.path"></share>
        </div>
        <commentComp v-if="dataLoaded"
            :blog="blog"
        ></commentComp>
    </div>
</template>

<script>
    import share from '../components/shareComponent'
    import headerVue from "../components/HeaderComponent";
    import BlogSingle from "../components/BlogSingle";
    import commentComp from "../components/CommentComponent.vue";
    export default {
        name: "BlogRead",
        components: {BlogSingle, headerVue,commentComp,share},
        data(){
            return{
                blogId:'',
                blog: {},
                dataLoaded:false
            }
        },
        async created() {
            await this.getBlog();
            console.log('The id is: ' + this.$route.params.id);
        },
        methods:{
            async getBlog() {
                this.blogId=this.$route.params.id;
                await this.axios.get("/api/blog/" + this.blogId).then((response) => {
                    this.blog = response.data;
                    this.dataLoaded=true;
                })
            }
        }
    }
</script>

<style scoped>

</style>
