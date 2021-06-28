function either_only(number){
    if(number % 3 ===0 && number % 5 === 0){
        console.log(false);
    }
    else if(number % 3 ===0 || number % 5 === 0){
        console.log(true);
    }
    else {
        console.log(false);
    }
}
either_only(15);
either_only(27);
either_only(100);
either_only(14);