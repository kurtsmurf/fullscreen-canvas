const canvas = document.querySelector('canvas')
const rendercontext = canvas.getContext("2d")

window.onresize = () => {
  resize()
  draw()
}

resize()
draw()

function resize() {
  canvas.width = document.body.clientWidth
  canvas.height = document.body.clientHeight
}

function draw() {

  const center = {
    x: Math.floor(canvas.width / 2),
    y: Math.floor(canvas.height / 2)
  }

  rendercontext.lineWidth = canvas.width / 4
  rendercontext.strokeStyle = 'aquamarine'

  rendercontext.beginPath()
  rendercontext.moveTo(0, 0)
  rendercontext.lineTo(canvas.width, canvas.height)
  rendercontext.stroke()

  rendercontext.beginPath()
  rendercontext.moveTo(canvas.width, 0)
  rendercontext.lineTo(0, canvas.height)
  rendercontext.stroke()
  
  const _ = 100
  
  rendercontext.fillStyle = 'black'

  rendercontext.fillRect(
    center.x - _ / 2,
    center.y - _ / 2,
    _,
    _
  )

}