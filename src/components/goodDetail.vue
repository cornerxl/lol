<template>
  <div class="container">
    <lol-header></lol-header>
    <good-detail-con></good-detail-con>
    <lol-bottom></lol-bottom>
  </div>
</template>

<script>
  import LolHeader from "./header/lolHeader.vue";
  import GoodDetailCon from "./goods/goodDetailCon.vue";
  import LolBottom from "./bottom/lolBottom.vue";
  export default {
    components: {
      LolHeader,
      GoodDetailCon,
      LolBottom
    },
    name: 'goodDetail'
  }
</script>
