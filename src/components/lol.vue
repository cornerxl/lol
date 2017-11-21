<template>
  <div class="container">
    <lol-header></lol-header>
    <lol-content></lol-content>
    <lol-bottom></lol-bottom>
  </div>
</template>
<script>
  import LolHeader from "./header/lolHeader.vue";
  import LolContent from "./content/lolContent.vue";
  import LolBottom from "./bottom/lolBottom.vue";
  export default {
    components: {
      LolHeader,
      LolContent,
      LolBottom
    },
    name: 'lol'
  }
</script>


