$(".option").mouseover(function () {
  $(".option").removeClass("active");
  $(this).addClass("active");
  
  });

  $(".categoria").click(function () {
    $(".categoria").removeClass("active");
    $(this).addClass("active");
    
    });
  

$(".terra").click(function () {
  $(".option").removeClass("active");
  $(".opt1").addClass("active");
  $(".cards-terra").removeClass("d-none");
  $(".cards-terra").addClass("d-block");
  $(".cards-agua").addClass("d-none");
  $(".cards-ar").addClass("d-none");
  
  });
  
$(".agua").click(function () {
  $(".option").removeClass("active");
  $(".opt1").addClass("active");
  $(".cards-agua").removeClass("d-none");
  $(".cards-agua").addClass("d-block");
  $(".cards-terra").addClass("d-none");
  $(".cards-ar").addClass("d-none");
  
  });

  $(".ar").click(function () {
    $(".option").removeClass("active");
    $(".opt1").addClass("active");
    $(".cards-ar").removeClass("d-none");
    $(".cards-ar").addClass("d-block");
    $(".cards-terra").addClass("d-none");
    $(".cards-agua").addClass("d-none");
    
    });
  
  
  