<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("#input").on("keyup", function() {
    //the input id is from my allocated id in the index.php page,change the name accordingly if u want to change the input id in the index.php pg
    var value = $(this).val().toLowerCase();
    $("#filter *").filter(function() {
      //add <div id="filter">till where you want to make ur search filter reach and add</div>at the end of ur searching reach
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
</script>
