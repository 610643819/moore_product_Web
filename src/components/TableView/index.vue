<template>
  <div>
    <el-table :data="state.tableData" style="width: 100%">
      <el-table-column type="index" width="50" />
      <template v-for="(item, index) in props.cols" :key="index+item.label">
        <el-table-column
          :prop="item.prop"
          :fixed="item.fixed"
          align="left"
          :label="item.label || '' "
        >
          <template v-slot="scope">
            <template v-if="item?.func">
              <span>{{ item.func(scope.row) }}</span>
            </template>
            <template v-else>
              <span v-if="scope?.row[item.prop]">{{ scope?.row[item?.prop] }}</span>
              <span v-else>{{ scope.row[item.prop] }}</span>
            </template>
          </template>
        </el-table-column>

      </template>
    </el-table>
    <div class="pagination">
      <el-pagination
        v-model:current-page="state.currentPage"
        v-model:page-size="state.pageSize"
        :page-sizes="[100, 200, 300, 400]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup>

import { reactive } from 'vue'

const props = defineProps({
  cols: Array,
})
const state = reactive({
  tableData: [
    {
      name: '1',
      label: '型号',
    },
    {
      name: '2',
      label: '型号',
    }
  ],
  currentPage: 0,
  pageSize: 100,
})
const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
  state.pageSize = val
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
  state.currentPage = val
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
}
</style>
