<template>
    <div>
        <HeaderComponent></HeaderComponent>
        <div class="container" style="padding-top: 20px">
        <b-container fluid id="comment-box">
            <b-row>
                <b-col sm="2">
                    <label for="textarea-auto-height">Your Email</label>
                </b-col>
                <b-col sm="10">
                    <div>
                        <b-form-input v-model="feedback.author" type="text" debounce="500"></b-form-input>
                    </div>
                </b-col>
            </b-row>

            <b-row class="mt-2">
                <b-col sm="2">
                    <label for="textarea-no-auto-shrink">Message</label>
                </b-col>
                <b-col sm="10">
                    <b-form-textarea
                            v-model="feedback.content"
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
        <div style="padding: 50px">
            <h2>You can also write us email at</h2>
            <p style="padding-left: 10px"> <i>falahchemnitzteam@gmail.com</i></p>

        </div>
    </div>
</template>

<script>
    import HeaderComponent from "../components/HeaderComponent";
    export default {
        name: "Contact.vue",
        components:{HeaderComponent},
        data(){
            return{
                btn:{
                    postComment:'Post your message'
                },
                feedback:{
                    author:'',
                    content:'',
                },
            }
        },
        methods:{
            async postComment(){
                this.btn.postComment="Posting...."
                await this.axios.post("/api/feedback", {
                    feedbackText: this.feedback.content,
                    feedbackBy:this.feedback.author,
                });
                this.btn.postComment="Post Another message"
            }}
    }
</script>

<style scoped>

</style>
