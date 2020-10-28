<template>
    <div id="bloglist">
        <headerVue></headerVue>
        <div class="container" style="padding-top:20px">
            <b-card-group columns>
                <b-card v-for="blog in blogList" :key="blog.id"
                        :title=blog.blogTitle
                        :img-src=blog.thumbnail
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                >
                    <b-card-text v-html="getBlogText(blog)">

                    </b-card-text>

                    <b-button :to=blogLink(blog.blogId) variant="primary">Continue reading</b-button>
                </b-card>
            </b-card-group>
        </div>

    </div>
</template>

<script>
    import headerVue from '../components/HeaderComponent'

    export default {
        components: {
            headerVue,
        },
        name: "BlogAll",
        props:{
            categoryId: String
        },
        data(){
            return{
                blogList:[]
            }
        },

        created() {
            let id=this.$route.params.id;
            this.axios.get("/api/blog/getBlogsByBlogCategoryId/"+id).then((response) => {   //35.246.255.152:8080
                this.blogList= response.data;
                console.log(response.data);
            })

        },
        methods: {
            blogLink(id){
                return "/blog-read/"+id;
            },
            getBlogText(blog){
                if(blog.blogText!=null){
                    return blog.blogText.toString().slice(0,100);
                }

            }

        }
    }

</script>

<style scoped>
#bloglist{

}
</style>
