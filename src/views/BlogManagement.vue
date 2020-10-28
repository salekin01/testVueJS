<template>
    <div>
    <div class="container" style="padding-top:20px">
        <b-card-group columns>
            <b-card v-for="blog in blogList" :key="blog.blogId"
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
                <b-button variant="danger" @click="blogDelete(blog.blogId)">Delete</b-button>
<!--                <b-button variant="outline-primary" >Edit</b-button>-->
            </b-card>



        </b-card-group>


    </div>
    </div>
</template>

<script>
    export default {
        name: "BlogManagement",
        props:{
            categoryId: String
        },
        data(){
            return{
                blogList:[]
            }
        },

        created() {
            this.axios.get("/api/blog").then((response) => {
                this.blogList= response.data;
                console.log(response.data);
            })


        },
        methods: {
            blogLink(id){
                return "/blog-read/"+id;
            },
            blogDelete(id){
                this.axios.delete("/api/blog/"+id).then(() => {
                    window.alert("blog deleted");
                })

                this.blogList.splice(id,1);
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

</style>
