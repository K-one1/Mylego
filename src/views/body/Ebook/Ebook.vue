<template>
  <div id="Ebook">
    <div class="top">
      <h2 class="title">电子书</h2>
      <div class="tab">
        <p v-for="(i,index) of ebooktitle" :key="index" @mouseover="ebookhover(index)">{{i}}</p>
      </div>
    </div>
    <div class="tottom">
      <div class="left" v-for="item of 3" v-show="ebookShow==item" :key="item">
        <div class="left-l">
          <div class="img">
            <img src="@/assets/img/index7_07.jpg" alt />
          </div>
          <ul>
            <li v-for="(i,index) of booklist" :key="index">{{i}}</li>
          </ul>
        </div>
        <div class="left-r">
          <div class="carousel">
            <el-carousel :interval="5000" arrow="always" height="243px">
              <el-carousel-item v-for="item in car" :key="item">
                <img :src="item" alt :style="{width:'100%',height:'100%'}" />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="book" v-for="i of 6" :key="i">
            <p class="r-title">奥运狂欢{{item}}</p>
            <p class="cr">10万电子书</p>
            <div class="img">
              <img src="@/assets/img/index09_05.jpg" alt />
            </div>
            <p>
              <span class="cr">￥49</span>&emsp;
              <del>￥79</del>
            </p>
          </div>
        </div>
      </div>
      <div class="right">
        <h3 class="title">新书畅销</h3>
        <div class="com" v-for="(i,index) of 7" :key="i" @mouseover="rEbookHover(index)">
          <div class="titleBox" v-show="rEbookShow!=i">
            <span :class="{cr:i<=3}">{{i}}</span>
            <h4>从你的全世界路过</h4>
          </div>
  
          <div class="r-book" v-show="rEbookShow==i">
            <div class="rbookBox">
              <span :class="{cr:i<=3}">{{i}}</span>
              <div class="box">
                <img src="@/assets/img/index08_05.jpg" alt />
                <p class="text">
                  <span>{{ebookText}}</span>
                </p>
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { car: { type: Array } },
  data() {
    return {
      booklist: [
        "小学教书",
        "教书",
        "小学教书",
        "小学教书",
        "小学教书",
        "小学教书",
        "小学教书",
        "教书",
        "小学教书",
        "小学教书",
        "小学教书",
        "小学教书"
      ],
      ebookShow: 1, //tab
      rEbookShow: 1, //手风琴
      ebooktitle: ["最新上架", "独家畅销", "电子书"],
      ebookText:
        "该书由38个“睡前故事”组成，这些故事中有一半是爱情故事。纵览全书发现，这些小故事各有特点，主角以善良人物为主，诙谐幽默的俚语和脏话夹杂文中，结局总是“痴情者必有善终”。故事最后一般有一段抒情议论，排比流畅，文字感性细腻"
    };
  },
  methods: {
    ebookhover(index) {
      this.ebookShow = index + 1;
    },
    rEbookHover(index) {
      this.rEbookShow = index + 1;
    }
  },
  created() {
    //判断text的长度超出...
    this.ebookText = this.ebookText.substr(0, 50) + "...";
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
#Ebook {
  margin-top: 20px;
  width: 100%;
  .top {
    display: flex;
    justify-content: space-between;
    width: 75%;
    .title {
      color: #ff6600;
    }
    .tab {
      display: flex;
      p {
        width: 100px;
        height: 40px;
        line-height: 40px;
        text-align: center;
      }
      p:hover {
        background: #ff6600;
        color: #fff;
      }
    }
  }
  .tottom {
    width: 100%;
    display: flex;
    .left {
      width: 75%;
      border-top: #ff6600 10px solid;
      display: flex;
      .left-l {
        width: 40%;
        .img {
          text-align: center;
          height: 332px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        ul {
          display: flex;
          width: 100%;
          background: rgb(228, 227, 227);
          flex-wrap: wrap;
          li {
            width: 33%;
            list-style: none;
            text-align: left;
            line-height: 40px;
          }
        }
      }
      .left-r {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        border: 1px solid;
        border-color: transparent #ccc #ccc #ccc;
        .carousel {
          width: 50%;
          height: 50%;
        }
        .book {
          width: 25%;
          box-sizing: border-box;
          height: 50%;
          border: 1px solid #ccc;
          border-right: none;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          text-indent: 10px;
          .img {
            text-align: center;
            text-indent: 0px;
            img{
              width: 98%;
              height: 100%;  
            }
          }
        }
        .book:nth-child(2),
        :nth-child(3) {
          border-top: none;
        }
        .book:not(:nth-child(1)),
        :not(:nth-child(2)) {
          border-bottom: none;
        }
      }
    }
    .right {
      width: 25%;
      height: 502px;
      margin-left: 10px;
      padding: 10px;
      border: 1px solid #ccc;
      .title {
        text-align: center;
        width: 100%;
        margin: 10px 0;
      }
      .com {
        .cr{
          color: red;
        }
        .titleBox {
          display: flex;
          line-height: 40px;
          h4 {
            border-bottom: 1px solid #ccc;
            width: 100%;
            padding-left: 10px;
          }
        }
        .r-book {
          margin-top: 10px;
          .rbookBox {
            display: flex;
          }
          .box {
            display: flex;
            height: 160px;
            img {
              margin-left: 4px;
              width: 100%;
              height: 160px;
            }
            .text {
              padding: 0 6px;
            }
          }
        }
      }
      
    }
  }
}
</style>