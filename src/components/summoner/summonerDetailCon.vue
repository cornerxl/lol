<template>
  <div class="content vbCon" ref="bgColor">
    <div class="info">
      <div class="introTop">
        <img :src="summoner.img" alt="">
        <div class="introTopRight">
          <span class="name">{{summoner.name}}</span>
          <span class="level">召唤师等级：{{summoner.level}}级</span>
        </div>
      </div>
      <div class="introBottom">
        <span class="wordIntro">{{summoner.intro}}</span>
        <img :src="summoner.introImgUrl" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        color: ['#71D0B0','#FFCD46','#F37474','#B183FF','#60A4FF','#F282B9',"#E64847"],
        summoner: {
          img: "",
          name: "",
          level: "",
          intro: "",
          introImgUrl: ""
        }
      }
    },
    mounted: function () {
      var num = Math.ceil(Math.random()*6);
      this.$refs.bgColor.style.backgroundColor = this.color[num];
      this.$ajax.get("/api/summoner/getOneSummoner",{params: {summonerId: this.$route.params.summonerId}},{emulateJSON: true}).then((result) => {
        this.summoner.img = result.data[0].imgUrl;
        this.summoner.name = result.data[0].name;
        this.summoner.level = result.data[0].level;
        this.summoner.intro = result.data[0].intro;
        this.summoner.introImgUrl = result.data[0].introImgUrl;
      }).catch((result) => {
         console.log(result);
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

  .info {
    width: 88%;
    margin: 20px auto 0;
    background-color: #FFF;
    border-radius: 8px;
    padding: 10px 3%;
  }

  .info .introTop{
    width: 100%;
    height: 80px;
  }

  .info .introTop img {
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-top: 8px;
    float: left;
  }

  .info .introTop .introTopRight {
    margin-left: 74px;
    height: 50px;
    padding: 15px 0;
  }

  .info .introTop .introTopRight .name {
    width: 200px;
    font-size: 18px;
    line-height: 27px;
    display: block;
    font-weight: 600;
  }

  .info .introTop .introTopRight .level {
    display: block;
    font-size: 14px;
    color: #666;
    margin-top: 5px;
  }

  .info .introBottom {
    width: 100%;
  }

  .info .introBottom .wordIntro {
    width: 100%;
    display: block;
    text-align: justify;
    font-size: 15px;
    color: #333;
  }

  .info .introBottom img {
    margin-top: 10px;
    width: 100%;
    display: block;
  }
</style>
