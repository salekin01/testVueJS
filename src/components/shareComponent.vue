<template>
   <div>
       <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
       <social-sharing :url="getLink()" inline-template>
           <div class="container">
               <network network="facebook">
                   <b-button pill variant="info" class="btn btn-space"><i class="fa fa-fw fa-facebook"></i>Facebook</b-button>
               </network>
               <network network="linkedin">
                   <b-button pill variant="info" class="btn btn-space"><i class="fa fa-fw fa-linkedin"></i>Linkedin</b-button>
               </network>
               <network network="pinterest">
                   <b-button pill variant="info" class="btn btn-space"><i class="fa fa-fw fa-pinterest"></i>Pinterest </b-button>
               </network>
               <network network="reddit">
                   <b-button pill variant="info" class="btn btn-space"><i class="fa fa-fw fa-reddit"></i>Reddit </b-button>
               </network>
               <network network="twitter">
                   <b-button pill variant="info" class="btn btn-space"><i class="fa fa-fw fa-twitter"></i>Twitter </b-button>
               </network>
               <network network="vk">
                   <b-button pill variant="info" class="btn btn-space"><i class="fa fa-vk"></i>VKontakte</b-button>
               </network>
               <network network="weibo">
                   <b-button pill variant="info" class="btn btn-space"><i class="fa fa-weibo"></i>Weibo </b-button>
               </network>
               <network network="whatsapp" >
                   <b-button pill variant="info" class="btn btn-space"><i  class="fa fa-fw fa-whatsapp"></i>Whatsapp</b-button>
               </network>
           </div>
       </social-sharing>
   </div>
</template>

<script>
    import socialSharing from 'vue-social-sharing'
    export default {
        props:{
          contentLink: String
        },
        name: "shareComponent.vue",
        components:{
            socialSharing
        },
        methods:{
            getLink(){
                return "http://falah-chemnitz.de"+this.contentLink;
            }
        }
    }
</script>

<style scoped>
    /* Style all font awesome icons */
    .btn-space {
        margin-right: 5px;
    }
</style>
