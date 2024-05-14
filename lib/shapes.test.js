// Test text
// Test shape
// Test write file
const { Shape, Triangle, Circle, Square } = require("./shapes.js");
const Svg = require("./svg.js");

describe(Shape, () => {
  // Test Triangle
  describe("Triangle shape", () => {
    it("it should display a blue triangle", () => {
      const expectedResult =
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(expectedResult);
    });
  });
  // Test Circle
  describe("Circle Shape", () => {
    it("it should display a pink circle", () => {
      const expectedResult = '<circle cx="150" cy="100" r="100" fill="pink"/>';
      const shape = new Circle();
      shape.setColor("pink");
      expect(shape.render()).toEqual(expectedResult);
    });
  });
  // Test Square
  describe("Square Shape", () => {
    it("it should display a brown square", () => {
      const expectedResult =
        '<rect x="50" y="0" width="200" height="200" fill="brown"/>';
      const shape = new Square();
      shape.setColor("brown");
      expect(shape.render()).toEqual(expectedResult);
    });
  });
});

describe(Svg, () => {
// Test text
describe("SVG Text", () => {
    it("it should display a svg text", () => {
     const expectedResult = '<text x="150" y="125" font-size="60" text-anchor="middle" fill="black">abc</text>';
     const text = new Svg("abc", "black");
     expect(text.createSvg()).toEqual(expectedResult);
    }) 
 });
});