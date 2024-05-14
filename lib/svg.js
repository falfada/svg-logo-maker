function createSvg(data) {
  const shape = `new ${data.shape}()`;
  // shape.setColor(data.);
  return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">
        ${data.logoText}
    </text>
</svg>`;
}
class Svg {
  constructor(text, textColor) {
    this.text = text,
    this.textColor = textColor
    // this.shape = shape,
    // this.shapeColor = shapeColor
  }
  createSvg() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}
module.exports = Svg;
