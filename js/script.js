$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault();
        var number = $("input#number").val();
        var result = parseInt(number);
        austin(result);
        moringa.forEach(function(result) {
        $("#list-items").append("<li>" + result + "</li>");      
        });
        });
       });
     var moringa = [];
     function austin (result) {
         for(index=1;index<=result;index++){
             if(index % 15===0) {
              moringa.push("pingpong");
            }
            else if (index%5===0) {
             moringa.push("pong");
            }
             else if (index% 3 === 0) {
            moringa.push("ping");
             
            }
            else {
            moringa.push(index);
            }
        }
    };        
            
            
