function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(shout(string));
}

function logWhisper(string) {
    console.log(whisper(string));
}

function sayHiToGrandma(string) {
    if (string === string.toUpperCase()) {
            return 'YES INDEED!';
    }
    else if (string === string.toLowerCase()){
        return 'I can\'t hear you!';
    }
    else if (string === `I love you, Grandma.`){
            return `I love you, too.`;
    }
    else {
        return `You are so articulate!`
    }
}
console.log(sayHiToGrandma(whisper(`Can you hear me grandma?`)));
console.log(sayHiToGrandma(shout(`Can you hear me grandma?`)));
console.log(sayHiToGrandma('The mushrooms are sprouting from the eyes of the lost deer.'));
console.log(sayHiToGrandma(`I love you, Grandma.`))
