var header = document.getElementById("active");
var btns= header.getElementsByClassName("rate");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace("active", "");
    }
    this.className += "active";
    });
  }
  

  function showDefault(){
    var l1=document.getElementById('default');
    l1.style.display = 'block';
    var l2= document.getElementById('secondDiv');
    l2.style.display='none';
  }

  function showsecondDiv(){
    var l2= document.getElementById('secondDiv');
    l2.style.display='block';
    var l1=document.getElementById('default');
    l1.style.display = 'none';
  }
  function selectHandler(select){
    if(select.value == "submit_button"){
      showsecondDiv();
      
    }
    else{
      showDefault();
    }
  }


  var button = document.getElementById('active');
  button.addEventListener('click', function(event) {
    var selectedValue = event.target.value;
    var resultHeading = document.getElementById('result');
    resultHeading.textContent = 'You selected ' + selectedValue +' out of 5';
  });