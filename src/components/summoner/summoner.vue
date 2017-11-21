<template>
  <div class="summoner">
    <div class="summonerList">
      <router-link class="oneSummoner" v-for="(item,index) in summoner" :key="item.summonerId" :class="{marLeft:index%3!==0}"
                   :to="{name:'summonerDetail',params:{summonerId: item.summonerId}}">
        <img :src="item.imgUrl" alt="">
        <span>{{item.name}}</span>
      </router-link>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'summoner',
    data() {
      return {
        summoner: []
      }
    },
    mounted: function () {
      this.$ajax.get("/api/summoner/getSummonerList").then((result) => {
        this.summoner = result.data;
      }).catch((result) => {
        console.clear(result);
      });
    }
  }
</script>

<style scoped>

  .clear{
    clear: both;
  }
  .summoner {
    width: 100%;
    margin-top: 83px;
    background-color: #eee;
  }

  .summoner .summonerList {
    width: 94%;
    margin: 0 auto;
  }

  .summoner .summonerList a {
    width: 32%;
    height: 90px;
    padding: 10px 0;
    background-color: #FFF;
    display: block;
    float: left;
    margin-top: 10px;
    text-decoration: none;
    color: #666;
    text-align: center;
  }
  .summoner .summonerList .marLeft {
    margin-left: 2%;
  }

  .summoner .summonerList a img {
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin: 0 auto;
  }

  .summoner .summonerList a span {
    display: block;
    font-size: 14px;
    line-height: 21px;
    margin-top: 5px;
  }
</style>
