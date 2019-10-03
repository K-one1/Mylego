<template>
  <div id="top">
    <!-- top -->
    <div class="wapper">
      <div class="top">
        <span>
          欢迎光临
          <span class="logotext cf60">乐购</span>,请
          <span class="login cf60">登录</span>\
          <span class="res cf60">注册</span>
        </span>
      </div>
    </div>
    <!-- bottom -->
    <div class="bottom">
      <div class="search">
        <input type="text" placeholder="请输入" class="inp" />
        <div class="sear"></div>
      </div>
      <div class="btn">
        <el-button type="success" class="shopCar" @click="linkShopCar">购物车</el-button>
        <el-button type="info" class="indent">我的订单<span v-show="this.$store.state.num>0">{{this.$store.state.num}}</span></el-button>
      </div>
      <img src="../../assets/logo.png" alt="" class="img" @click="linkMian">
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    linkShopCar(){
      this.$router.push('/ShopCar')
    },
    linkMian(){
      this.$router.push('/')
    }
  }
};
</script>

<style lang="less" scoped>
#top {
  width: 100%;
  font-size: 14px;
  .wapper {
    width: 100%;
    background: rgb(108, 230, 60);
  }
  .top {
    width: 1200px;
    margin: 0 auto;
    height: 30px;
    line-height: 30px;
    display: flex;
    justify-content: flex-end;
  }
  .bottom {
    width: 1200px;
    padding-top: 8px;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: flex-end;
    .img{
        position: absolute;
        top: -38px;
        left: 0px;
        width: 120px;
        height: 100px;
    }
    .search {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 400px;
      border: 3px solid #f1d848;
      .inp {
        border: none;
        text-indent: 10px;
        outline: none;
        width: 100%;
      }
      .sear {
        width: 40px;
        height: 40px;
        background: #fd5a2c;
      }
    }
    .btn {
        margin-left: 40px;
      .indent {
        margin: 0;
        border-radius: 0;
      }
    }
  }
}
//common
.cf60 {
  color: #fd5a2c;
}
</style>