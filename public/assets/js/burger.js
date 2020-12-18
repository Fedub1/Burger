// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
   
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#newBurger").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    $(".change-to-devoured-burger").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var id = $(this).data("id");
          var devouredBurger =
            $(this).data("devouredBurger");
            var devouredBurger = {
                devoured: devouredBurger
            
        };
  
  $.ajax("/api/burgers"+ id, {
    type: "PUT",
    data: devouredState
  }).then(
    function() {
      console.log("Devoured Burger");
      // Reload the page to get the updated list
      location.reload();
    });
});
});