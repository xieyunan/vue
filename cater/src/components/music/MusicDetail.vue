<template>
   <div>
       <!-- <h2>{{$route.params.musicId}}</h2> -->

    
        <aplayer autoplay :list="songs" :showLrc="isLrc" :float="isFloat" :volume = "vol" 
        :music="{
            title: '小城瑶',
            artist: '林玉涵',
            src: 'http://111.41.50.149/amobile.music.tc.qq.com/C4000015hVRK3Z4uAL.m4a?guid=7184336840&vkey=D0CFD7A042AF14D3B0703A582B6CF418082B5E6C55AC81E46E29B81C59DFF62A19577E7B839EF37E9C277F0E38616948D11F23AD0D0CE225&uin=0&fromtag=66',
            pic: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003K8jLb057czD.jpg?max_age=2592000',
            lrc: 'https://api.bzqll.com/music/netease/lrc?key=579621905&id=526307800'
        }"
        />
        <div class="show" v-show="show">
             <img src="../../assets/img/f6b4a63596f56f2bc77d4fb467cab85c160911.gif" />
        </div>
   </div> 
</template>

<script>
import Aplayer from 'vue-aplayer'
import Axios from 'axios'
export default {
    components: {
        Aplayer
    },
    data(){
        return{
            songs:[],
            isLrc:false,
            isFloat:true,
            vol:0.8,
             show:false,
            
        }
    },
    mounted() {
          this.show = true;
        let url='/static/data/musicdata.json';
        let list = [];
        Axios.get(url).then(res =>{
                list = res.data.musicData;
                list.forEach(tune => {
                    this.songs.push({
                        title:tune.title,
                        artist:tune.author,
                        src:tune.src,
                        pic:tune.musicImgSrc,
                        lrc:tune.lrc,
                    });
                    this.isLrc=true;//歌词
                    this.isFloat=false;
                }); 
                 this.show = false   
            }).catch()
      
    },
    props:['shoeLrc']
}
</script>

<style scoped>
.show{width: 90%;margin: 0 auto;}
.music{width: 90%;height: 2rem;margin: 1rem auto;border: 1px solie red;}
</style>

