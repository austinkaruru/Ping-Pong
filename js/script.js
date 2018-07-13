$(document).ready(function() {
    $("form#ping-pong").submit(function(event) {
        event.preventDefault();
        var number = parseInt($("input#number").val());
        var result = numbers(number);
        $("#result").text(result);
 
    });
});
     var numbers = function(number) {
             if((number % 3 ===0) && (number % 5 === 0)) {
                 return "pingpong";
            }
            else if ((number%5)===0) {
                return "pong";
            }
             else if ((number % 3) === 0) {
                 return "ping";
             
            }
            else {
                return number;
            }
        };
                    
            
            
