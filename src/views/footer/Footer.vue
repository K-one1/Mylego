<template>
    <div id="footer">
        <div class="top">
            <img src="@/assets/img/222_11.png" alt="">
            <img src="@/assets/img/222_13.png" alt="">
            <img src="@/assets/img/222_15.png" alt="">
            <img src="@/assets/img/222_17.png" alt="">
        </div>
        <div class="hash" @click="hash"></div>
    </div>
</template>

<script>
    export default {
        methods:{
            hash(){
                window.location.hash="#top"
            }
        }
    }
</script>

<style lang="less" scoped>
  #footer{
      margin-top: 60px;
      border-top: 10px solid  #ff6600;
      position: relative;
      .top{
          display: flex;
          background: #ccc;
          justify-content: center;
          img{
              margin: 10px 20px;
          }
      }
      .hash{
          background: url(../../assets/img/gototop_05.jpg) no-repeat;
          height: 60px;
          width: 40px;
          position: absolute;
          right: 218px;
          top: -59px;
      }
  }
</style>