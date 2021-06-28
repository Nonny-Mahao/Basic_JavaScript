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

count_e("nonny");
count_e("elementeseseze");
count_e("enter");