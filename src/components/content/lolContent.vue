<template>
  <div class="content">
    <div class="navBar">
      <span><router-link to="/hero">英雄</router-link></span>
      <span><router-link to="/goods">物品</router-link></span>
      <span><router-link to="/summoner">召唤师技能</router-link></span>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'LolContent'
  }
</script>

<style scoped>
  .content {
    width: 100%;
    position: relative;
    margin-top: 41px;
  }

  .content .navBar {
    position: fixed;
    top: 40px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #FFFFFF;
  }

  .content .navBar span {
    display: block;
    float: left;
    text-align: center;
    width: 33.3%;
  }

  .content .navBar span a {
      text-decoration: none;
      color: #000000;
      display: inline-block;
      width: 80%;
    }

  .router-link-active {
    color: #D4A93E;
    border-bottom: 3px solid #D4A93E;
  }
</style>
