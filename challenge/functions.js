function countA(word){
    key = 'a'; 
    key1 ='A';
    let counter =0;
    for(let i = 0; i < word.length; i++){
    if(word.charAt(i) === key){
        counter++;
    }
    if(word.charAt(i) === key1){
        counter++;
    }
}
console.log(counter);
}


function countVowel(word){
  
    key = 'a'; 
    key1 ='e';
    key2 = 'i';
    key3 = 'o';
    key4 = 'u';
    let counter =0;
    for(let i = 0; i < word.length; i++){
    if(word.charAt(i) === key || word.charAt(i) === key1 || word.charAt(i) === key2 ||
     word.charAt(i) === key3 || word.charAt(i) === key4){
        counter++;
    }   
}
console.log(counter);
}

function sumNum(max){
    let sum = 0;
    for(let i =1; i <= max; i++){
     sum += i;
    }
    console.log(sum);
}

function factorial(num){
    let product = 1;
    for(let i =1; i <= num; i++){
        product *= i;
    }
    console.log(product);
}

function reverse(word){
   console.log(word.split("").reverse().join(""));
}

function goodBye(name){
    console.log("Good bye " +name);
}

countA("aAaaaaAAAAaAaANOnny");
countVowel("noncedomadwe");
sumNum(10);
factorial(5);
reverse("noncedo");
goodBye("Nonny");