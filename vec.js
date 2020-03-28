class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    plus (vector) {
        // Returns the sum of this vector, and another given vector
        console.log(this.x, vector.x)
        return {x: vector.x + this.x, y: vector.y + this.y};
    }
   
    minus (vector) {
        // Returns the difference of this vector, and another given vector
        return {x: this.x - vector.x, y: this.y - vector.y};
    }

    get length() {
        // Returns the distance of this vector from 0,0
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);