/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
    });
    
    function question1(q1Result) {
        var num;
        //wampus
        if (q1Result == "freedom") {
            num = 1;
        }
        //thunderbird
        else if (q1Result == "individuality") {
            num = 2;
        }
        //pukwudgie
        else if (q1Result == "service") {
            num = 3;
        }
        //horned serpent
        else if (q1Result == "ambition") {
            num = 4;
        }
    }
    
    function question2(q2Result) {
        var num;
        //wampus
        if (q2Result == "telekinesis") {
            num = 1;
        }
        //thunderbird
        else if (q2Result == "enhanced speed") {
            num = 2;
        }
        //pukwudgie
        else if (q2Result == "telepathy") {
            num = 3;
        }
        //horned serpent
        else if (q2Result == "enhanced intelligence") {
            num = 4;
        }
    }
    
    function question3(q3Result) {
        var num;
        //wampus
        if (q3Result == "pain") {
            num = 1;
        }
        //thunderbird
        else if (q3Result == "fear") {
            num = 2;
        }
        //pukwudgie
        else if (q3Result == "regret") {
            num = 3;
        }
        //horned serpent
        else if (q3Result == "horned serpent") {
            num = 4;
        }
    }
    
    function question4(q4Result) {
        var num; 
        //wampus
        if (q4Result == "creature") {
            num = 1;
        }
        //thunderbird
        else if (q4Result == "city") {
            num = 2;
        }
        //pukwudgie
        else if (q4Result == "plant") {
            num = 3;
        }
        //horned serpent
        else if (q4Result == "spell") {
            num = 3;
        }
    }
});