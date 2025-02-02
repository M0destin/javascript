function whosPaying() {
    
    var arrayOfNames = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    
    var mathcalc = Math.round(Math.random() * (arrayOfNames.length - 1));

    var payer = arrayOfNames[mathcalc];
    
    return payer + " is going to buy lunch today";
  
}

