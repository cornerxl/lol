<template>
  <div class="container">
    <lol-header></lol-header>
    <value-book-detail-con></value-book-detail-con>
    <lol-bottom></lol-bottom>
  </div>
</template>

<script>
  import LolHeader from "../components/header/lolHeader.vue";
  import ValueBookDetailCon from "../components/valueBook/valueBookDetailCon.vue";
  import LolBottom from "../components/bottom/lolBottom.vue";
  export default {
    components: {
      LolHeader,
      ValueBookDetailCon,
      LolBottom
    },
    name: 'lol'
  }
</script>
