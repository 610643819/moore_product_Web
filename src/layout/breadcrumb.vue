<script setup>
import { ArrowRight } from '@element-plus/icons-vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// 动态生成面包屑项
const breadcrumbs = route.matched.map((match) => ({
  name: match.meta.breadcrumb,
  path: match.path,
}));
</script>

<template>
  <div>
    {{breadcrumbs}}
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        :to="{ path: crumb.path }"
        :replace="index === breadcrumbs.length - 1"
      >
        {{ crumb.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style scoped>
</style>
