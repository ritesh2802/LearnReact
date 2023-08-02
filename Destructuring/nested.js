let obj = {
    name:"Ritesh",
    add: {
        country:"India",
        state:{ 
            code:"DL",
            pin:"111111"
        }
    }
}

let {name} = obj;
// console.log(name);

let {add:{country:ctry}} = obj;
console.log(ctry);

let {add:{state:{code:cd,pin:pn}}}=obj;
console.log(pn+" "+cd);