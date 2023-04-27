import { ref } from 'vue'

export const useDefer = (maxFrameCount = 100) => {
  const frameCount = ref(0)
  const refreshFrameCount = () => {
    requestAnimationFrame(() => {
      frameCount.value++
      if (frameCount.value < maxFrameCount) {
        refreshFrameCount()
      }
    })
  }
  refreshFrameCount()
  return (showInFrameCount: number): boolean => {
    return frameCount.value >= showInFrameCount
  }
}
