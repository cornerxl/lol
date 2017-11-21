<template>
  <div class="content vbCon" ref="bgColor">
    <div class="info">
      <span class="vbName">{{name}}</span>
      <span class="spell" v-if="spell">[&nbsp;{{spell}}&nbsp;]</span>
      <span class="des">{{des}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "valueBookIntroCon",
    data() {
      return {
        color: ['#71D0B0', '#FFCD46', '#F37474', '#B183FF', '#60A4FF', '#F282B9', "#E64847"],
        name: "",
        spell: "",
        des: ""
      }
    },
    mounted: function () {
      var num = Math.ceil(Math.random() * 6);
      this.$refs.bgColor.style.backgroundColor = this.color[num];
      this.$ajax.get('/api/valueBook/getOneVB', {params: {id: this.$route.query.id}}, {emulateJSON: true}).then((res) => {
        this.name = res.data[0].name;
        this.spell = res.data[0].spell;
        this.des = res.data[0].des;
      }).catch((res) => {
        console.log(res);
      });
    }
  }
</script>

<style scoped>

  .content {
    width: 100%;
    position: fixed;
    margin-top: 41px;
  }

  .vbCon {
    top: 0;
    bottom: 0;
  }

  .vbiBgColor {
    background-color: #37C84D;
  }

  .content .info {
    width: 88%;
    margin: 60px auto 0;
    padding: 10px 3%;
    background-color: #FFFFFF;
    border-radius: 8px;
    text-align: justify;
  }

  .content .info .vbName {
    display: block;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .content .info .spell {
    display: block;
    font-size: 14px;
    line-height: 21px;
  }

  .content .info .des {
    display: block;
    margin-top: 5px;
    font-size: 14px;
    color: #999;
    text-indent: 24px;
  }
</style>
