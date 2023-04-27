export const VDrag = {
  mounted(el: HTMLElement) {
    let x = 0
    let y = 0
    let isDragging = false
    const handleMouseDown = (event: MouseEvent) => {
      isDragging = true
      x = event.clientX
      y = event.clientY
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }
    const handleMouseMove = (event: MouseEvent) => {
      if (isDragging) {
        const dx = event.clientX - x
        const dy = event.clientY - y
        const newLeft = el.offsetLeft + dx
        const newTop = el.offsetTop + dy
        el.style.left = `${newLeft}px`
        el.style.top = `${newTop}px`
        x = event.clientX
        y = event.clientY
      }
    }
    const handleMouseUp = () => {
      isDragging = false
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
    el.addEventListener('mousedown', handleMouseDown)
  }
}
