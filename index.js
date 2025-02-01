var Fuz = "Fuzz";
var Buz = "Buzz";
var FuzBuz = "FuzzBuzz";
for(let i = 0; i <= 100; i++){
    let output = "";
    
    if(i % 3 === 0 && i % 5 === 0){
        output = FuzBuz;
    }
    else if(i % 3 === 0){
        output = Fuz;
    }
    else if(i % 5 === 0){
        output = Buz;
    }
    else{
        output = i;
    }
    console.log(output);
}