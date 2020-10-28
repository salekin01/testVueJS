<template>
    <div id="comment-section">
        <div class="container">
            <h1>Comment Section</h1><br><br>
            <div  v-if="commentList.length!==0">
                <ul v-for="(comment,index) in commentList"  :key="index">
                <h5><b>{{comment.commentedBy}}</b> <i>{{comment.createdOn}}</i></h5>
                <p>{{comment.commentText}}</p>
                </ul>
            </div>

        </div>


        <b-container fluid id="comment-box">
            <b-row>
                <b-col sm="2">
                    <label for="textarea-auto-height">Name</label>
                </b-col>
                <b-col sm="10">
                    <div>
                        <b-form-input v-model="comment.author" type="text" debounce="500"></b-form-input>
                    </div>
                </b-col>
            </b-row>

            <b-row class="mt-2">
                <b-col sm="2">
                    <label for="textarea-no-auto-shrink">Comment</label>
                </b-col>
                <b-col sm="10">
                    <b-form-textarea
                            v-model="comment.content"
                            id="textarea-no-auto-shrink"
                            placeholder="Write your text"
                            rows="3"
                            max-rows="8"
                            no-auto-shrink
                    ></b-form-textarea>
                </b-col>
            </b-row>
            <br>
            <div align="right"><b-button type="button" padding="15px" variant="outline-primary" @click="postComment">{{this.btn.postComment}}</b-button></div>
        </b-container>
    </div>
</template>

<script>
    export default {
        props:{
            blog:Object
        },
        data() {
            return {
                btn:{
                    postComment:'Post A Comment'
                },
                comment:{
                  author:'',
                  content:'',
                },
                commentList:[]

            }
        },
        methods:{
           async postComment(){
                this.commentList.push(this.comment);
                this.btn.postComment="Posting...."
               // console.log(this.commentList);
               await this.axios.post("/api/comment", {
                    commentText: this.comment.content,
                    commentedBy:this.comment.author,
                    blog: this.blog,
                });
                this.getAllComments();
            },
            getAllComments(){
                this.axios.get("/api/comment/getCommentsByBlogId/"+this.blog.blogId).then((response) => {
                    this.commentList= response.data;
                    this.btn.postComment="Post A Comment"

                    //console.log(response.data);
                })
            }
        },
        created() {
            this.getAllComments();
        }

    }
</script>
<style scoped>
    #comment-section{
        padding: 50px;
    }
    #comment-box{
        padding: 60px;
    }
</style>
