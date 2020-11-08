"strict mode"

const canvas = document.querySelector('canvas')
const rendercontext = canvas.getContext("2d")

canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
draw()

window.onresize = e => {
  canvas.width = document.body.clientWidth
  canvas.height = document.body.clientHeight
  draw()
}

function draw() {
  rendercontext.fillStyle = 'bisque'
  rendercontext.fillRect(0, 0, canvas.width, canvas.height)

  const cx = canvas.width / 2
  const cy = canvas.height / 2
  const _ = canvas.width / 4

  const path1 = new Path2D()
  path1.moveTo(0, cy)
  path1.lineTo(cx * 2, cy)

  rendercontext.strokeStyle = 'purple'
  rendercontext.lineWidth = 50
  rendercontext.stroke(path1)

  const path = new Path2D();
  path.moveTo(cx, 0)
  path.lineTo(cx, cy * 2)

  rendercontext.strokeStyle = 'red'
  rendercontext.lineWidth = 10
  rendercontext.stroke(path)

  rendercontext.fillStyle = 'black'
  rendercontext.fillRect(cx - _ / 2, cy - _ / 2, _, _)
}

draw()