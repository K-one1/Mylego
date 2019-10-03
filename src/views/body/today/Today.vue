<template>
  <div id="Today">
    <h2 class="title">今日推荐</h2>
    <div class="commodity">
      <div class="box" v-for='i of 12' :key='i'>
        <div class="img">
          <img src="@/assets/img/index06_05.jpg" alt />
        </div>
        <div>
          <img src="@/assets/img/index05_18.jpg" alt />
        </div>
        <div class="text">
          <p>黑绝青蜂侠六键电竞游戏鼠标</p>
          <p class="cr">全国联保&emsp;一年免费包换</p>
          <p class="cr">￥299</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#Today {
  width: 100%;
  margin-top: 20px;
  .title {
    color: #ff6600;
    margin-bottom: 6px;
    text-indent: 10px;
  }
  .commodity {
    display: flex;
    border-top: 10px solid #ff6600;
    flex-wrap:  wrap;
    .box {
      width: 200px;
      box-sizing: border-box;
      border-style: solid;
      border-width:1px;
      border-color: transparent #ff6600  #ff6600  #ff6600;
    }
    .box:not(:nth-child(6)){
        border-right:none;
    }
    .box:nth-last-child(1){
        border-right: 1px solid #ff6600;
    }
    .img {
      text-align: center;
      padding: 10px;
    }
    .text {
      padding: 4px 10px 10px;
      font-size: 12px;
      .cr{
          color: red;
      }
    }
  }
}
</style>