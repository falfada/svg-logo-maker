const { Shape, Triangle, Circle, Square } = require("./shapes.js");

class Svg {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;

    // Checks what type of shape it is to call the constructor
    switch (this.shape) {
      case "Triangle":
        this.shapeInstance = new Triangle();
        break;
      case "Circle":
        this.shapeInstance = new Circle();
        break;
      case "Square":
        this.shapeInstance = new Square();
        break;
      default:
        console.error("Unknown shape type");
    }

    this.shapeInstance.setColor(this.shapeColor);
  }

  createSvg() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeInstance.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}
module.exports = Svg;
