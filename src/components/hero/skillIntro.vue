<template>
  <div class="skill">
    <div class="skillTip"><span>技能介绍</span></div>
    <div class="skillCon">
      <div class="skillItem" v-for="(item,index) in skill.skillArr" v-bind:class="{marLeft: index>0, active: index===skill.indexs}" v-on:click="skill.clickImg(index)">
        <img :src="item.imgUrl" alt="">
      </div>
      <div class="clear"></div>
      <div class="skillIntro" v-for="(item,index) in skill.skillArr" v-if="index === skill.indexs">
        <div class="name">
          <span class="skillName">{{item.name}}</span>
          <span class="subTitle">{{item.subTitle}}</span>
        </div>
        <div class="skillDetailIntro" :class="{introMT: index > 0}">
          <span v-for="(item,sDIIndex) in skill.skillDetailIntro[index]" :class="{marTop: sDIIndex>0}">{{item}}</span>
        </div>
        <div class="skillStat" :class="{introMT: index > 0}" >
          <span v-for="item in skill.skillStat[index]">{{item}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "skillIntro",
    data(){
      return{
        skill: {
          skillArr: "",
          skillDetailIntro: [],
          skillStat: [],
          indexs: 0,
          clickImg: function (index) {
            this.indexs = index;
          }
        }
      }
    },
    mounted:function () {
      //获取技能
      this.$ajax.get("/api/hero/getSkill", {params: {heroId: this.$route.params.heroId}}, {emulateJSON: true}).then((result) => {
        this.skill.skillArr = result.data;
        this.skill.skillArr.forEach((item, index) => {
          this.skill.skillStat[index] = [];
          this.skill.skillDetailIntro[index] = [];
          var arr = item.intro.split("#");
          arr.forEach((items, indexs) => {
            if (items.indexOf("@") === 0) {
              var str = items.replace("@", '');
              this.skill.skillStat[index].push(str);
            } else {
              this.skill.skillDetailIntro[index].push(items);
            }
          });
        });
      }).catch((result) => {
        console.log(result);
      });
    }
  }
</script>

<style scoped>
  .clear{
    clear: both;
  }
  .skill {
    margin-top: 10px;
    background-color: #FFFFFF;
    padding: 0 0 10px;
  }

  .skill .skillTip {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid #EEE;
  }

  .skill .skillTip span {
    display: block;
    width: 94%;
    margin: 0 auto;
  }

  .skill .skillCon {
    width: 94%;
    margin: 10px auto 0;
  }

  .skill .skillCon .skillItem {
    float: left;
    width: 18%;
  }

  .skill .skillCon .skillItem img {
    display: block;
    width: 90%;
    border-radius: 50%;
    margin: 0 auto 5px;
  }

  .skill .skillCon .marLeft {
    margin-left: 2.5%;
  }

  .skill .skillCon .active {
    border-bottom: 4px solid #D4A93E;
  }

  .skill .skillCon .skillIntro {
    margin-top: 15px;
    text-align: justify;
  }

  .skill .skillCon .skillIntro .skillName {
    font-size: 18px;
    font-weight: bold;
    line-height: 27px;
  }

  .skill .skillCon .skillIntro .subTitle {
    line-height: 27px;
    font-size: 15px;
    color: #999;
    margin-left: 10px;
  }

  .skill .skillCon .introMT {
    margin-top: 10px;
  }

  .skill .skillCon .skillIntro .skillDetailIntro span{
    text-indent: 26px;
    display: block;
    font-size: 13px;
    color: #666;
    line-height: 20px;
  }

  .skill .skillCon .skillIntro .skillStat span{
    display: block;
    font-size: 12px;
    color: #888;
    line-height: 18px;
  }
  .skill .skillCon .skillIntro .skillDetailIntro .marTop{
    margin-top: 4px;
  }
</style>
