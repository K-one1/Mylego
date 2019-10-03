<template>
  <div id="body">
    <div id="top">
      <p class="title">全部商品分类</p>
      <div class="topNav">
        <p v-for="i of topNav" :key="i" class="itemhover">{{i}}</p>
      </div>
    </div>
    <div class="banner">
      <div class="left">
        <div class="l-nav" v-for="(obj,index) of leftNav" :key="index">
          <p>
            <label for v-for="i of obj.nav" :key="i" class="l-navHover">{{i}}</label>
          </p>
          <div class="showlist">
            <p class="rigth-link">
              <span v-for="i of obj.rightlink" :key="i">{{i}}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="right">
        <el-carousel :interval="5000" arrow="always" height="600px">
          <el-carousel-item v-for="item in carousel" :key="item">
            <img :src="item" alt class="img" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <!-- 今日推荐 -->
    <is-today></is-today>
    <!-- 电子书 -->
    <is-ebook :car='carousel'></is-ebook>
    <!-- 服装 -->
    <is-clothes :car='carousel'></is-clothes>
    <!-- 家具 -->
    <is-furniture></is-furniture>
  </div>
</template>

<script>
import Today from './today/Today'
import Ebook from './Ebook/Ebook'
import Clothes from './clothes/Clothes'
import Furniture from './furniture/Furniture'
export default {
  data() {
    return {
      topNav: [
        "图书",
        "电子书",
        "原创文字",
        "服装",
        "运动户外",
        "育英童",
        "家具",
        "创意文具",
        "地方特产",
        "海外购",
        "电器城"
      ],
      leftNavlist: [
        {
          nav: ["图书", "电子书", "童书"],
          rightlink: ["图书", "电子书", "童书"]
        },
        {
          nav: ["创意文具"],
          rightlink: [
            "创意文具",
            "箱包",
            "箱包1",
            "箱包2",
            "箱包3",
            "箱包4",
            "箱包5",
            "箱包6",
            "箱包7",
            "箱包8",
            "箱包9",
            "箱包10"
          ]
        },
        {
          nav: ["服饰", "内衣"],
          rightlink: [
            "服饰",
            "内衣",
            "箱包11",
            "箱包12",
            "箱包13",
            "箱包14",
            "箱包15",
            "箱包16",
            "箱包17",
            "箱包18",
            "箱包19",
            "箱包20"
          ]
        },
        {
          nav: ["鞋子", "箱包"],
          rightlink: [
            "鞋子",
            "箱包21",
            "箱包22",
            "箱包23",
            "箱包24",
            "箱包25",
            "箱包26",
            "箱包27",
            "箱包28",
            "箱包29",
            "箱包30"
          ]
        },
        {
          nav: ["户外运动"],
          rightlink: [
            "户外运动",
            "箱包37",
            "箱包36",
            "箱包35",
            "箱包34",
            "箱包33",
            "箱包32",
            "箱包31"
          ]
        },
        {
          nav: ["图书", "电子书", "童书"],
          rightlink: ["图书", "电子书", "童书"]
        },
        { nav: ["创意文具"], rightlink: ["创意文具"] },
        { nav: ["服饰", "内衣"], rightlink: ["服饰", "内衣"] },
        { nav: ["鞋子", "箱包"], rightlink: ["鞋子", "箱包"] },
        { nav: ["户外运动"], rightlink: ["户外运动"] },
        {
          nav: ["图书", "电子书", "童书"],
          rightlink: ["图书", "电子书", "童书"]
        },
        { nav: ["创意文具"], rightlink: ["创意文具"] },
        { nav: ["服饰", "内衣"], rightlink: ["服饰", "内衣"] },
        { nav: ["鞋子", "箱包"], rightlink: ["鞋子", "箱包"] },
        {
          nav: ["户外运动"],
          rightlink: [
            "户外运动1",
            "户外运动2",
            "户外运动3",
            "户外运动4",
            "户外运动5",
            "户外运动6",
            "户外运动7"
          ]
        }
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
  methods: {
    NavChild(val) {
      this.rigthLink = val;
    },
    NavLeave(val) {
      this.rigthLink = val;
    }
  },
  computed: {
    leftNav() {
      let NewNav = [];
      for (let obj of this.leftNavlist) {
        if (!obj.nav.length > 1) {
          NewNav.push(obj);
        } else {
          for (let i = 0; i < obj.nav.length; i++) {
            if (i != obj.nav.length - 1) {
              obj.nav[i] = obj.nav[i] + "、";
            }
          }
          NewNav.push(obj);
        }
      }
      return NewNav;
    }
  },
  mounted() {},
  components:{
    'is-today':Today,
    'is-ebook':Ebook,
    'is-clothes':Clothes,
    'is-furniture':Furniture
  }
};
</script>

<style lang="less" scoped>
#body {
  height: 100%;
  width: 100%;
  #top {
    margin-top: 20px;
    font-size: 20px;
    display: flex;
    .title {
      width: 300px;
      color: #fff;
      background: #ff6600;
      text-align: center;
    }
    .topNav {
      width: 900px;
      display: flex;
      justify-content: space-between;
      .itemhover {
        font-size: 18px;
        width: 100%;
        text-align: center;
      }
      .itemhover:hover {
        color: #ff6600;
        cursor: pointer;
      }
    }
  }
  .banner {
    display: flex;
    .left {
      position: relative;
      height: 600px;
      background: #ccc;
      .showlist {
        width: 450px;
        height: 600px;
        background: #ff6600;
        position: absolute;
        left: 300px;
        top: 0px;
        z-index: 999;
        display: none;
        .rigth-link {
          margin: 6px 10px;
          text-align: start;
          height: 20px;
          line-height: 20px;
          float: left;
          span {
            margin-top: 6px;
            width: 106px;
            display: inline-block;
          }
        }
      }
      .title {
        color: #fff;
        text-align: center;
        line-height: 30px;
        height: 30px;
      }
      .l-nav {
        padding: 6px 0;
        text-align: left;
        padding-left: 20px;
        box-sizing: border-box;
        width: 300px;
      }
      .l-nav:hover {
        background: #ff6600;
        .showlist {
          display: block;
        }
      }
      .l-navHover:hover {
        color: #fff;
      }
    }
    .right {
      width: 100%;
      height: 600px;
      background: red;
      .img {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>