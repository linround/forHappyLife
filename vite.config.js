import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host:true,// 设置可通过ip访问
    open:true,// 自动打开浏览器
  }
})
