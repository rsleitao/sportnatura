$(".option").mouseover(function () {
  $(".option").removeClass("active");
  $(this).addClass("active");
  
  });

  $(".categoria").click(function () {
    $(".categoria").removeClass("active");
    $(this).addClass("active");
    
    });
  

$(".terra").click(function () {
  $(".cards-terra").removeClass("d-none");
  $(".cards-terra").addClass("d-block");
  $(".cards-agua").addClass("d-none");
  
  });
  
  $(".agua").click(function () {
    $(".cards-agua").removeClass("d-none");
    $(".cards-agua").addClass("d-block");
    $(".cards-terra").addClass("d-none");
    
    });
  
  
  