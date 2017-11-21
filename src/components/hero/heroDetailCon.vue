<template>
  <div class="content vbCon hdContainer">
    <div class="heroTop">
      <div class="heroImg">
        <img :src="heroSkinImg" alt="">
      </div>
      <!--英雄类型和名称的盒子-->
      <div class="heroTAndN">
        <div class="heroType">
          <span v-for="(item,index) in heroType" :key="item.heroTypeId" v-bind:class="{marLeft: index>0}">{{item.heroTypeName}}</span>
        </div>
        <div class="name">
          <span class="heroTitle">{{heroTitle}}</span>
          <span class="heroName">{{heroName}}</span>
        </div>
      </div>
      <div class="dataInfo">
        <div class="phyAtt" ref="phyAtt">
          <span class="phyAttName" ref="spanWidth">物理攻击</span>
          <div class="prograss" v-bind:style="{width:dataInfo.proWidth + 'px'}">
            <span v-bind:style="{width: dataInfo.phyAtt,height: '10px'}"></span>
          </div>
        </div>
        <div class="magAtt">
          <span class="magAttName">魔法攻击</span>
          <div class="prograss" v-bind:style="{width:dataInfo.proWidth + 'px'}">
            <span v-bind:style="{width: dataInfo.magAtt,height: '10px'}"></span>
          </div>
        </div>
        <div class="defCap">
          <span class="defCapName">防御能力</span>
          <div class="prograss" v-bind:style="{width:dataInfo.proWidth + 'px'}">
            <span v-bind:style="{width: dataInfo.defCap,height: '10px'}"></span>
          </div>
        </div>
        <div class="fitDif">
          <span class="fitDifName">上手难度</span>
          <div class="prograss" v-bind:style="{width:dataInfo.proWidth + 'px'}">
            <span v-bind:style="{width: dataInfo.fitDif,height: '10px'}"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="heroBG">
      <div class="heroBGTip"><span>英雄背景</span></div>
      <div class="heroBGIntro" ref="heroBGIntro" :class="{heroBGIntroH: readMore}">
        <p v-for="(item,index) in heroBg" :style="{marTop: index>2}">{{item}}</p>
      </div>
      <div class="readMore" ref="readMore" v-on:click="readMoreClick">查看更多...</div>
    </div>
    <skill-intro></skill-intro>
    <recon-equip></recon-equip>
    <use-skill></use-skill>
  </div>
</template>

<script>
  import SkillIntro from "./skillIntro.vue";
  import ReconEquip from "./reconEquip.vue";
  import UseSkill from "./userSkill.vue";
  export default {
    name: "heroDetailCon",
    data(){
      return {
        heroSkinImg: "",
        heroType: "",
        heroName: "",
        heroTitle: "",
        heroBg: [],
        readMore: false,
        dataInfo: {
          dataInfoWidth: "",
          proWidth: "",
          payAtt: "",
          magAtt: "",
          defCap: "",
          fitDif: ""
        },

      }
    },
    components: {
      SkillIntro,
      ReconEquip,
      UseSkill
    },
    methods: {
        readMoreClick: function(){
          this.readMore  = !this.readMore;
//          this.$refs.heroBGIntro.style.transitionProperty = "height";
//          this.$refs.heroBGIntro.style.transitionDuration = "500ms";
//          this.$refs.heroBGIntro.style.webkitTransitionProperty = "height";
//          this.$refs.heroBGIntro.style.webkitTransitionDuration = "500ms";
          if(this.readMore){
            this.$refs.readMore.innerText = "收起...";
          }else {
            this.$refs.readMore.innerText = "查看更多...";
          }
        }
    },
    mounted: function () {
      //动态设置dataInfo进度条宽度
      this.dataInfo.dataInfoWidth = this.$refs.phyAtt.getBoundingClientRect().width;
      var dataNameWidth = this.$refs.spanWidth.getBoundingClientRect().width;
      this.dataInfo.proWidth = parseInt(this.dataInfo.dataInfoWidth) - parseInt(dataNameWidth) - parseInt(15);
      //获取英雄详情
      this.$ajax.get("/api/hero/getHeroDetail", {params: {heroId: this.$route.params.heroId}}, {emulateJSON: true}).then((result) => {
        this.heroSkinImg = result.data[0].heroSkin;
        this.heroName = result.data[0].name;
        this.heroTitle = result.data[0].title;
        this.heroBg = result.data[0].intro.split("#");
        this.dataInfo.phyAtt = result.data[0].phyAtt + "%";
        this.dataInfo.magAtt = result.data[0].magAtt + "%";
        this.dataInfo.defCap = result.data[0].defCap + "%";
        this.dataInfo.fitDif = result.data[0].fitDif + "%";
      }).catch((result) => {
        console.log(result);
      });
      //获取英雄类型
      this.$ajax.get("/api/hero/getHeroType", {params: {heroId: this.$route.params.heroId}}, {emulateJSON: true}).then((result) => {
        this.heroType = result.data;
      }).catch((result) => {
        console.log(result);
      });

    }
  }
</script>

<style scoped>
  .clear {
    clear: both;
  }

  .content {
    width: 100%;
    margin-top: 41px;
  }

  .vbCon {
    top: 0;
    bottom: 0;
  }

  .hdContainer {
    background-color: #EEEEEE;
  }

  .heroTop {
    background-color: #FFFFFF;
  }

  .hdContainer .heroImg {
    width: 100%;
    height: 200px;
  }

  .hdContainer .heroImg img {
    width: 100%;
    height: 200px;
  }

  .heroTAndN {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100px;
    margin-top: -100px;
    background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9));
    background: -moz-linear-gradient(top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9));
    background: -o-linear-gradient(top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9));
    background: linear-gradient(top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9));
  }

  .heroTAndN .heroType,
  .heroTAndN .name {
    width: 94%;
    margin: 0 auto;
  }

  .heroTAndN .heroType {
    color: #D4A93E;
  }

  .heroTAndN .heroType span {
    display: inline-block;
    margin-top: 30px;
    font-size: 18px;
    font-weight: bold;
    line-height: 27px;
  }

  .heroTAndN .heroType span.marLeft {
    margin-left: 5px;
  }

  .heroTAndN .name .heroTitle {
    font-size: 22px;
    font-weight: 700;
    line-height: 33px;
  }

  .heroTAndN .name .heroName {
    font-size: 16px;
    color: #333;
    margin-left: 5px;
  }

  .dataInfo {
    width: 94%;
    padding: 10px 3%;
  }

  .dataInfo .phyAtt,
  .dataInfo .magAtt,
  .dataInfo .defCap,
  .dataInfo .fitDif {
    width: 100%;
    height: 30px;
  }

  .dataInfo .phyAtt .phyAttName,
  .dataInfo .magAtt .magAttName,
  .dataInfo .defCap .defCapName,
  .dataInfo .fitDif .fitDifName {
    width: 56px;
    font-size: 14px;
    color: #666;
  }

  .dataInfo .phyAtt .prograss,
  .dataInfo .magAtt .prograss,
  .dataInfo .defCap .prograss,
  .dataInfo .fitDif .prograss {
    position: relative;
    display: inline-block;
    height: 10px;
    background-color: #E0E9F0;
    margin-top: 10px;
    margin-left: 5px;
    border-radius: 5px;
  }

  .dataInfo .phyAtt .prograss span,
  .dataInfo .magAtt .prograss span,
  .dataInfo .defCap .prograss span,
  .dataInfo .fitDif .prograss span {
    position: absolute;
    z-index: 2;
    background-color: #4A98FF;
    border-radius: 5px;
  }

  .heroBG {
    width: 100%;
    margin-top: 10px;
    background-color: #FFF;
  }

  .heroBG .heroBGTip {
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #EEE;
  }

  .heroBG .heroBGTip span {
    display: block;
    width: 94%;
    margin: 0 auto;
    font-size: 20px;
    font-weight: bold;
  }

  .heroBG .heroBGIntro {
    width: 94%;
    height: 100px;
    /*transition-property: height;*/
    /*transition-duration: 2s;*/
    /*-webkit-transition-property: height;*/
    /*-webkit-transition-duration: 2s;*/
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    margin: 0 auto;
  }
  .heroBG .heroBGIntro p {
    text-align: justify;
    font-size: 13px;
    line-height: 20px;
    color: #666;
    text-indent: 26px;
  }
  .heroBG .readMore {
    width: 94%;
    margin: 0 auto;
    padding: 10px 0;
    color: #00A383;
  }

  .heroBG .heroBGIntroH {
    height: auto;
    /*transition-property: height;*/
    /*transition-duration: 2s;*/
    /*-webkit-transition-property: height;*/
    /*-webkit-transition-duration: 2s;*/
    overflow: auto;
    text-overflow: clip;
    display: block;
  }
</style>
