const Svg = require("./svg.js");

describe(Svg, () => {
  describe("SVG", () => {
    it("it should display shape, text and colors", () => {
      const expectedResult =
        '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="white">ABC</text></svg>';
      const text = new Svg("abc", "white", "Triangle", "blue");
      expect(text.createSvg()).toEqual(expectedResult);
    });
  });
});
