<template>
    <div class="main">
        <div class="m-head">
            <p><span></span>全部音单</p>  
            <p id="nav">类型 &gt;</p>
        </div>
        <div class="list clearfix">
            <ul>
            <li v-for="(music, index) in musicLit" :key="index">
                <router-link :to="'/music/musicDetail/'+index">
                    <img :src="music.src" />
                </router-link>
                <p class="detail">{{music.detail}}</p>
                <p class="mus">{{music.mus}}</p>
            </li>
        </ul>
        </div>
        <div class="more clearfix">更多</div>
       
    </div>
</template>
<script>
import Axios from 'axios'
export default {
     data(){
        return {
            musicLit: [], 
        }
    },
    mounted(){
        let url = '/static/data/musicList.json'

        Axios.get(url).then(res => {
            this.musicLit = res.data.musicList

            //将数据存入vuex
            //this.$store.dispatch('actionmusicList', this.musicList);
            console.log(this.musicLit);
            
        }).catch(
           // alert("错错错是我的错")
        )
        
    }
    
}
</script>
<style scoped>
@import url('../../assets/css/common.css');

.main{width: 100%; background: #F5F5F5;position: relative;}
.m-head{width: 90%;height: 1rem;margin:auto;padding: 0.2rem 0;}
.m-head p{display: inline-block;margin-top: 10px;}
.m-head p span{display: inline-block;width: 2px;height: 19px; border:1px solid #000;border-radius: 2px;background: #000;position: relative;top:5px;margin-right: 5px}
.m-head #nav{float: right;width: 64px;height: 24px;background: #fff;border: 1px solid #ccc;border-radius: 14px;text-align: center;color: #757575;font-size: 12px;line-height: 24px;}

.main .list{width: 90%; margin: 0 auto;}
.list li{width: 50%;float: left;position: relative;}
.list li img{width: 93%;height: 100%; border-radius: 3px;}
.list li a{outline: none;}
.detail{width: 93%; color: #757575;font-size: 12px;float: left;margin: 0.1rem 0 0.2rem 0;}
.mus{color: #FAFAFB;z-index: 2;position: absolute;top: 2.2rem;right: 0.3rem;}
.more{width: 80%; height: 0.6rem; margin:auto; line-height: 0.6rem; text-align: center;background: #E0E0E0;text-align: center;color: #000;margin-top: 0.5rem;}
</style>

