// let res = await fetch(`http://localhost:3000/blogs`, { 
//     method:"POST",
//     body: JSON.stringify(blogData),
//     headers:{
//         "Content-Type": "application/json"
//     }
// })

// let result = await fetch(`http://localhost:3000/blogs/${id}`, {
//     method:"PATCH",
//     body: JSON.stringify(blogData),
//     headers:{
//         "Content-Type": "application/json"
//     }
// })

class Person{
    #wealth;
    constructor(wealth){
        this.#wealth = wealth;
    }
    #displayWealth(){
        return this.#wealth;
    }
    printWealthy(){
        let wealth = this.#displayWealth();
        if(wealth>1000){
            console.log("Wealthy Person");
        }else{
            console.log("Not a wealthy Person");
        }
    }
}

class Rahul extends Person{
    constructor(work, wealth){
        super(wealth);
        this.work = work;
    }
    displayWealth(){
        console.log(this.wealth)
    }
}

let c1 = new Rahul("sde", 100000000);
c1.printWealthy();