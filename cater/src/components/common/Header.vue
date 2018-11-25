<template>
    <div class="header">
        <div class="top">
            <img src="/static/img/logo.png" class="logo" @click="ret">

                <div class="dl" @click="denglu"></div>

            <div class="sel" @click="select"></div>
        </div>
        <!-- <ul class="list">
            <li>
                <slot name="list">猫耳</slot>
            </li>
        </ul> -->
        <div class="list">
           <ul>
                <li :style="{'border-bottom':bdb}">
                    <router-link to="/music/musicList">音单</router-link> 
                </li>
                <li :style="{'border-bottom':bdb2}">
                    <router-link to="/recom" >推荐</router-link>
                </li>
                <li :style="{'border-bottom':bdb3}">
                    <router-link to="/list" >分类</router-link>
                </li>
           </ul>
       </div>
    </div>
</template>

<script>
export default {
    props:['bdb','bdb2','bdb3'],
    methods:{
        select(){
            this.$router.push('/select')
        },
        denglu(){
            this.$router.push('/denglu')
        }, 
        ret(){
            this.$router.push('/music/musicList')
        },
    }
}
</script>

<style scoped>
.header{width: 100%; height: 2rem;margin-bottom: 2px;}
.header .top{width: 100%;height: 1rem; background: #000;position: fixed;top: 0;z-index: 2; }
.top .logo{width: 103px;height: 23px;float: left;padding: 0.3rem}
.top .sel{width: 24px;height: 22px;float: right;margin-right: 20px; background :url('/static/img/sel.png') no-repeat;background-size: contain;margin-top:0.3rem;}
.top .dl{width: 24px;height: 22px;float: right;margin-right: 13px; background :url('/static/img/dl.png') no-repeat;background-size: contain;margin-top:0.3rem;}
.header .list{width:100%; height: 1rem;text-align: center;line-height: 1rem;position: absolute;top: 1rem;border-bottom: 1px solid #E0E0E0;background: #fff;}
.list li{width: 17%;text-align: center;margin-left: 13%;color: #000;float: left;height: 1rem;font-size: 16px;}
.list li a{color: #666;outline: none;}
.list li a.router-link-active{color: #000; } 
</style>

