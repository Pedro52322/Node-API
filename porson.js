class Person {
    constructor(name){
        this.name = name
    }

    sayMayName(){
    return 	`Hello, My name is ${this.name}!!!`
    }
}

module.exports = {
    Person,
};