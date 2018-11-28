/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
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
            $("#house").text("you're in wampus");
        }
        else if (totalScore > 4 && totalScore <= 9) {
            $("#house").text("you're in thunderbird");
        }
        else if (totalScore > 9 && totalScore <= 10) {
            $("#house").text("you're in pukwudgie");
        }
        else if (totalScore > 10) {
            $("#house").text("you're in horned serpent");
        }
    });
    
    function question1(q1Result) {
        var num1;
        //wampus
        if (q1Result == "freedom") {
            num1 = 1;
        }
        //thunderbird
        else if (q1Result == "individuality") {
            num1 = 2;
        }
        //pukwudgie
        else if (q1Result == "service") {
            num1 = 3;
        }
        //horned serpent
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
        //wampus
        if (q2Result == "telekinesis") {
            num2 = 1;
        }
        //thunderbird
        else if (q2Result == "enhanced speed") {
            num2 = 2;
        }
        //pukwudgie
        else if (q2Result == "telepathy") {
            num2 = 3;
        }
        //horned serpent
        else if (q2Result == "enhanced intelligence") {
            num2 = 4;
        }
        else {
            window.alert("your answer to question 2 is not a valid input");
        }
        return num2;
    }
    
    function question3(q3Result) {
        var num3;
        //wampus
        if (q3Result == "pain") {
            num3 = 1;
        }
        //thunderbird
        else if (q3Result == "fear") {
            num3 = 2;
        }
        //pukwudgie
        else if (q3Result == "regret") {
            num3 = 3;
        }
        //horned serpent
        else if (q3Result == "shame") {
            num3 = 4;
        }
        else {
            window.alert("your answer to question 3 is not a valid input");
        }
        return num3;
    }
    
    function question4(q4Result) {
        var num4; 
        //wampus
        if (q4Result == "creature") {
            num4 = 1;
        }
        //thunderbird
        else if (q4Result == "city") {
            num4 = 2;
        }
        //pukwudgie
        else if (q4Result == "plant") {
            num4 = 3;
        }
        //horned serpent
        else if (q4Result == "spell") {
            num4 = 3;
        }
        else {
            window.alert("your answer t question 4 is not a valid input");
        }
        return num4;
    }
});