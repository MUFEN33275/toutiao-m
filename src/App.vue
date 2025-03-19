<template>
   <div>
      <!-- 路由的出口 -->
     <router-view></router-view>
     <Index></Index>
   </div>
</template>
<script>
import Index from './views/login/index.vue'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    Index
  }
}
</script>
<style lang="less">

</style>
