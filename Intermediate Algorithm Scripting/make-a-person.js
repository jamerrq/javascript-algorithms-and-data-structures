const Person = function (firstAndLast) {
    let name = firstAndLast;
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFirstName = function () {
        return name.split(" ")[0];
    };
    this.getLastName = function () {
        return name.split(" ")[1];
    };
    this.getFullName = function () {
        return name;
    };
    this.setFirstName = function (first){
        name = first + " " + this.getLastName();
    }
    this.setLastName = function (last){
        name = this.getFirstName() + " " + last;
    }
    this.setFullName = function (firstAndLast){
        // console.log(firstAndLast);
        name = firstAndLast;
        // console.log(firstAndLast);
    }
    return name;
};

const bob = new Person('Bob Ross');
