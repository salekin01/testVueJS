<template>
  <div class="home">
    <vueheader></vueheader>
    <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="2000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
    >
      <b-carousel-slide :img-src="banners.img1"></b-carousel-slide>
      <b-carousel-slide :img-src="banners.img2"></b-carousel-slide>
      <b-carousel-slide :img-src="banners.img3"></b-carousel-slide>
<!--      <b-carousel-slide>-->
<!--        <template v-slot:img>-->
<!--          <img-->
<!--                  class="d-block img-fluid w-100"-->
<!--                  width="1024"-->
<!--                  height="480"-->
<!--                  src="http://picsum.photos/1024/480/?image=55"-->
<!--                  alt="image slot"-->
<!--          >-->
<!--        </template>-->
<!--      </b-carousel-slide>-->
    </b-carousel>

    <div id="feature-blog" class="container sections">
      <b-card-group deck>
      <b-card
              title="Charity Week"
              :img-src="banners.img1"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
      >
        <b-card-text>
          Charity Week is young Muslim students’ initiative around the world that work together for a better world by spending a week collecting donations to benefit orphans and needy children around the world.</b-card-text>
        <b-button @click="showMsgOk" variant="primary">Continue reading</b-button>
      </b-card>

      <b-card
              title="Charity Week"
              :img-src="banners.img1"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
      >
        <b-card-text>
          Charity Week is young Muslim students’ initiative around the world that work together for a better world by spending a week collecting donations to benefit orphans and needy children around the world.</b-card-text>
        <b-button @click="showMsgOk" variant="primary">Continue reading</b-button>
      </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import vueheader from '@/components/HeaderComponent.vue'


export default {
  name: 'Home',
  components: {
    vueheader
  },

  data() {
    return {
      banners:{
        img1:require ("@/assets/banner1.jpeg"),
        img2:require ("@/assets/banner2.jpeg"),
        img3:require ("@/assets/banner3.jpeg")
      },
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
    showMsgOk() {
      const h = this.$createElement
      // Using HTML string
      const titleVNode = h('div', { domProps: { innerHTML: 'Title from <i>HTML<i> string' } })
      // More complex structure
      const messageVNode = h('div', { class: ['foobar'] }, [
        h('b-img', {
          props: {
            src: this.banners.img1,
            thumbnail: true,
            center: true,
            fluid: true
          }
        }),

        h('p', { class: ['text-center'] }, [
          'Charity Week is young Muslim students’ initiative around the world that work together for a better world by spending a week collecting donations to benefit orphans and needy children around the world. It started in 2000 in UK, 2005 in Germany and since 2016 in Chemnitz. The aim is to inspire young people to become active, socially engaged and united. Yearly, new projects for orphans and needy children focusing in healthcare, emergency (war or environmental disaster) and education. Stay tuned for 2020 doe a special ONLINE CW!!\n' +
          'Want to know more about our projects, Visit:  ',
        ]),
        h('b-link', {
          props:{
            href:'bla',
            rel: 'i dnt'
          }
        })

      ])
      // We must pass the generated VNodes as arrays
      this.$bvModal.msgBoxOk([messageVNode], {
        title: [titleVNode],
        buttonSize: 'sm',
        centered: true, size: 'xl'
      })
    }
  }
}
</script>
<style scoped>
 .sections{
   padding-top: 30px;
 }
</style>
