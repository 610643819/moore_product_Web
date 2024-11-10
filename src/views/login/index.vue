<script setup>
  import { reactive } from 'vue'
  import { User, Lock } from '@element-plus/icons-vue'
  import router from '@/router'

  const loginFormRef = reactive()
  const loginForm = reactive({
    name: '',
    password: '',
  })
  const loginRules = reactive({
    name: {required: true, message: '请输入用户名称', trigger: 'change'},
    password: {required: true, message: '请输入密码', trigger: 'change'},
  })
  // 用户登录
  const onSubmit = async (formEl) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
      if (valid) {
        console.log('submit!')
        // 登录成功之后存如cookice
        // 跳转工作台
        // router.push({ name: 'home' })
        router.push('/home')
      } else {
        console.log('error submit!', fields)
      }
    })
  }
</script>

<template>
  <div>
    <el-row class="logPage">
      <el-col :span="12"><div class="main" />1</el-col>
      <el-col :span="12">
        <div class="logMain">
          <el-card style="min-width: 550px">
            <template #header>
              <div class="card-header">
                <p>欢迎登录</p>
              </div>
            </template>
            <div class="logForm">
              <el-form
                ref="loginFormRef"
                style="max-width: 600px"
                :model="loginForm"
                :rules="loginRules"
                label-width="auto"
                class="ruleForm"
                status-icon
              >
                <el-form-item label="用户" prop="name">
                  <el-input v-model="loginForm.name" :prefix-icon="User" />
                </el-form-item>
                <el-form-item label="密码" prop="name">
                  <el-input v-model="loginForm.password" :prefix-icon="Lock" />
                </el-form-item>
                <el-button class="logBtn" type="primary" @click="onSubmit(loginFormRef)">登录</el-button>
              </el-form>
            </div>

          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.logPage {
  height: 100vh;
}
  .main {
  }
  .logMain {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    p {
      color: #575757;
      text-align: center;
      font-weight: bold;
      font-size: 3rem;
    }
    .logForm {
      padding: 0 2rem;
      .logBtn {
        width: 100%;
      }
    }
  }
</style>
