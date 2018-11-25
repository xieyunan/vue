import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Music from '@/components/music/Music'
import MusicList from '@/components/music/MusicList'
import MusicDetail from '@/components/music/MusicDetail'
import Recom from '@/components/recom/Recom'
import RecomList from '@/components/recom/RecomList'
import RecomDetail from '@/components/recom/RecomDetail'
import List from '@/components/list/List'
import ListTest from '@/components/list/ListTest'
import Sel from '@/components/select/Sel'
import Dl from '@/components/select/Dl'



Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/music/musicList'
    },{
      path: '/music',
      name: 'Music',
      component: Music,
      children: [{
        path: 'musicList',
        component: MusicList
      },{
        path:'musicDetail/:index',
        component:MusicDetail
      }]
    },
    {
      path:'/list',
      name:'List',
      component:List,
      redirect: '/list/listTest',
      children: [{
        path: 'listTest',
        component: ListTest
      }]
    },{
      path:'/recom',
      name:'Recom',
      component:Recom,
      redirect: '/recom/recomList',
      children: [{
        path: 'recomList',
        component: RecomList
      },{
        path:'recomDetail',
        component:RecomDetail
      }]
    },{
      path:'/select',
      name:'Sel',
      component:Sel,
    },{
      path:'/denglu',
      name:'Dl',
      component:Dl
    }
  ]
})
