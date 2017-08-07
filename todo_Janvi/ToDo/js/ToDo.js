$(document).ready(
    //Takes the user-inputted list elements
    function(){
      $('#button').click(
        function(){
          var toAdd = $("#new-text").val();
           $('ul').append('<li>' + toAdd + "  " + '<input type="submit" id="done" value="Mark">' + '<input type="submit" id="delete" value="Delete">' + '</li>');
           $("#new-text").val('');
        });
       
      $("#new-text").keyup(function(event){
        if(event.keyCode === 13){
          $("#button").click();
        }         
      });

      //Makes content editable - event binder
      $(document).on('dblclick','li', function(){
        $(this).attr('contenteditable','true');
      });

      //Strikethrough on 'Done' clicked
      $(document).on('click','#done', function(){
        $(this).parent('li').toggleClass('strike');    
      });

      //Delete the element on 'Delete' clicked
      $(document).on("click", "#delete", function(){
        $(this).parent('li').fadeOut();
      });

      //For allowing drag and drop
      $('ul').sortable();  


    }
);