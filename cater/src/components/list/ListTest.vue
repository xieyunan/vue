<template>
    <div class="list">
        <ul class="list-main clearfix">
            <li v-for="(list,index) in listTxt" :key="index">
                <img :src="list.src" class="pic"/>
                <p>{{list.detail}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
     data(){
        return {
            listTxt: []
        }
    },
    mounted(){
        let url = '/static/data/list.json'
        Axios.get(url).then(res => {
            this.listTxt = res.data.listTest;
            console.log(this.listTxt);
        }).catch('你的出错') 
    }
}
</script>
<style scoped>
@import url('../../assets/css/common.css');
.list{background: #F5F5F5;}
.list-main{width: 90%;margin: 0 auto;}
.list-main li{width:35%;float: left;margin: 7%;height: 2.1rem;background: #fff;text-align: center;font-size: 12px;border-radius: 5px;box-shadow: 0 1px 1px 1px #ccc;}
.list-main .pic{width:50%;height: 50%;margin-bottom: 0.1rem;margin-top: 0.3rem;}
.list-main li:last-child{margin-left: 29%;}

</style>