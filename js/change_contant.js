function changeContent(newContent) {
    var elem = document.getElementById("para1");
    elem.innerText = newContent;
  }
  
  function changePrice(newPrice) {
    var sector1 = document.getElementById("sector1");
    var sector2 = document.getElementById("sector2");
    var elem2 = document.getElementById("para2");
    
    elem2.innerHTML = newPrice;
    if(newPrice == "5 USD"){
      sector1.style.border = "2px solid #FF12BD";
      sector2.style.border = "2px solid #ff12bc00";
    }
    else{
      sector2.style.border = "2px solid #FF12BD";
      sector1.style.border = "2px solid #ff12bc00";
    }
  }

 
  
  $(function(){
  $(document).on('click', '.picture', function(){
  var bg = $(this).data('bg');
  $('.backpic').css('background', 'url("'+ bg +'") 50% 50% scroll no-repeat transparent');
      });
  });