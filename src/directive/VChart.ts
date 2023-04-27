import { watch, type DirectiveBinding } from 'vue'
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
export const VChart = {
  mounted(el: HTMLElement, binding: DirectiveBinding<EChartsOption>) {
    const chartInstance = echarts.init(el)
    chartInstance.setOption(binding.value)
    window.addEventListener('resize', () => {
      chartInstance.resize()
    })
    watch(binding.value, (newOptions: EChartsOption) => {
      chartInstance.setOption(newOptions)
    })
  }
}
