import Vue from 'vue'
import Router from 'vue-router'
import Lol from '../components/lol.vue'
import Hero from "../components/hero/hero.vue"
import Goods from "../components/goods/goods.vue"
import Summoner from "../components/summoner/summoner.vue"
import ValueBook from '../components/valueBook.vue'
import ValueBookIntro from '../assets/valueBookDetail.vue'
import HeroList from '../components/heroList.vue'
import HeroDetail from '../components/heroDetail.vue'
import GoodDetail from '../components/goodDetail.vue'
import SummonerDetail from  '../components/summonerDetail.vue'
Vue.use(Router)

export default new Router({
  // linkActiveClass: 'active',
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'lol',
      component: Lol,
      redirect: '/hero',
      children: [
        {
          path: "/hero",
          name: "hero",
          component: Hero
        },{
          path: "/goods",
          component: Goods,
          // redirect: "/goods/goodType/1",
          // children: [
          //   {
          //     path: "/goods/goodType/:goodTypeId",
          //     name: "goodList",
          //     component: GoodList
          //   }
          // ]
        },{
          path: "/summoner",
          component: Summoner
        }
      ]
    },{
      path: "/valueBook",
      name: "valueBook",
      component: ValueBook
    },{
      path: "/valueBookIntro",
      name: "valueBookIntro",
      component: ValueBookIntro
    },{
      path: "/heroList/:heroTypeId",
      name: "heroList",
      component: HeroList
    },{
      path: "/heroDetail/:heroId",
      name: "heroDetail",
      component: HeroDetail
    },{
      path: "/goodDetail/:goodId",
      name: "goodDetail",
      component: GoodDetail
    },{
      path: "/summonerDetail/:summonerId",
      name: "summonerDetail",
      component: SummonerDetail
    }
  ]
})
