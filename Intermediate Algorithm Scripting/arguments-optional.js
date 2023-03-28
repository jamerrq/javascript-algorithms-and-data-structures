function addTogether() {
    if(arguments.length == 1){
        if(typeof arguments[0] == "number"){
            let first_arg = arguments[0];
            return function(y){
                // console.log(arguments[0]);
                if(typeof y != "number")return undefined;
                return first_arg + y;
            }
        }
    }else if(arguments.length == 2){
        if((typeof arguments[0] == "number")
        && (typeof arguments[1] == "number")){
            return arguments[1] + arguments[0];
        }
        return undefined;
    }
    return undefined;
}

console.log(addTogether(5)(7));
console.log(addTogether(2)([3]));
console.log(addTogether(2));
