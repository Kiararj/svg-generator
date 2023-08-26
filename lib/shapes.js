//parent class Shape
class Shape {
  constructor(name, textColor, shapeColor) {
    this.name = name;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

//child class Triangle
class Triangle extends Shape {
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150, 18 244, 182 56, 182"  fill="${this.shapeColor}" /><text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.name}</text></svg>`;
  }
}

//child class Circle
class Circle extends Shape {
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.name}</text></svg>`;
  }
}

//child class Square
class Square extends Shape {
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="200"><rect width="200" height="200" fill="${this.shapeColor}" /><text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.name}</text></svg>`;
  }
}

module.exports = { Triangle, Circle, Square };
