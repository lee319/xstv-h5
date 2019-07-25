<template>
  <div class="wrap">
    <div class="box">
      <div class="members">
        <img src="../assets/ic_ok.png" alt="" class="img">
        <p class="p">验证成功</p>
        <span class="span">
          <em>请在电视端活动页面进行领取</em>若活动页面已关闭，可在个人中心进入
        </span>
      </div>
      <div class="clickbtn"><span>关注公众号，了解更多福利</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "icon-demo",
  methods: {
    
  }
};
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
/* header {
  width: 100%;
  height: 64px;
  line-height: 64px;
  font-size: 18px;
  text-align: center;
  position: absolute;
  z-index: 100;
  background: #fff;
}
.btn {
  position: absolute;
  left: 17px;
  width: 16px;
  height: 16px;
  margin-top: 24px;
} */
.box {
  flex: 1;
  position: relative;
}
.members{
  width: 100%;
  height: 200px;
  text-align: center;
  position: absolute;
  left: 0;
  top: 25%;
}
.img {
  width: 60px;
  height: 60px;
}
.p {
  width: 100%;
  height: 35px;
  line-height: 30px;
  text-align: center;
  color: #333;
  font-size: 20px;
}
.span {
  width: 295px;
  height: 32px;
  line-height: 24px;
  text-align: center;
  color: #333;
  font-size: 16px;
}
.span em {
  display: block;
  font-style: normal;
  font-size: 16px;
}
.clickbtn {
  position: absolute;
  bottom: 45px;
  width: 100%;
  padding: 0 25px;
}
.clickbtn span{
  width: 100%;
  height: 44px;
  line-height: 44px;
  font-size: 18px;
  text-align: center;
  color: #fff;
  border-radius: 4px;
  background: #3c76ff;
  display: block;
}
</style>