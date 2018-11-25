<template>
    <div class="footer">
        <div class="foot-top">
            <p>
                <router-link to="">客户端</router-link>
            </p>
           <img src="/static/img/foot.png" />
            <p>
                 <router-link to="">返回顶端</router-link>
            </p>
        </div>
        <div class="foot-bottom">MissEvan弹幕音频网 京ICP备:14055174号-1</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.footer{width: 100%;height: 1.2rem;line-height: 0.5rem;text-align: center;background: #f5f5f5;}
.foot-top{width: 100%;}
.foot-top p{width: 70px;display: inline-block;}
.foot-top p a{color: #9e9e9e;outline: none;}
.foot-top img{width: 16px;height: 16px; margin: 0 10%;vertical-align: -3px;}
.foot-bottom{widows: 100%;text-align: center;font-size: 12px;color: #9e9e9e;}
</style>

