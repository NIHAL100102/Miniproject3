var roll_btn = document.getElementById("roll_btn");
var playerWins = 0;
var godWins = 0;

roll_btn.addEventListener("click", function (e) {
    var randomno1 = Math.floor(Math.random() * 6) + 1;
    var randomimg1 = "Images/dice" + randomno1 + ".png";
    var img1 = document.getElementById("img1");
    img1.setAttribute("src", randomimg1);

    var randomno2 = Math.floor(Math.random() * 6) + 1;
    var randomimg2 = "Images/dice" + randomno2 + ".png";
    var img2 = document.getElementById("img2");
    img2.setAttribute("src", randomimg2);

    var respointer = document.getElementById("res");

    if (randomno1 > randomno2) {
        respointer.innerHTML = "YOU GET A POINT";
        playerWins++;
    } else if (randomno2 > randomno1) {
        respointer.innerHTML = "GOD GOT A POINT";
        godWins++;
    } else {
        respointer.innerHTML = "DRAW  ";
    }
    var resultCounter1 = document.getElementById("result_counter1");
    var resultCounter2 = document.getElementById("result_counter2");
    resultCounter1.value = "You: " + playerWins ;
    resultCounter2.value = "God: "  + godWins;
    if(playerWins==5)
        {respointer.innerHTML = "YOU ARE THE WINNER";
        playerWins=0;
        godWins=0;
    }
    else if(godWins==5)
     {   respointer.innerHTML= "GOD IS THE WINNER"
        playerWins=0;
        godWins=0;
    }
});
