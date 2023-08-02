let obj = {
    name: "Ritesh",
    add : {
        country: "India",
        state : {
            code : "brch",
            pin : "271801"
        }
    }
}

// let obj2 = obj;
// obj2.name = "abcd",

// let obj2 = {...obj} ///SHALLOW COPY
// obj2.name = "abcd",


// let obj2 = {...obj,add:{...obj.add}}
// obj2.add.country = "abcd"

// let obj2 = {...obj,add:{...obj.add,state:{...obj.add.state}}}  //DEEP COPY

// obj2.add.state.code  = 10

// console.log(obj);
// console.log(obj2);

let obj2 = JSON.parse(JSON.stringify(obj));
obj2.add.state.code  = 10;
console.log(obj);
console.log(obj2);