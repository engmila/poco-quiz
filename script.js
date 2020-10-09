let rightAnswerList = ["c","d","a","c","c"];

let counterTrue = 0;
let counterFalse = 0;

function compare(){

    console.log(1);

    let storageList = localStorage.getItem("storageList");
    let userAnswerList = JSON.parse(storageList);

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

    console.log(counterTrue);
}

function feedback(){

    console.log(2);

    console.log(counterTrue);

    var h3 = document.querySelector('h3');

    switch(counterTrue){
        case 0:
            h3.innerHTML = "You have to study more.";
        break;
        case 1:
            h3.innerHTML = "You have to study a little bit more.";
        break;
        case 2:
            h3.innerHTML = "It will be better.";
        break;
        case 3:
            h3.innerHTML = "You are on a good way.";
        break;
        case 4:
            h3.innerHTML = "Good! You did well.";
        break;
        case 5:
            h3.innerHTML= "Congrats! You are a genius.";
    }
}

function results(){
    compare();
    feedback();
}

function nextQuestion(){
    //Check radio button

    let userAnswer = "";

    let checkAnswer = false;

    let firstAnswer = document.getElementById('a').checked;
    let secondAnswer = document.getElementById('b').checked;
    let thirdAnswer = document.getElementById('c').checked;
    let fourthAnswer = document.getElementById('d').checked;

    if (firstAnswer)
    {
        userAnswer = "a";
        checkAnswer = true;
    }

    if (secondAnswer)
    {
        userAnswer = "b";
        checkAnswer = true;
    }

        if (thirdAnswer)
    {
        userAnswer = "c";
        checkAnswer = true;
    }

    if  (fourthAnswer)
    {
        userAnswer = "d";
        checkAnswer = true;
    }    

    if(checkAnswer){

        let nextPage = 0;

        if(window.location.pathname === "/index.html"){

            let userAnswerList = [];

            console.log(1);

            userAnswerList.push(userAnswer);
            localStorage.setItem("storageList", JSON.stringify(userAnswerList));

            console.log(userAnswerList.length)

            nextPage = userAnswerList.length + 1;
        }
        else {
            console.log(2);

            let storageList = localStorage.getItem("storageList");
            let userAnswerList = JSON.parse(storageList);

            userAnswerList.push(userAnswer);
            localStorage.setItem("storageList", JSON.stringify(userAnswerList));
            
            console.log(userAnswerList)
            console.log(userAnswerList.length)

            nextPage = userAnswerList.length + 1;
        }

        if(nextPage == 6)
        {
            window.location.replace("results.html");
        } else {
            window.location.replace("question" + nextPage + ".html");
        }
        
    }
    else{
        alert("You can not continue without answering the question.")
    }
}