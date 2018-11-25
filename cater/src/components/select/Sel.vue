<template>
    <div class="sel">
        <div class="top">
            <input type="text" placeholder="请输入搜索内容" id="txt">
            <router-link to="/music/musicList">取消</router-link> 
            
                <img src="../../assets/img/sel-1.png" class="pic" />

                <div class="denglu" @click="denglu"></div>

        </div>
        <div class="main">
            <div class="main-top">
                热门搜索
            </div>
                <ul class="main-bot">
                    <li><a href="#">魔道祖师</a></li>
                    <li><a href="#">杀破狼</a></li>
                    <li><a href="#">破云</a></li>
                    <li><a href="#">撒野</a></li>
                    <li><a href="#">残次品</a></li>
                    <li><a href="#">全职高手</a></li>
                    <li><a href="#">青云图腾</a></li>
                    <li><a href="#">帝王攻略</a></li>
                    <li><a href="#">何以歌</a></li>
                    <li><a href="#">同人音声</a></li>
                </ul>
        </div>
        <common-footer class="footer"></common-footer>
    </div>
</template>

<script>

import CommonFooter from '../common/Footer'
export default {
    components: {
        CommonFooter,
    },
    methods:{
        denglu(){
            this.$router.push('/denglu')
        }
    }
}
</script>
<style scoped>
@import url('../../assets/css/common.css');
a{outline: none;}

.sel{width: 100%;background: #F5F5F5;position: absolute;top: 0;left: 0;right: 0;bottom: 0;}
.top{width: 100%;height: 0.9rem; background: #000;line-height: 0.9rem;}
#txt{width: 60%; height: 0.6rem;margin:0 7% 0 3% ;padding-left: 7%; border-radius: 3px;border: 0px;position: relative;}
.pic{width: 15px;height: 15px;position: absolute;top: 0.3rem;left: 4%;}
.top a{color: #fff;font-size: 13px;position: relative;right: 5px;}
.top .denglu{width: 24px;height: 22px;float: right;margin-right: 13px; background :url('/static/img/dl.png') no-repeat;background-size: contain;margin-top:0.25rem;}
.sel .main{width: 90%;background: #F5F5F5;margin: 0 auto;}
.sel .main-top{height: 0.8rem; border-bottom: 1px solid #E0E0E0;font-size: 14px;color: #424242;line-height: 0.8rem;}
.main-bot{margin-bottom: 8rem;}
.main-bot li{float: left;}
.main-bot li a{color: #424242; display: inline-block;margin:10px 20px 10px 0;border: 1px solid #C8C8C8;padding: 4px 8px;border-radius:15px;background: #fff;font-size: 12px;}

</style>

