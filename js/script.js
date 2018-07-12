$(document).ready(function() {
    $("form#ping-pong").submit(function(event) {
        event.preventDefault();
        var number = parseInt($("input#number").val());
        var result = pingpong(number);
        $("#result").text(result);


        });
        var pingpong = function(number) {
             $(number % 3 === 0) 
                return ping;
             $(number % 5 === 0) 
                return pong;
             $(number % 15 === 0)
                return pingpong;
            
        };
    });