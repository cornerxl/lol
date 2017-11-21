<template>
  <div class="useSkill">
    <div class="useSkillTip">
      <span>使用技巧</span>
    </div>
    <div class="useSkillIntro">
      <div class="whoUse">
        <span v-for="(item,index) in whoUse" @click="whoUseClick(index)" :class="{active: index===indexs}">{{item}}</span>
      </div>
      <div class="useIntro" >
        <span v-for="(item,index) in myselfUseIntro" :class="{marTop: index>0}" v-if="indexs === 0">{{item}}</span>
        <span v-for="(item,index) in enemyUseIntro" :class="{marTop: index>0}" v-if="indexs === 1">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
 export default {
   name: "useSkill",
   data() {
     return {
       whoUse:["自己使用","敌人使用"],
       indexs: 0,
       myselfUseIntro:[],
       enemyUseIntro: [],
     }
   },
   methods: {
     whoUseClick: function (index) {
       this.indexs = index;
     }
   },
   mounted: function () {
     this.$ajax.get("/api/hero/getUseSkill",{params: {heroId:this.$route.params.heroId}}, {emulateJSON: true}).then((result) => {
        this.myselfUseIntro = result.data[0].myselfUseIntro.split("#");
        this.enemyUseIntro = result.data[0].enemyUseIntro.split("#");
     }).catch((result) => {
        console.log(result);
     });
   }
 }
</script>

<style scoped>

  .useSkill {
    width: 100%;
    margin: 10px 0 0 0 ;
    background-color: #FFF;
  }

  .useSkill .useSkillTip {
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #EEE;
  }

  .useSkill .useSkillTip span {
    display: block;
    width: 94%;
    margin: 0 auto;
    font-size: 20px;
    font-weight: bold;
  }

  .useSkill .useSkillIntro {
    width: 94%;
    margin: 0 auto;
    padding: 10px 0;
  }

  .useSkill .useSkillIntro .whoUse {
    width: 100%;
    height: 30px;
    text-align: center;
    font-size: 18px;
    color: #333;
  }

  .useSkill .useSkillIntro .whoUse span {
    display: block;
    float: left;
    width: 50%;
    height: 30px;
  }

  .useSkill .useSkillIntro .active {
    border-bottom: 4px solid #D4A93E;
  }

  .useSkill .useSkillIntro .useIntro {
    width: 100%;
    margin-top: 10px;
  }

  .useSkill .useSkillIntro .useIntro span {
    display: block;
    font-size: 13px;
    color: #666;
    line-height: 20px;
  }

  .useSkill .useSkillIntro .useIntro .marTop {
    margin-top: 5px;
  }
</style>
