window.onload = function(){

    myMoveRight(),
    myMoveLeft();
		
	}


function myMoveRight() {
  var elem = document.getElementById("celMoveRight");   
  var pos = 0;
  var idRight = setInterval(frameRight, 14);
  function frameRight() {
    if (pos >= 137) {
			counter=1;
      clearInterval(idRight);
		}
		else {
      pos++; 
      elem.style.left = pos + 'px'; 
    }
  }
}



function myMoveLeft() {
    var elem = document.getElementById("celMoveLeft");   
    var pos = 360;
    var idLeft = setInterval(frameLeft, 14);
    function frameLeft() {
        if (pos <= 270) {
					counter=1;
          clearInterval(idLeft);
				}
				else {
          pos--; 
          elem.style.left = pos + 'px'; 
        }
      
    }
  }