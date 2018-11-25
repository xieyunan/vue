<template>
   <div>
        <div class="rec-main clearfix">
           <ul>
              <li v-for="(recom,index) in list" :key="index">
                 <!-- <img :src="recom.bg" /> -->
                 <video class="vide" :src="recom.vurl" controls></video>
                 <p>{{recom.vn}}</p>
                 <p>{{recom.vt}}</p>
              </li>
           </ul>
        </div> 
   </div>
</template>
<script>
import Aplayer from 'vue-aplayer'
import Axios from 'axios'
import CommonHeader from '../common/Header'
import CommonFooter from '../common/Footer'

export default {
     components: {
        CommonHeader,
        CommonFooter,
        Aplayer
    },
    data(){
         return {
            list: []
        }
    },
    mounted() {
        let url='/static/data/recomList.json';
        
        Axios.get(url).then(res =>{
               this.list = res.data.RecomList;
                console.log(this.list);
        }
        ).catch();
    },
    props:['shoeLrc']
}
</script>
<style scoped>
@import url('../../assets/css/common.css');
.rec-main{width: 100%;background: #F5F5F5;padding: 0.5rem 0;}
.rec-main ul{width: 90%;margin: 0 auto;}
.rec-main li{width: 45%;margin:2%;float: left;}
.rec-main li img{border-radius: 3px;box-shadow: 1px 1px 2px 2px #ccc; }
.rec-main li p{width: 100%;color: #333;font-size: 12px;margin-top:5px;}
.vide{width: 100%;}
</style>

