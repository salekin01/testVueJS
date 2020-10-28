<template>
  <div class="about">
    <header-vue></header-vue>
    <avatar :profile-list="profile"></avatar>
  </div>
</template>


<script>
  import avatar from '../components/Avatar'
  import headerVue from "../components/HeaderComponent";

  export default {
    components:{ avatar,headerVue},
    data(){
      return{
        profile:{
          amin:{
            name:"Amin Ismail Fischer",
            img:require ("@/assets/amin.gif"),
            role:"Management & Finance"
          },
          aquib:{
            name:"Aquib Rashid",
            img:require ("@/assets/aquib.gif"),
            role:"Editing & Marketing"
          },
          hassan:{
            name:"Hassan Banayeem",
            img:require ("@/assets/hassan.gif"),
            role:"Project Management"
          },
          ibrahim:{
            name:"Ibrahim Al Naser",
            img:require ("@/assets/ibrahim.gif"),
            role:"Marketing Lead"
          },
          mobasser:{
            name:"Mobasser Ahmed",
            img:require ("@/assets/mobasser.gif"),
            role:"DevOps & Marketing"
          },
          salikin:{
            name:"Sirajus Salekin Prodhan",
            img:require ("@/assets/salikin.gif"),
            role:"DevOps & Marketing"
          },
          sonya:{
            name:"Dr. Sonya Bradai",
            img:require ("@/assets/sonya.gif"),
            role:"Editor in Chief",
          },
          sarah:{
            name:"Sarah Muzaffar",
            img:require ("@/assets/sarah.gif"),
            role:"Marketng & Editing"
          },
          sabreen:{
            name:"Sabrine Khriji",
            img:require ("@/assets/sabreen.gif"),
            role:"Project Management Lead",
          },
          hannan:{
            name:"Hanen Nouri",
            img:require ("@/assets/hannan.gif"),
            role:"Project Management",
          },

          slim:{
            name:"Dr. Slim Naifar",
            img:require ("@/assets/slim.gif"),
            role:"Project Management"
          },
          sohan:{
            name:"Muhammad Jahan Ali Shohan",
            img:require ("@/assets/sohan.gif"),
            role:"Marketing"
          },
        }
      }
    }
  }
</script>

