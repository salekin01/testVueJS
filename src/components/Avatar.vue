<template>
    <div class="py-5 text-center text-info background-info" style="">
        <div class="container">
            <div class="row">
                <div class="mx-auto col-md-12">
                    <h1 class="mb-3" contenteditable="false">Meet our team</h1>
                </div>
            </div>

            <div class="row">

                    <div class="col-lg-4 col-md-6 p-4"   v-for="(profile,index) in profileList" :key="index">
                        <img class="img-fluid d-block mb-3 mx-auto rounded-circle" alt="Card image cap" width="450"
                             :src="profile.img">
                        <h4> <b>{{profile.name}}</b> </h4>
                        <p class="mb-0">{{profile.role}}</p>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            profileList:Array
        },
        data(){
            return{

            }

        }
    }
</script>

<style>
    .background-info {
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, .75), rgba(0, 0, 0, .75));
        background-position: center center, center center;
        background-size: cover, cover;
        background-repeat: repeat, repeat
    }
</style>
