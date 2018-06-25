export default function layerToHtml (layer) {
  const { _class, name, frame: { x, y, width, height } } = layer
  return `<div id="${_class}_${name}" style="position: absolute; top: ${y}px; left: ${x}px; width: ${width}px; height: ${height}px"></div>`
}
