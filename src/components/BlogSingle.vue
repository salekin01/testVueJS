<template>


    <div id="singleBlog">

        <div class="img-thumbnail">
            <b-card
                    overlay
                    :img-src="getImg()"  img-height="400"
                    img-alt="Card Image"
                    text-variant="white"
                    :title=title
                    title-tag="h1"
                    sub-title="" >
                     <b>{{author}}</b>, <i>{{blog.createdOn}}</i>


<!--                <b-card-text>-->
<!--                    Some quick example text to build on the card and make up the bulk of the card's content.-->
<!--                </b-card-text>-->
            </b-card>
        </div>
        <div class="container" v-html="content">

        </div>


    </div>
</template>

<script>

    export default {
        name: "BlogSingle",
        components:{

        },
        props:{
           thumbnail:null,
           blog: Object
        },
        computed:{



        },
        data(){
            return{
                 title: "not updated",
                 author: "not updated",
                 content: "not updated",

            }
        },
        methods:{
            getImg(){
                if(this.thumbnail==null && typeof this.blog.thumbnail =="string"){
                    console.log("db");
                    return this.blog.thumbnail;
                }
                else{
                    const url = URL.createObjectURL(this.thumbnail);
                    console.log("preview");
                    return url;
                }
                //  const url = URL.createObjectURL(new File(this.thumbnail,{type: "image/jpeg"}));
                //   console.log(url);

            }
        },
        mounted() {
            this.title=this.blog.blogTitle;
            this.author=this.blog.blogWriter;
            this.content=this.blog.blogText;
        },
        created() {
          console.log("blog single created");
        }


    }
</script>

<style scoped>
    .img-thumbnail{
    }
.container{

    padding: 50px;

}
</style>
