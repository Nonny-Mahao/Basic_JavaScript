function count_e(word){
    key = 'e';
    let counter =0;
    for(let i = 0; i < word.length; i++){
    if(word.charAt(i) === key){
        counter++;
    }
    }
    console.log(counter);
}

function is_div_by_5(number){
    if(number % 5 === 0){
        console.log(true);
    } else {
        console.log(false);
    }
}

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

function larger_number(num1, num2){
    if(num1 > num2){
        console.log(num1);
    }
    else if (num1 < num2){
        console.log(num2);
    }
    else{
        console.log(num1 + " is equal to " + num2);
    }
}

function word_check(word){
    if(word.length > 6){
        console.log("long");
    } else if(word.length < 6){
        console.log("short");
    } else{
        console.log("medium");
    }
    }

console.log("Function that checks the length of the word");
    
    word_check("Nonny");
    word_check("Lehlohonolo");
    word_check("Mahaoz");

    console.log("Function that returns a larger number between two numbers");
larger_number(1, 3);
larger_number(6, 3);
larger_number(4, 4);

console.log("Function that prints true if a number is divisible by either 5 or 3 not both");
either_only(15);
either_only(27);
either_only(100);
either_only(14);

console.log("Function that prints true if a number is divisible by 5");
is_div_by_5(103);
is_div_by_5(300);

console.log("Function that counts the number of vowel e in a word");
count_e("nonny");
count_e("elementeseseze");
count_e("enter");