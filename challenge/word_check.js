function word_check(word){
if(word.length > 6){
    console.log("long");
} else if(word.length < 6){
    console.log("short");
} else{
    console.log("medium");
}
}

word_check("Nonny");
word_check("Lehlohonolo");
word_check("Mahaoz");