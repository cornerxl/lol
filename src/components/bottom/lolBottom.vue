<template>
  <div class="bottom">
    <div class="advice" v-if="showOrHide">
      <span>建议&合作</span>
      <span>xiaoliliswust@outlook.com</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LolBottom',
    data(){
      return{
        showOrHide: true
      }
    },
    methods: {
      fetchRoute() {
        if(this.$route.path !== "/hero"){
          this.showOrHide = false;
        }else {
          this.showOrHide = true;
        }
      },
    },
    created() {
      this.fetchRoute();
    },
    watch: {
      "$route": "fetchRoute"
    }
  }
</script>

<style>
  .bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 10px;
  }
  .bottom .advice {
    position: absolute;
    bottom: 10px;
    width: 100%;
  }

  .bottom .advice span {
    width: 100%;
    display: block;
    text-align: center;
    font-size: 12px;
    color: #999;
  }
</style>
