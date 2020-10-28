<template>
    <div id="editor" class="editor-wrapper">
        <div class="container">
            <b-button variant="success" @click="preview"> {{ btnTxt }}</b-button>
            <b-button variant="danger" @click="postBlog">Post Blog</b-button>
        </div>
        <br><br>
        <div v-if="showPreview">
            <blog-single
                    :thumbnail="blog.thumbnail"
                    :blog="blog"
            ></blog-single>
        </div>

        <div v-if="!showPreview">
            <b-form-input v-model="blog.blogTitle" placeholder="Blog Title"></b-form-input>
            <br>
            <b-form-input v-model="blog.blogWriter" placeholder="Blog Author"></b-form-input>

            <b-form-select v-model="blog.blogCategoryId" :options="options" class="mt-3"></b-form-select>
            <br><br>
            <b-form-file
                    v-model="blog.thumbnail"
                    :state="Boolean(blog.thumbnail)"
                    placeholder="Choose a image or drop it here for thumbnail"
                    drop-placeholder="Drop file here..."
            ></b-form-file>
            <br><br>
            <vue-editor v-model="blog.blogText"></vue-editor>
        </div>
    </div>
</template>

<script>
    import {VueEditor} from 'vue2-editor'
    import BlogSingle from "./BlogSingle";

    export default {
        name: 'Editor',
        data() {
            return {
                binaryString: "",
                options: [
                    {value: null, text: 'Please select a category'},
                    {value: '1', text: 'Social'},
                    {value: '2', text: 'Technical'},
                    {value: '3', text: 'Food'},
                    {value: '4', text: 'Life in Chemnitz'}
                ],
                blog: {
                    blogTitle: '',
                    blogWriter: '',
                    blogText: '',
                    blogCategoryId: null,
                    thumbnail: null,
                },
                showPreview: false,
                btnTxt: "Preview Blog",
            };
        },

        props: {
            content: String
        },

        computed: {},

        methods: {
            preview() {
                if (this.showPreview === true) {
                    this.btnTxt = "Preview Blog"
                } else {
                    this.btnTxt = "Back to editor"
                }
                this.showPreview = !this.showPreview;
            },
            postBlog() {
                let blogData = {
                    blogTitle: this.blog.blogTitle,
                    blogWriter:this.blog.blogWriter,
                    blogText:this.blog.blogText,
                    blogCategory:{
                        blogCategoryId:this.blog.blogCategoryId
                    }
                }
                blogData = JSON.stringify(blogData)
                let formData = new FormData()
                formData.append('thumbnail', this.blog.thumbnail)
                formData.append('blog', blogData)

                this.axios.post('/api/blog', formData, {   //35.246.255.152:8080
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                this.$router.push({
                    name: 'Blog',
                    params: {categoryId: this.blog.blogCategoryId}
                })

            }
        },
        components: {
            BlogSingle,
            VueEditor
        }
    }
</script>
<style scoped>
    #editor {
        padding: 20px;
    }

</style>
