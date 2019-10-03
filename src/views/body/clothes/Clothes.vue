<template>
  <div>
    <div class="Clothes" v-for="ClothesObj of Clothes" :key="ClothesObj.title">
      <div class="top">
        <h2>{{ClothesObj.title}}</h2>
        <ul class="tab">
          <li
            v-for="(tab,index) of ClothesObj.tab"
            :key="index+1"
            @click="Tab(index,ClothesObj.title)"
            :class="{active:index==ClothesObj.tabShow}"
          >{{tab.title}}</li>
        </ul>
      </div>
      <div class="bottom">
        <div class="left">
          <div class="l-left">
            <div class="img">
              <img :src="ClothesObj.leftImg" alt />
            </div>
            <ul>
              <li v-for="(leftNav,index) of ClothesObj.leftNav" :key="index+2">{{leftNav+index}}</li>
            </ul>
          </div>
          <div class="r-left">
            <div class="carpusel">
              <el-carousel :interval="5000" arrow="always">
                <el-carousel-item v-for="IMGitem in car" :key="IMGitem">
                  <img :src="IMGitem" alt class="img" />
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="img">
              <img src="@/assets/img/index11_08.jpg" alt />
            </div>
          </div>
        </div>
        <div
          class="right"
          v-for="(rightItem,index) of   ClothesObj.tab"
          :key="index+3"
          v-show="index==ClothesObj.tabShow&&ClothesObj.title==ClothesObj.titleShow"
        >
          <div v-for="i of 3" :key="i+4">
            <div class="rightTop">
              <img :src="rightItem.contentImg.rightTopImg" alt />
            </div>
            <div class="rightbottom">
              <img :src="rightItem.contentImg.rightBottomImg" alt />
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
      Clothes: [
        {
          title: "服装",
          titleShow: "服装",
          tabShow: 0,
          tab: [
            {
              title: "女装内衣",
              contentImg: {
                rightTopImg: require("@/assets/img/index100_05.jpg"),
                rightBottomImg: require("@/assets/img/index100_11.jpg")
              }
            },
            {
              title: "热销精品",
              contentImg: {
                rightTopImg: require("@/assets/img/index101_05.jpg"),
                rightBottomImg: require("@/assets/img/index100_11.jpg")
              }
            },
            {
              title: "精品鞋靴",
              contentImg: {
                rightTopImg: require("@/assets/img/index100_05.jpg"),
                rightBottomImg: require("@/assets/img/index100_11.jpg")
              }
            }
          ],
          leftImg: require("@/assets/img/index7_17.jpg"),
          leftNav: [
            "女包",
            "防晒",
            "短裤",
            "防晒",
            "短裤",
            "防晒",
            "短裤",
            "防晒",
            "短裤"
          ]
        },
        {
          title: "运动户外",
          titleShow: "运动户外",
          tabShow: 0,
          tab: [
            {
              title: "国际名品",
              contentImg: {
                rightTopImg: require("@/assets/img/index101_05.jpg"),
                rightBottomImg: require("@/assets/img/index101_11.jpg")
              }
            },
            {
              title: "户外装备",
              contentImg: {
                rightTopImg: require("@/assets/img/index100_05.jpg"),
                rightBottomImg: require("@/assets/img/index101_11.jpg")
              }
            },
            {
              title: "运动潮流",
              contentImg: {
                rightTopImg: require("@/assets/img/index101_05.jpg"),
                rightBottomImg: require("@/assets/img/index101_11.jpg")
              }
            }
          ],
          leftImg: require("@/assets/img/index7_18.jpg"),
          leftNav: [
            "女包",
            "防晒",
            "短裤",
            "防晒",
            "短裤",
            "防晒",
            "短裤",
            "防晒",
            "短裤"
          ]
        },
        {
          title: "童装",
          titleShow: "童装",
          tabShow: 0,
          tab: [
            {
              title: "女装内衣",
              contentImg: {
                rightTopImg: require("@/assets/img/index100_05.jpg"),
                rightBottomImg: require("@/assets/img/index100_11.jpg")
              }
            },
            {
              title: "热销精品",
              contentImg: {
                rightTopImg: require("@/assets/img/index101_05.jpg"),
                rightBottomImg: require("@/assets/img/index100_11.jpg")
              }
            },
            {
              title: "精品鞋靴",
              contentImg: {
                rightTopImg: require("@/assets/img/index100_05.jpg"),
                rightBottomImg: require("@/assets/img/index100_11.jpg")
              }
            }
          ],
          leftImg: require("@/assets/img/index7_17.jpg"),
          leftNav: [
            "女包",
            "防晒",
            "短裤",
            "防晒",
            "短裤",
            "防晒",
            "短裤",
            "防晒",
            "短裤"
          ]
        }
      ]
    };
  },
  methods: {
    Tab(val, title) {
      for (let obj of this.Clothes) {
        if (title == obj.title) {
          obj.tabShow = val;
          break;
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.Clothes {
  .top {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    border-bottom: 10px solid #ff6600;
    color: #ff6600;
    line-height: 40px;
    ul {
      display: flex;
      list-style: none;
      color: #000;
      width: 300px;
      justify-content: space-around;
      li {
        width: 33%;
        text-align: center;
      }
      .active{
        background: #ff6600;
        color: #fff;
      }
    }
  }
  .bottom {
    width: 100%;
    display: flex;
    .left {
      width: 60%;
      display: flex;
      .l-left {
        width: 50%;
        .img {
          width: 100%;
          img {
            width: 250px;
          }
        }
        ul {
          list-style: none;
          display: flex;
          width: 100%;
          flex-wrap: wrap;
          li {
            width: 33%;
            line-height: 40px;
          }
        }
      }
      .r-left {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .carpusel {
          width: 100%;
          .img {
            height: 100%;
            width: 100%;
          }
        }
        .img {
          height: 100%;
          width: 100%;
          img {
            height: 100%;
            width: 100%;
          }
        }
      }
    }
    .right {
        width: 40%;
      text-align: center;
      display: flex;
    }
  }
}
</style>