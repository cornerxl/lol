<template>
  <div class="container">
    <lol-header></lol-header>
    <hero-detail-con></hero-detail-con>
    <lol-bottom></lol-bottom>
  </div>
</template>

<script>
  import LolHeader from "./header/lolHeader.vue";
  import HeroDetailCon from "./hero/heroDetailCon.vue";
  import LolBottom from "./bottom/lolBottom.vue";
  export default {
    components: {
      LolHeader,
      HeroDetailCon,
      LolBottom
    },
    name: 'lol'
  }
</script>
