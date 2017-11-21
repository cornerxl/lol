<template>
  <div class="header">
    <div class="headerLeft">
      <img class="closeImg" src="../../../static/headerImg/close.png">
      <span>{{headerTxt}}</span>
    </div>
    <div class="headerMore">
      <span class="fCircle"></span>
      <span class="sCircle"></span>
      <span class="fCircle"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LolHeader',
    data () {
      return {
        headerTxt: 'lol图鉴'
      }
    },
    methods: {
      fetchData() {
        if(this.$route.path === "/valueBook"){
          this.headerTxt = "英雄百科";
        }else if(this.$route.path.indexOf("/valueBookIntro")>=0){
          this.headerTxt = "术语宝典详情";
        }else if(this.$route.path.indexOf("/heroList")>=0){
          this.headerTxt = "英雄列表";
        }else if(this.$route.path.indexOf("/heroDetail")>=0){
          this.headerTxt = "英雄详情";
        }else if(this.$route.path.indexOf("/goodDetail")>=0){
          this.headerTxt = "物品详情";
        }else if(this.$route.path.indexOf("/summonerDetail")>=0){
          this.headerTxt = "召唤师详情";
        }
      },

    },
    created() {
      this.fetchData();
    },
    watch: {
      '$route': "fetchData"
    }
  }
</script>

<style>
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #F0F0F0;
    z-index: 5;
    background-color: #FFFFFF;
  }
  .header .headerLeft {
    float: left;
    margin-left: 3%;
    height: 40px;
    line-height: 40px;
  }

  .header .headerLeft .closeImg {
    display: block;
    float: left;
    width:28px;
    height:28px;
    margin-top: 6px;
  }

  .header .headerLeft span {
    font-size: 18px;
    margin-left: 10px;
    letter-spacing: 1px;
  }

  .header .headerMore {
    float: right;
    width: 40px;
    height: 40px;
    margin-right: 3%;
  }

  .header .headerMore span {
    display: block;
    float: left;
    border-radius: 50%;
    background-color: #000000;
    margin-left: 5px;
  }

  .header .headerMore .fCircle {
    width: 4px;
    height: 4px;
    margin-top: 18px;
  }

  .header .headerMore .sCircle {
    margin-top: 17px;
    width: 6px;
    height: 6px;
  }
</style>
