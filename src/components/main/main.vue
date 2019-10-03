<template>
    <div id="app">
        <!-- 头部 -->
        <is-header></is-header>
        <!-- body -->
        <div class="body">
        <router-view></router-view>
        </div>
        <!-- 底部 -->
        <is-footer></is-footer>
    </div>
</template>

<script>
import Header from '../../views/header/Header'
import Footer from '../../views/footer/Footer'
    export default {
        components:{
            'is-header':Header,
            'is-footer':Footer
        }
    }
</script>

<style lang="less" scoped>
    .body{
        width: 1200px;
        margin: 0 auto;
    }
</style>