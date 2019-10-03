<template>
  <div id="Furniture">
    <div class="title">
      <h2>家具日用</h2>
    </div>
    <div class="commodityBox">
      <div class="left">
        <img src='@/assets/img/index21_05.jpg' alt />
      </div>
      <div class="right">
        <div class="IMGbox" v-for="i of 3" :key="i">
          <img src='@/assets/img/index22_05.jpg' alt />
          <img src="@/assets/img/index23_08.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#Furniture{
    width: 100%;
    .title{
        h2{
            color: #ff6600;
            line-height: 34px;
            border-bottom: #ff6600 10px solid ;
        }
    }
    .commodityBox{
        display: flex;
        height: 400px;
        width: 100%;
        .left{
            width: 31%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .right{
            display: flex;
            width: 69%;
            height: 100%;
            justify-content: space-around;
            .IMGbox{
                display: flex;
                flex-direction: column;
                height: 100%;
                img{
                    width: 160px;

                }
            }
        }
    }
}
</style>