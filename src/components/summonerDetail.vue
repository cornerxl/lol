<template>
  <div class="container">
    <lol-header></lol-header>
    <summoner-detail-con></summoner-detail-con>
    <lol-bottom></lol-bottom>
  </div>
</template>

<script>
  import LolHeader from "./header/lolHeader.vue";
  import summonerDetailCon from "./summoner/summonerDetailCon.vue";
  import LolBottom from "./bottom/lolBottom.vue";
  export default {
    components: {
      LolHeader,
      summonerDetailCon,
      LolBottom
    },
    name: 'summonerDetail'
  }
</script>

<style scoped>

</style>
