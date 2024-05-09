function createSvg(data) {
    
  return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">
        ${data.logoText}
    </text>
</svg>`;
}
module.exports = { createSvg };
