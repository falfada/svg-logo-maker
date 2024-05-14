// Triangle, Circle, and Square classes
// Common funcitonality and properties are under Shape
// render() methos that returns a string for the corresponding SVG with the given shape color
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

class Shape{
    setColor(color){
        this.color = color;
    }

}

class Triangle extends Shape{
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}


module.exports = {Shape, Triangle};