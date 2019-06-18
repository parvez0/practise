const numberDict = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
};

function getPhone(message) {
    //handling error
    if (!message || message == "") {
        return "Message is empty";
    }
    //finding the first occurence of double triple or numbers
    message = message.toLowerCase();
    let wordList = message.split(' ');
    let mobile = "";
    for(var i = 0;i<wordList.length;i++) {
        if(wordList[i] === "double") {
            mobile = mobile + wordList[i+1][0];
        } else if (wordList[i] == "triple") {
            mobile = mobile + wordList[i+1][0] +wordList[i+1][0];
        } else {
            mobile = mobile + wordList[i];
        }
    }
    return mobile;

}

function isPhone(phone) {
    let pattern = new RegExp("[1-9]{1}[0-9]{9}");
    let res = pattern.test(phone);
    return res;
}

module.exports = {
    getPhone,
    isPhone
}