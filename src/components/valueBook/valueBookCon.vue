<template>
  <div class="content vbCon">
    <div class="vbContainer">
      <router-link v-for="(item, index) in vbArr" :key="item.id" :to="{name: 'valueBookIntro',query:{id: item.id}}" class="vbArr"  v-bind:class="{marRight: (index+1)%3!==0, matTop: index>2}">{{item.name}}</router-link>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "valueBookCon",
    data(){
      return {
        vbArr: ""
      }
    },
    mounted:function () {
      this.$nextTick(function () {
        this.$ajax.get('/api/valueBook/getVB').then((result) => {
            this.vbArr = result.data;
          }).catch((result)=>{
          console.log(result);
        });
      });
    }
  }
</script>

<style scoped>

  .clear {
    clear: both;
  }

  .vbContainer {
    width: 94%;
    margin: 0 auto;
    padding: 10px 0;
  }
  .vbCon {
    width: 100%;
    background-color: #EFEFEF;
    margin-top: 41px;
  }
  .vbContainer a.vbArr {
    width: 32%;
    height: 60px;
    text-decoration: none;
    color: #000;
    background-color: #FFFFFF;
    float: left;
    text-align: center;
    line-height: 60px;
    border-radius: 8px;
    box-shadow: 0 0 2px #EEEEEE;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .vbContainer .marRight {
    margin-right: 2%;
  }

  .vbContainer .marTop {
    margin-top: 10px;
  }
</style>
