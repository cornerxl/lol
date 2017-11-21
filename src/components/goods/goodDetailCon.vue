<template>
  <div class="content vbCon"  ref="contentHeight" :style="{height: contentHeight + 'px'}">
    <div class="detail">
      <div class="goodTop">
        <img :src="goodDetail.imgUrl" alt="">
        <!--物品名称和类型-->
        <div class="goodNAT">
          <span class="goodName">{{goodDetail.name}}</span>
          <span class="goodType" v-for="(item,index) in goodType" :class="{marLeft: index>0}">{{item.goodTypeName}}</span>
        </div>
      </div>
      <div class="goodIntro" v-if="goodIntro.length>0">
        <span v-for="(item,index) in goodIntro" :class="{marTop: index>0}">{{item}}</span>
        <div class="clear"></div>
      </div>
      <div class="goodAddSkill" v-if="goodAddSkill.length>0">
        <span v-for="(item,index) in goodAddSkill">{{item}}</span>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "goodDetailCon",
    data() {
      return {
        color: ['#71D0B0','#FFCD46','#F37474','#B183FF','#60A4FF','#F282B9',"#E64847"],
        goodDetail: "",
        goodType: "",
        goodIntro: [],
        goodAddSkill: [],
        contentHeight: ""
      }
    },
    mounted: function () {
      var clientHeight = document.documentElement.clientHeight;
      this.contentHeight = this.$refs.contentHeight.getBoundingClientRect().height;
      if(parseInt(this.contentHeight) < parseInt(clientHeight)){
          this.contentHeight = parseInt(clientHeight) - parseInt(81);
      }
      var num = Math.ceil(Math.random()*6);
      this.$refs.contentHeight.style.backgroundColor = this.color[num];
      this.$ajax.get("/api/goods/getGoodDetail", {params: {goodId: this.$route.params.goodId}},{emulateJSON: true}).then((result) => {
        this.goodDetail = result.data[0];
        if(this.goodDetail.intro){
          this.goodIntro = this.goodDetail.intro.split("#");
        }
        if(this.goodDetail.addSkill) {
          this.goodAddSkill = this.goodDetail.addSkill.split("#");
        }
      }).catch((result) => {
         console.log(result);
      });
      this.$ajax.get("/api/goods/getGoodType", {params: {goodId: this.$route.params.goodId}},{emulateJSON: true}).then((result) => {
        this.goodType = result.data;
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
    padding: 20px 0;
    margin-top: 41px;
  }

  .content .detail{
    width: 88%;
    margin: 0 auto;
    padding: 10px 3%;
    background-color: #FFFFFF;
    border-radius: 8px;
    text-align: justify;
  }

  .content .detail .goodTop {
    width: 100%;
    height: 80px;
  }

  .content .detail .goodTop img {
    display: block;
    width: 64px;
    height: 64px;
    margin-top: 8px;
    border-radius: 50%;
    float: left;
  }
  .content .detail .goodTop .goodNAT {
    margin-left: 74px;
    height: 50px;
    padding: 15px 0;
  }
  .content .detail .goodTop .goodNAT .goodName {
    width: 200px;
    font-size: 18px;
    line-height: 27px;
    display: block;
    font-weight: 600;
  }

  .content .detail .goodTop .goodNAT .goodType {
    display: block;
    float: left;
    width: 60px;
    height: 18px;
    color: #FFF;
    line-height: 18px;
    font-size: 12px;
    letter-spacing: 2px;
    background-color: #F27475;
    text-align: center;
    border-radius: 10px;
  }

  .content .detail .goodTop .goodNAT .marLeft {
    margin-left: 5px;
  }

  .content .detail .goodIntro {
    width: 100%;
  }
  .content .detail .goodIntro span {
    display: block;
    font-size: 16px;
    color: #666;
  }
  .content .detail .goodIntro .marTop {
    margin-top: 10px;
  }
  .content .detail .goodAddSkill {
    margin-top: 20px;
  }

  .content .detail .goodAddSkill span {
    display: block;
    font-size: 14px;
    color: #999;
  }
</style>
