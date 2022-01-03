jQuery("#design").click(function(){
    jQuery(".design-showing").toggle();
    jQuery(".hide-design-image").toggle();
})

jQuery("#development").click(function(){
    jQuery("#development-showing").toggle();
    jQuery(".hide-development-image").toggle();
});

jQuery("#productManagement").click(function(){
    jQuery("#product-management-showing").toggle();
    jQuery(".hide-product-management").toggle();
});

// $(document).ready(function () {
//   $("#design").click(function () {
//     $("#design-showing").toggle();
//     $(".hide-design-image").toggle();
//   });

//   $("#development").click(function () {
//     $("#development-showing").toggle();
//     $(".hide-development-image").toggle();
//   });

//   $("#productManagement").click(function () {
//     $("#product-management-showing").toggle();
//     $(".hide-product-management").toggle();
//   });
// });

