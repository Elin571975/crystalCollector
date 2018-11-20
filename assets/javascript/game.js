var randomComputer;
var win  = 0;
var loss = 0;
var userSum = 0;
var play;
    
game();

$(document).on('click', ".crystal", function () {

      var num = parseInt($(this).attr('data-random'));
      userSum += num;
      $('#userSum').html(userSum);
      console.log("userSum is " + userSum);

      if (userSum === randomComputer){
        win++;
        $("#win").html(win);
        userSum = 0;
        game(); 
        alert("You Win!!!");   
      }  

      else if (userSum > randomComputer){
        loss++;
        $("#loss").html(loss);
        userSum = 0;
        game();  
        alert("You Lost!!!");  
      }
    });
 
//==================================================================================

function game() {
    
  $(".crystals").empty();  

  var images = ["assets/images/Picture1.jpg",
                "assets/images/Picture2.jpg",
                "assets/images/Picture3.jpg",
                "assets/images/Picture4.jpg"]

  console.log(images);
                
  //create the random computer number
  randomComputer = Math.floor(Math.random() * 102) + 19;
  $("#randomComputer").html(randomComputer);  
  console.log("computerNumber is " + randomComputer); 

  //create the random crystals number
  for (var i = 0; i < 4; i++) {
 
    var random = Math.floor(Math.random() * 12) + 1;
    console.log("random for crystal is " + random);

    var crystal = $("<div>");
        crystal.attr({
          "class": 'crystal',
          "data-random": random       
        });
        crystal.css({
          "background-image":"url('" + images[i] + "')", //how this worked if it is not url?
          "background-size": "cover"
        })
      $(".crystals").append(crystal);  
      console.log("jesus");  
    }
}






