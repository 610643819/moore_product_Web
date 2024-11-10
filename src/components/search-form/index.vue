<template>
  <div>
    <el-form ref="ruleFormRef" :inline="true" :model="localValue" :label-width="labelWidth">
      <el-row :gutter="20">
        <el-col
          v-for="(item, index) in formData"
          :key="`search${index}`"
          :xl="formProperty?.xl || item?.xl || 4"
          :lg="formProperty?.lg || item?.lg || 4"
          :md="formProperty?.md || item?.md || 6"
          :sm="formProperty?.sm || item?.sm || 6"
          :offset="item?.offset || 0"
        >
            <el-form-item :label="item.label" :label-width="item.labelWidth || labelWidth" style="width: 100%;">
              <template v-if="item.type === 'input'">
                <el-input v-model="localValue[item.prop]" :placeholder="item.placeholder || '请输入'" clearable />
              </template>
              <template v-if="item.type === 'select'">
                <el-select
                  v-model="localValue[item.prop]"
                  :placeholder="item.placeholder || '请选择'"
                >
                  <el-option
                    v-for="item in item.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </template>
            </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" @click="search">搜索</el-button>
<!--          <el-button type="success" @click="resetForm(ruleFormRef)">重置</el-button>-->
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, watch, reactive, ref } from 'vue';

const props = defineProps({
  modelValue: Object,
  labelWidth: String,
  formData: Array,
  formProperty: Object
});

const ruleFormRef = ref(null)

const search = () => {
  emit('search', props.modelValue);
}


const emit = defineEmits(['update:modelValue', 'search']);

// 使用 reactive 使 localValue 深度响应
const localValue = reactive({ ...props.modelValue });

// 监听 localValue 的变化，并在更新时 emit 给父组件
watch(
  () => localValue,
  (newValue) => {
    console.log('localValue updated:', newValue);
    emit('update:modelValue', { ...newValue }); // 确保 emit 更新一个新的对象
  },
  { deep: true }
);

// 同步更新 localValue 与 modelValue 的值
watch(
  () => props.modelValue,
  (newValue) => {
    Object.assign(localValue, newValue);
  },
  { deep: true }
);
</script>

<style scoped>
/* 你的样式代码 */

</style>
