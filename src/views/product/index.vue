<template>
  <div>
    <SearchForm
      ref="conditionForm"
      v-model="state.searchForm"
      :form-data="formData"
      @search="search"
    />
    <el-divider />
    <TableView :cols="cols" />
  </div>
</template>

<script setup>
import SearchForm from '@/components/search-form/index.vue'
import TableView from '@/components/TableView/index.vue'
import { reactive } from 'vue'

const state = reactive({
  searchForm: {}
})

// 点击搜索
const search = (e) => {
  console.log('e', e)
}

// 查询字段设置
const formData = reactive([
  {
    label: '型号',
    type: 'input',
    prop: 'name',
    placeholder: '123',
  },
  {
    label: '功能',
    type: 'select',
    options: [{value: 1, label: '2'}, {value: 3, label: '4'}],
    prop: 'addressCode',
  }
])

const cols = [
  {
    prop: 'name',
    label: '型号'
  }
]
</script>

<style scoped>
</style>
