console.log(this); //refers to the current object

function fn(){
    console.log(this); //refers to the object from which the function is called
}

fn();


let obj={
    name:"ritesh",
    func:fn,
    nest:nested,
    nest2:nested2
}

obj.func();//self obj

function nested(){
    console.log(this);
    function abc(){
        console.log(this);
    }
    // abc();
    //using bind
    let ret = abc.bind(this);
    ret();
}

obj.nest(); // func ke andar wala func windows padega as bahar wala self obj

// if hm chahte h ki andar wala func hamara this pakde then to bind use kr skte h plus arrow func

function nested2(){
    console.log(this);
    abc=()=>{
        console.log(this);
    }
}

obj.nest2();