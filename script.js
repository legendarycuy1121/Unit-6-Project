$("button").click(function(){
    var message1=$(".input1").val();
    var message2=$(".input2") .val();
    var message3=$(".input3") .val();
      console.log(message1);
    console.log(message2);
    console.log(message3);
    console.log(message2*message3*(2050-2019)); 
    $(".results").append("you sleep  "+message1+" hours a day "+" and your name is " +message2+" and you are "+message3+" years old");
    
});
   
    