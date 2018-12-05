/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q4Result = $("#question4").val();
        var num1 = question1(q1Result);
        var num2 = question2(q2Result);
        var num3 = question3(q3Result);
        var num4 = question4(q4Result);
        var totalScore = num1 + num2 + num3 + num4;
        if (totalScore <= 4) {
            $("#house").text("Congrats, " + name + "! You're in Wampus");
            $("#houseimg").attr("src","https://vignette.wikia.nocookie.net/harrypotter/images/e/e6/Wampus_ClearBG_2.png/revision/latest?cb=20161204224541");
        }
        else if (totalScore > 4 && totalScore <= 9) {
            $("#house").text("Congrats, " + name + "! You're in Thunderbird");
            $("#houseimg").attr("src","https://vignette.wikia.nocookie.net/harrypotter/images/1/1a/Thundebird_ClearBG_2.png/revision/latest/scale-to-width-down/350?cb=20161204221417");
        }
        else if (totalScore > 9 && totalScore <= 10) {
            $("#house").text("Congrats, " + name + "! You're in Pukwudgie");
            $("#houseimg").attr("src","https://i.pinimg.com/originals/f0/76/fb/f076fb0c9dc4e4f269061e6cbd10e2f5.png");
        }
        else if (totalScore > 10) {
            $("#house").text("Congrats, " + name + "! You're in Horned Serpent");
            $("#houseimg").attr("src","https://vignette.wikia.nocookie.net/harrypotter/images/3/3f/Horned_Serpent_ClearBG_2.png/revision/latest/scale-to-width-down/350?cb=20161204071312");
        }
        console.log("this is " + totalScore);
    });
    
    function question1(q1Result) {
        var num1;
        if (q1Result == "freedom") {
            num1 = 1;
        }
        else if (q1Result == "individuality") {
            num1 = 2;
        }
        else if (q1Result == "service") {
            num1 = 3;
        }
        else if (q1Result == "ambition") {
            num1 = 4;
        }
        else {
            window.alert("your answer to question 1 is not a valid input");
        }
        return num1;
    }
    
    function question2(q2Result) {
        var num2;
        if (q2Result == "fantasy") {
            num2 = 1;
        }
        else if (q2Result == "adventure") {
            num2 = 2;
        }
        else if (q2Result == "mystery") {
            num2 = 3;
        }
        else if (q2Result == "science fiction") {
            num2 = 4;
        }
        else {
            window.alert("your answer to question 2 is not a valid input");
        }
        return num2;
    }
    
    function question3(q3Result) {
        var num3;
        if (q3Result == "green") {
            num3 = 1;
        }
        else if (q3Result == "red") {
            num3 = 2;
        }
        else if (q3Result == "yellow") {
            num3 = 3;
        }
        else if (q3Result == "blue") {
            num3 = 4;
        }
        else {
            window.alert("your answer to question 3 is not a valid input");
        }
        return num3;
    }
    
    function question4(q4Result) {
        var num4; 
        if (q4Result == "creature") {
            num4 = 1;
        }
        else if (q4Result == "city") {
            num4 = 2;
        }
        else if (q4Result == "plant") {
            num4 = 3;
        }
        else if (q4Result == "spell") {
            num4 = 3;
        }
        else {
            window.alert("your answer to question 4 is not a valid input");
        }
        return num4;
    }
});