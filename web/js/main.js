  $(document).ready(function(){
	  $(document).on("mouseenter mouseleave", ".item-character", function(){
	    $(this).find(".action").toggleClass("active");
	  });
  });

