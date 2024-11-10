<script setup>
import { RouterView } from 'vue-router'
import {
  Coin,
} from '@element-plus/icons-vue'
import router from '@/router/index.js'
import Breadcrumb from './breadcrumb.vue'

const routerGo = (url) => {
  router.push(url)
}
</script>

<template>
  <div class="page">
    <el-container>
      <el-aside width="250px">
        <div>logo</div>
        <div>
          <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="routerGo('product')"
        >
          <el-menu-item index="1">
            <el-icon><Coin /></el-icon>
            <span>产品</span>
          </el-menu-item>
<!--          <el-menu-item index="2">-->
<!--            <el-icon><setting /></el-icon>-->
<!--            <span>Navigator Four</span>-->
<!--          </el-menu-item>-->
        </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-header class="page-header">
          <Breadcrumb/>
        </el-header>
        <el-main class="main">
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
  .main {
    height: calc(100vh - 64px);
  }
  .page-header {
    display: flex;
    align-items: center;
    box-shadow: 0 6px 8px -4px rgba(0, 0, 0, 0.2);
  }
</style>
