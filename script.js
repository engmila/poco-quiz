let rightAnswerList = ["c","d","a","c","c"];

let userAnswerList = [];

let counterTrue = 0;
let counterFalse = 0;

/*function compare(){
    for(let i = 0; i < rightAnswerList.length; i++)
    {
        if(userAnswerList[i] == rightAnswerList[i])
        {
            counterTrue++;
        }
        else
        {
            counterFalse++;
        }
    }
}

function feedback(){
    let message ="";
    switch(counterTrue){
        case "0":
            message = "You have to study more.";
        break;
        case "1":
            message = "You have to study a little bit more.";
        break;
        case "2":
            message = "It will be better.";
        break;
        case "3":
            message = "You are on a good way.";
        break;
        case "4":
            message = "Good! You did well.";
        break;
        case "5":
            message = "Congrats! You are a genius.";
    }
    var h3 = document.getElementById("demo");
    h3.innerHTML= message;
}

function results(){
    compare();
    feedback();
}*/

function nextQuestion(){
    //Check radio button

    //userAnswerList = localStorage.getItem(userAnswerList);

    let userAnswer = "";

    console.log(userAnswerList);

    let checkAnswer = false;

    let firstAnswer = document.getElementById('a').checked;
    let secondAnswer = document.getElementById('b').checked;
    let thirdAnswer = document.getElementById('c').checked;
    let fourthAnswer = document.getElementById('d').checked;

    if (firstAnswer)
    {
        userAnswer = "a";
        //userAnswerList.push("a");
        checkAnswer = true;
    }

    if (secondAnswer)
    {
        userAnswer = "b";
        //userAnswerList.push("b");
        checkAnswer = true;
    }

        if (thirdAnswer)
    {
        //userAnswerList.push("c");
        //localStorage.setItem(userAnswerList, "c");
        userAnswer = "c";
        checkAnswer = true;
    }

    if  (fourthAnswer)
    {
        userAnswer = "d";
        //userAnswerList.push("d");
        checkAnswer = true;
    }

    if(checkAnswer){

        console.log(1);

        localStorage.setItem(userAnswerList, userAnswer);

        userAnswerList = localStorage.getItem(userAnswerList);

        //console.log(userAnswerList.toString());

        let counterPage = userAnswerList.length;
        //console.log(counterPage);
        let nextPage = userAnswerList.length + 1;
        console.log(nextPage);
        window.location.replace("question" + nextPage + ".html");

    }
    else{
        alert("You can not continue without answering the question.")
    }
}