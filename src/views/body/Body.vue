<template>
  <div id="body">
    <div class="left">
      <p class="title">全部商品分类</p>
      <p class="l-nav" v-for="(obj,index) of leftNav" :key="index">
        <span>
          <label for v-for="i of obj" :key="i">{{i}}</label>
        </span>
      </p>
    </div>
    <div class="right">
      <el-carousel :interval="5000" arrow="always"  height="600px">
        <el-carousel-item v-for="item in carousel" :key="item">
          <img :src="item" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftNavlist: [
        ["图书", "电子书", "童书"],
        ["创意文具"],
        ["服饰", "内衣"],
        ["鞋子", "箱包"],
        ["户外运动"],
        ["图书", "电子书", "童书"],
        ["创意文具"],
        ["服饰", "内衣"],
        ["鞋子", "箱包"],
        ["户外运动"],
        ["图书", "电子书", "童书"],
        ["创意文具"],
        ["服饰", "内衣"],
        ["鞋子", "箱包"],
        ["户外运动"]
      ],
      carousel: [
       require("@/assets/img/banner1.jpg"),
         require("@/assets/img/banner2.jpg"),
         require("@/assets/img/banner3.jpg"),
          require("@/assets/img/banner4.jpg"),
         require("@/assets/img/banner5.jpg")
      ]
    };
  },
  mounted() {},
  computed: {
    leftNav() {
      let NewNav = [];
      for (let obj of this.leftNavlist) {
        if (!obj.length > 1) {
          NewNav.push(obj);
        } else {
          for (let i = 0; i < obj.length; i++) {
            if (i != obj.length - 1) {
              obj[i] = obj[i] + "、";
            }
          }
          NewNav.push(obj);
        }
      }
      return NewNav;
    }
  }
};
</script>

<style lang="less" scoped>
#body {
  height: 100%;
  width: 100%;
  display: flex;
  .left {
    width: 300px;
    height: 600px;
    background: #ccc;
    padding: 0 20px;
    .title {
      color: #fff;
      text-align: center;
      line-height: 30px;
      height: 30px;
    }
    .l-nav {
      padding: 6px 0;
    }
  }
  .right {
    width: 100%;
    height: 600px;
    background: red;
  }
}
</style>