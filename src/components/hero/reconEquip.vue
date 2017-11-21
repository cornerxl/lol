<template>
  <div class="reconEquip">
    <div class="reTip"><span>推荐装备</span></div>
    <div class="reIntro">
      <div class="reMap">
        <span v-for="(item, index) in reconEquip.map" :class="{active: index === reconEquip.index}"
              v-on:click="clickMapName(index)">{{item.name}}</span>
      </div>
      <div class="equip" ref="equip">
        <div class="equipList" v-for="(item,index) in reconEquip.equipMap" v-if="item!==null">
          <span class="equipName" v-for="items in item[0]">{{items.name}}</span>
          <div class="equipImg" :style="{width: reconEquip.equipImgWidth + 'px'}">
            <router-link v-for="(items, index) in item[1]" :key="items.goodId" :to="{name: 'goodDetail',params: {goodId: items.goodId}}">
              <img :src="items.imgUrl" alt="">
            </router-link>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "reconEquip",
    data() {
      return {
        reconEquip: {
          index: 0,
          map: [
            {name: '召唤师峡谷'},
            {name: '极地大乱斗'}
          ],
          equipMap: [],
          equipWidth: "",
          equipImgWidth: ""
        }
      }
    },
    methods: {
      clickMapName: function(index)  {
        this.reconEquip.index = index;
        this.reconEquip.equipMap = "";
        this.$ajax.get('/api/goods/getEquip',{params: {heroId: this.$route.params.heroId,mapId: (index+1)}},{emulateJSON: true}).then((result) => {
          this.reconEquip.equipMap = result.data;
        }).catch((result) => {
          console.log(result);
        });
      }
    },
    mounted: function () {
      //动态设置装备img宽度
      this.reconEquip.equipWidth = this.$refs.equip.getBoundingClientRect().width;
      var equipNameWidth = '68px';
      this.reconEquip.equipImgWidth = parseInt(this.reconEquip.equipWidth) - parseInt(equipNameWidth) - parseInt(5);
      this.$ajax.get('/api/goods/getEquip',{params: {heroId: this.$route.params.heroId,mapId: (this.reconEquip.index+1)}},{emulateJSON: true}).then((result) => {
        this.reconEquip.equipMap = result.data;
      }).catch((result) => {
        console.log(result);
      });
    }
  }
</script>

<style>
  .clear {
    clear: both;
  }
  .reconEquip {
    margin-top: 10px;
    background-color: #FFFFFF;
  }

  .reconEquip .reTip {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid #EEE;
  }

  .reconEquip .reTip span {
    display: block;
    width: 94%;
    margin: 0 auto;
  }

  .reconEquip .reIntro {
    width: 94%;
    margin: 0 auto;
    padding: 10px 0
  }

  .reconEquip .reIntro .reMap {
    width: 100%;
    height: 30px;
  }

  .reconEquip .reIntro .reMap span {
    display: block;
    float: left;
    width: 50%;
    height: 30px;
    text-align: center;
    font-size: 18px;
    color: #333;
  }

  .reconEquip .reIntro .reMap .active {
    border-bottom: 4px solid #D4A93E;
  }

  .reconEquip .reIntro .equip {
    margin-top: 10px;
  }

  .reconEquip .reIntro .equipList {
    width: 100%;
    height: 60px;
  }
  .reconEquip .reIntro .equipList .equipName {
    width: 68px;
    height: 60px;
    line-height: 60px;
    color: #338C7A;
    display: block;
    float: left;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 600;
  }

  .reconEquip .reIntro .equipList .equipImg {
    float: right;
    height: 60px;
    line-height: 60px;
  }

  .reconEquip .reIntro .equipList .equipImg a {
    display: block;
    width: 32%;
    height: 60px;
    float: left;
  }

  .reconEquip .reIntro .equipList .equipImg a img{
    display: block;
    width: 48px;
    height: 48px;
    margin: 6px auto 0;
    border-radius: 50%;
  }
</style>
