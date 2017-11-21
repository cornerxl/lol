<template>
  <div class="content vbCon">
    <div class="delHero">
      <img :src="heroTypeImg" alt="">
      <span class="heroTypeName">{{heroTypeName}}</span>
      <span class="heroTypeIntro">{{heroTypeIntro}}</span>
    </div>
    <div class="heroTypeCon">
      <router-link class="heroList" v-for="(item, index) in heroListArr" :key="item.heroId" :to="{name:'heroDetail',params:{heroId: item.heroId}}">
        <img class="heroImg" :src="item.imgUrl" alt="">
        <div class="name">
          <span class="heroName">{{item.name}}</span>
          <span class="heroTitle">{{item.title}}</span>
        </div>
        <img class="heroDetail" :src="item.detailImg" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "heroListCon",
    data() {
      return {
        heroTypeImg: "",
        heroTypeName: "",
        heroTypeIntro: "",
        heroListArr: ""
      }
    },
    mounted:function () {
        this.$ajax.get('/api/heroType/getOneType',{params: {heroTypeId: this.$route.params.heroTypeId}},{emulateJSON: true}).then((result) =>{
          this.heroTypeImg = result.data[0].heroTypeImg;
          this.heroTypeName = result.data[0].heroTypeName;
          this.heroTypeIntro = result.data[0].heroTypeIntro;
        }).catch((result)=>{
          console.log(result);
        });
        this.$ajax.get("/api/hero/getOneTypeList",{params: {heroTypeId: this.$route.params.heroTypeId}},{emulateJSON: true}).then((result)=>{
          this.heroListArr = result.data;
        }).catch((result)=>{
           console.log(result);
        });
    }
  }
</script>

<style scoped>
  .delHero {
    position: relative;
    width: 94%;
    height: 255px;
    margin: 0 auto;
    text-align: center;
    margin-top: 30px;
  }

  .delHero img {
    position: absolute;
    width: 120px;
    height: 120px;
    top: 40px;
    left: 50%;
    margin-left: -60px;
  }

  .delHero .heroTypeName {
    display: block;
    position: absolute;
    top: 170px;
    left: 50%;
    font-size: 16px;
    margin-left: -8px;
  }

  .delHero .heroTypeIntro {
    display: block;
    position: absolute;
    top: 196px;
    font-size: 14px;
    color: #999;
    line-height: 21px;
  }

  .heroTypeCon {
    width: 94%;
    margin: 0 3%;
    padding: 0 0 10px;
  }

  .heroTypeCon .heroList {
    position: relative;
    display: block;
    width: 100%;
    margin-top: 15px;
    height: 60px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    box-shadow: 0 0 2px #999;
  }

  .heroTypeCon .heroList .heroImg {
    display: block;
    float: left;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-left: 10px;
    margin-top: 6px;
  }

  .heroTypeCon .heroList .name {
    width: 150px;
    margin-left: 10px;
    height: 40px;
    float: left;
    padding: 10px 0;
  }
  .heroTypeCon .heroList .name .heroName {
    display: block;
    font-size: 16px;
    color: #666;
    line-height: 24px;
  }
  .heroTypeCon .heroList .name .heroTitle {
    display: block;
    font-size: 12px;
    line-height: 18px;
    color: #999;
  }

  .heroTypeCon .heroList .heroDetail {
    float: right;
    width: 32px;
    height: 32px;
    display: inline-block;
    line-height: 60px;
    margin-top: 12px;
    margin-right: 10px;
  }
</style>
