<template>
  <div class="goods">
    <div class="goodType">
      <div class="oneGoodType" v-for="(item,index) in goodType" :class="{marLeft: index>0}" @click="goodTypeClick(index,$event)">
        <span class="circle" :class="{activeBgColor: index===indexs}"></span>
        <span class="goodTypeName">{{item.goodTypeName}}</span>
      </div>
    </div>
    <div class="oneGoodTypeList">
      <router-link v-for="(item,index) in oneGoodTypeList" :key="item.goodId" :to="{name:'goodDetail',params:{goodId:item.goodId}}" class="oneGood" :class="{marTop: index>2,marLeft: index%3!==0}">
        <img :src="item.imgUrl" alt="">
        <span>{{item.name}}</span>
      </router-link>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'goods',
    data() {
      return {
        indexs: 0,
        goodType: [],
        oneGoodTypeList: []
      }
    },
    methods: {
      goodTypeClick:function (index,event) {
        this.indexs = index;
        this.$ajax.get("/api/goods/getOneGoodTypeList",{params:{goodTypeId: (index + 1)}}, {emulateJSON: true}).then((result) => {
          this.oneGoodTypeList = result.data;
        }).catch((result) => {
          console.log(result);
        });
      }
    },
    mounted: function () {
      //获取所有物品类型
      this.$ajax.get("/api/goods/getAllGoodType", {emulateJSON: true}).then((result) => {
        this.goodType = result.data;
      }).catch((result) => {
        console.log(result);
      });
      //获取一类物品
      this.$ajax.get("/api/goods/getOneGoodTypeList",{params:{goodTypeId: (this.indexs + 1)}}, {emulateJSON: true}).then((result) => {
        this.oneGoodTypeList = result.data;
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
  .goods {
    width: 100%;
    margin-top: 83px;
    background-color: #EEE;
    padding: 10px 0 ;
  }

  .goods .goodType {
    width: 94%;
    height: 40px;
    margin: 0 auto;
  }

  .goods .goodType .oneGoodType {
    float: left;
    width: 15%;
    height: 26px;
    line-height: 26px;
    margin-top: 7px;
    background-color: #FFF;
    border-radius: 15px;
    padding: 0 1.5%;
  }

  .goods .goodType .marLeft {
    margin-left: 2.5%;
  }

  .goods .goodType .oneGoodType .circle {
    display: block;
    float: left;
    width: 10px;
    height: 10px;
    margin: 8px 0 0 ;
    background-color: #71D0B0;
    border-radius: 5px;
  }

  .goods .goodType .oneGoodType .activeBgColor{
    background-color: #CD6262;
  }

  .goods .goodType .oneGoodType .goodTypeName {
    display: block;
    font-size: 16px;
    color: #666;
    text-align: center;
  }

  .goods .oneGoodTypeList {
    width: 94%;
    margin: 10px auto 0;
  }

  .goods .oneGoodTypeList .oneGood {
    width:32%;
    background-color: #fff;
    height: 90px;
    float: left;
    border-radius: 8px;
    padding: 10px 0;
    text-align: center;
    text-decoration: none;
  }

  .goods .oneGoodTypeList .marTop {
    margin-top: 10px;
  }

  .goods .oneGoodTypeList .marLeft {
    margin-left: 2%;
  }

  .goods .oneGoodTypeList .oneGood img {
    width: 64px;
    height: 64px;
    display: block;
    margin: 0 auto;
    border-radius: 50%;
  }

  .goods .oneGoodTypeList .oneGood span {
    display: block;
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 21px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

</style>
