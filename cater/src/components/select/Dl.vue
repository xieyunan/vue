<template>
    <div class="dengl">
        <div class="top">
            <img src="/static/img/logo.png" class="logo" @click="ret">

                <div class="denglu" @click="denglu"></div>

            <div class="sel" @click="select"></div>
        </div>
        <div class="main">
            <div class="main-top">
                <img src="../../assets/img/default-icon.jpg" class="icon" />
                <a>点击登录</a>
                <img src="../../assets/img/gt.png" class="gt"> 
            </div>

            <div class="mian-bot">
                <ul class="list">
                    <li>
                        <em class="m-img"></em>
                        <router-link to="#">M-主站</router-link>
                        <img src="../../assets/img/gt.png" class="gt"> 
                    </li>
                </ul>
                <ul class="list">
                    <li>
                        <em class="m-img1"></em>
                        <router-link to="#">M-直播</router-link>
                        <img src="../../assets/img/gt.png" class="gt">
                    </li>
                </ul>
                <ul class="list">
                    <li>
                         <em class="m-img2"></em>
                        <router-link to="#">M-钱包</router-link>
                        <img src="../../assets/img/gt.png" class="gt">
                    </li>
                </ul>
                            
            </div>
        </div>

    </div>
</template>

<script>

export default {
    methods:{
        select(){
            this.$router.push('/select')
        },
        denglu(){
            this.$router.push('/music/musicList')
        },
        ret(){
            this.$router.push('/music/musicList')
        },
    }
}
</script>
<style scoped>
@import url('../../assets/css/common.css');
a{color: #fff;font-size: 16px;font-family: Hiragino Sans GB,华文细黑,STHeiti,微软雅黑,Microsoft YaHei,SimHei,Helvetica Neue,Helvetica,Arial,sans-serif;}

.dengl{width: 100%;position: absolute;top:0;left: 0;right: 0;bottom:0;background:#000;}
.dengl .top{width: 100%;height: 1rem; background: #000;position: fixed;top: 0; }
.top .logo{width: 103px;height: 23px;float: left;padding: 0.3rem}
.top .sel{width: 24px;height: 22px;float: right;margin-right: 20px; background :url('/static/img/sel.png') no-repeat;background-size: contain;margin-top:0.3rem;}
.top .denglu{width: 24px;height: 22px;float: right;margin-right: 13px; background :url('/static/img/dl.png') no-repeat;background-size: contain;margin-top:0.3rem;}

.main{margin-top: 1rem;}
.main-top{width: 90%;height: 2.3rem;background: #3D3D3D;padding: 0 5%;display: flex;align-items: center;position: relative;margin-bottom: 0.5rem;}
.icon{width: 70px;height: 70px;border-radius:35px;margin: 0 0.4rem 0 0.2rem;}
.gt{ width: 8px;height: 14px;position: absolute;right: 5%;}

.main-bot{width: 100%;}
.list{width: 90%;padding: 0 5%; background: #3D3D3D;border-bottom: 1px solid #000;}
.list li{height: 0.8rem; display: flex;align-items: center;}
.m-img{display: inline-block;width: 16px;height: 17px;background: url('../../assets/img/m-img.png') no-repeat;margin-right: 4%;}
.m-img1{display: inline-block;width: 16px;height: 17px;background: url('../../assets/img/m-img.png');margin-right: 4%;background-position: 0 18px;}
.m-img2{display: inline-block;width: 16px;height: 17px;background: url('../../assets/img/m-img.png');
background-position: 0 38px;margin-right: 4%;}

</style>

