<template>
    <div class="recom">
        <swipe class="lunbo">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
            <swipe-item class="slide4"></swipe-item>
            <swipe-item class="slide5"></swipe-item>
        </swipe>
        <div class="rec-main">
            <div class="peoMy">
                <div class="peoMy-left">
                    <span class="My-logo"></span>人气M音
                </div>
                <div id="main-wz">
                    排行榜 <span id="nav">&gt;</span>
                </div>
                <ul class="My-list">
                    
                  <li class="list-li"> 
                      <router-link :to="'/recom/recomDetail/'">  
                    <img src="../../../static/img/recom2.jpg" />
                      </router-link>
                     <p>【有声漫画】吸血鬼与猎人-第七...
                     <span id="span-logo"></span>
                     <span>8381</span>
                     </p>
                  </li >
                  <li class="list-li">
                    <img src="../../../static/img/recom3.jpg" />
                     <p>原创现代悬疑剧《移植法则》全...
                        <span id="span-logo"></span>
                        <span>7531</span>
                     </p>
                  </li>
                  <li class="list-li">
                    <img src="../../../static/img/recom4.jpg" />
                     <p>【イノセ】萨维尔街的诱惑-01(...
                        <span id="span-logo"></span>
                        <span>9591</span>
                     </p>
                  </li>
                  
                </ul>
            </div>
            <div class="pd">
                <div class="pd-left">
                    <span class="pd-logo"></span>频道
                </div>
                <div id="main-wz">
                    更多 <span id="nav">&gt;</span>
                </div>
                <div class="pd-main">
                    <dl>
                        <dt>
                            <img src="../../../static/img/02b03508085127e1d3ed56561c632fa2100757.jpg" />
                        </dt>
                        <dd><span id="span1"></span><span class="span2">12693</span></dd>
                        <dd class="dd1">假如漫条会说话</dd>
                    </dl>
                    <dl>
                        <dt>
                            <img src="../../../static/img/6.jpg" />
                        </dt>
                        <dd><span id="span1"></span><span class="span2">15243</span></dd>
                        <dd class="dd1">【收藏向】经典动漫铃声</dd>
                    </dl>
                    <dl>
                        <dt>
                            <img src="../../../static/img/5.jpg" />
                        </dt>
                        <dd><span id="span1"></span><span class="span2">13504</span></dd>
                        <dd class="dd1">动漫大事件</dd>
                    </dl>
                    <dl>
                        <dt>
                            <img src="../../../static/img/43e1c9c8cb11298971f4c07d0fa34d52133538.jpg" />
                        </dt>
                        <dd><span id="span1"></span><span class="span2">12693</span></dd>
                        <dd class="dd1">日常精分现场</dd>
                    </dl>
                </div>
            </div>
            <div class="peoMy">
                <div class="peoMy-left">
                    <span class="ys-logo"></span>有声漫画
                </div>
                <div id="main-wz">
                    更多 <span id="nav">&gt;</span>
                </div>
                <ul class="My-list">
                  <li class="list-li">
                      
                         <img src="../../../static/img/rec-ys1.jpg" />
                 
                     <p>前辈慌得一比[兴津和幸x古川慎]...
                     <span id="span-logo"></span>
                     <span>8381</span>
                     </p>
                  </li >
                  <li class="list-li">
                    <img src="../../../static/img/8.jpg" />
                     <p>ten countのdrama第一话(正篇
                        <span id="span-logo"></span>
                        <span>7531</span>
                     </p>
                  </li>
                  <li class="list-li">
                    <img src="../../../static/img/rec-ys3.jpg" />
                     <p>全职高手同人《荣耀职业联盟运动...
                        <span id="span-logo"></span>
                        <span>9591</span>
                     </p>
                  </li>
                </ul>
            </div>
            <!-- 广播剧-->
            <div class="peoMy">
                <div class="peoMy-left">
                    <span class="gb-logo"></span>广播剧
                </div>
                <div id="main-wz">
                    更多 <span id="nav">&gt;</span>
                </div>
                <ul class="My-list">
                  <li class="list-li">
                    <img src="../../../static/img/rec-gb1.jpg" />
                     <p>墨香铜臭原著|玄幻广播剧《魔道...
                     <span id="span-logo"></span>
                     <span>100273</span>
                     </p>
                  </li >
                  <li class="list-li">
                    <img src="../../../static/img/rec-bg2.jpg" />
                     <p>杀破狼第三季第二十七集
                        <span id="span-logo"></span>
                        <span>18006</span>
                     </p>
                  </li>
                  <li class="list-li">
                    <img src="../../../static/img/rec-bg3.jpg" />
                     <p>《原路看斜阳》第二期
                        <span id="span-logo"></span>
                        <span>22704</span>
                     </p>
                  </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';
import Axios from 'axios';

export default {
    components:{
        'swipe': Swipe,
        'swipe-item': SwipeItem
    },   
}
</script>
<style scoped>
.recom{width: 100%;background: #F5F5F5;}
.lunbo {
  height: 150px;
  font-size: 30px;
  text-align: center;
}
.slide1 {
  background: url('/static/img/timg.jpg') no-repeat;
  background-size: 100%;
}
.slide2 {
  background: url('/static/img/timg1.jpg') no-repeat;
  background-size: 100%;
}
.slide3 {
  background: url('/static/img/timg2.jpg') no-repeat;
  background-size: 100%;
}
.slide4 {
  background: url('/static/img/timg3.jpg') no-repeat;
  background-size: 100%;
}
.slide5 {
  background: url('/static/img/timg4.jpg') no-repeat;
  background-size: 100%;
}
.rec-main{width: 90%;margin:0.2rem auto 0 ;padding-bottom: 0.4rem;}
.peoMy{line-height: 1rem;}
.peoMy-left{width: 120px;font-size: 16px;color: #333;letter-spacing: 3px; float: left;}
.peoMy-left .My-logo{width: 25px;height: 25px;display: inline-block;background: url('../../assets/img/sprite-icons-catalog@2x.1144a958.png') left center no-repeat ;background-size:450%; background-position:-29px 0 ;position: relative;top:6px;margin-right: 8px;}
#main-wz {float: right;}
#nav{float: right;width: 18px;height: 18px; line-height: 18px;text-align: center; background: #DADADA;border-radius: 9px;text-align: center;color: #fff;margin: 15px 0 0 10px;}
.My-list {top: 0.9rem;display: flex;width: 100%;overflow-x: scroll;white-space: pre-wrap;}
.My-list::-webkit-scrollbar{display: none;}
.My-list .list-li {margin-left:0.2rem;color: #616161;line-height: 20px;font-size: 12px;}
.My-list .list-li img{margin-bottom: 5px;}
.My-list .list-li p{width: 100px;}
.My-list .list-li a{outline: none;}
#span-logo{width: 15px;height: 15px;background: url('../../assets/img/sprite-icons-thumbnails@2x.f1c29abf.png')no-repeat;background-size: 480%;background-position: -57px -16px;float: left;}
.My-list .list-li span:nth-of-type(2){position: relative;top: -0.45rem;left: 0.4rem;}
/*  频道 */
.pd{line-height: 1rem;}
.pd-left{width: 120px;font-size: 16px;color: #333;letter-spacing: 3px; float: left;}
.pd-left .pd-logo{width: 25px;height: 25px;display: inline-block;background: url('../../assets/img/sprite-icons-catalog@2x.1144a958.png') left center no-repeat ;background-size:450%; background-position:-56px -56px ;position: relative;top:6px;margin-right: 8px;}
.pd-main dl{float: left;width: 45%;margin:0 2.5%;}
.pd-main dl dt img{border-radius: 5px;}
.pd-main dl dd:nth-of-type(1){width: 50%;height: 0.5rem; float: right;background:linear-gradient(left,#D5D5D5,#B6B6B6);
background: -webkit-linear-gradient(left,#D5D5D5,#B6B6B6);border-radius: 5px;top: -2.6rem;}
.pd-main dl dd{width: 100%;position: relative;}
.pd-main dl dd #span1{width: 15px;height: 15px;display: inline-block;position: relative;left: 5px;top: -8px;
    background: url('../../assets/img/sprite-icons-thumbnails@2x.f1c29abf.png')no-repeat;background-size: 500%;background-position: -26px -36px;margin-right: 5px;}
.pd-main dl dd .span2{position: relative;left: 4px;top: -11px;color: #fff;}
.pd-main .dd1{width:130px;float: left; line-height: 0.4rem;
color:#616161;font-size: 12px;margin-top: -0.4rem;}
.ys-logo{width: 25px;height: 25px;display: inline-block;background: url('../../assets/img/sprite-icons-catalog@2x.1144a958.png') left center no-repeat ;background-size:450%; background-position:-86px -60px ;position: relative;top:9px;margin-right: 8px;}
.pd-main .dd1{width:130px;float: left; line-height: 0.4rem;
color:#616161;font-size: 12px;margin-top: -0.4rem;}
.gb-logo{width: 25px;height: 25px;display: inline-block;background: url('../../assets/img/sprite-icons-catalog@2x.1144a958.png') left center no-repeat ;background-size:450%; background-position:-30px -60px ;position: relative;top:9px;margin-right: 8px;}
</style>