$(".option").mouseover(function () {
  $(".option").removeClass("active");
  $(this).addClass("active");
  
  });

  

$(".terra").mouseover(function () {
  $(".agua").removeClass("ativo");
  $(".ar").removeClass("ativo");
  $(".terra").addClass("ativo");
  $(".option").removeClass("active");
  $(".opt1").addClass("active");
  $(".cards-terra").removeClass("d-none");
  $(".cards-terra").addClass("d-block");
  $(".cards-agua").addClass("d-none");
  $(".cards-ar").addClass("d-none");
  
  });
  
$(".agua").mouseover(function () {
  $(".terra").removeClass("ativo");
  $(".ar").removeClass("ativo");
  $(".agua").addClass("ativo");
  $(".option").removeClass("active");
  $(".opt1").addClass("active");
  $(".cards-agua").removeClass("d-none");
  $(".cards-agua").addClass("d-block");
  $(".cards-terra").addClass("d-none");
  $(".cards-ar").addClass("d-none");
  
  });

  $(".ar").mouseover(function () {
    $(".agua").removeClass("ativo");
    $(".terra").removeClass("ativo");
    $(".ar").addClass("ativo");
    $(".option").removeClass("active");
    $(".opt1").addClass("active");
    $(".cards-ar").removeClass("d-none");
    $(".cards-ar").addClass("d-block");
    $(".cards-terra").addClass("d-none");
    $(".cards-agua").addClass("d-none");
    
    });
  
  
  