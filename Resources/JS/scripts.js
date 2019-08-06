/******************
JQuery
*****************/

$(document).ready(function(date) {

      var today, month, date, time, dateTime, myDate;

      today = new Date();
      month = [
        'January', 'February', 'March',
        'April', 'May', 'June',
        'July', 'August', 'September',
        'October', 'November', 'Decemeber'
      ]


      date = month[(today.getMonth())] + ',' + (today.getDate() + 6) + ' ' + today.getFullYear();
      time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      dateTime = date + ' ' + '00:00:00';


      myDate = new Date(dateTime);
      myDate.setDate(myDate.getDate());
      $("#countdown").countdown(myDate, function(event) {
        $(this).html(
          event.strftime(
            '<div class="timer-wrapper"><div class="time">%D</div><span class="text">days</span></div><div class="timer-wrapper"><div class="time">%H</div><span class="text">hrs</span></div><div class="timer-wrapper"><div class="time">%M</div><span class="text">mins</span></div><div class="timer-wrapper"><div class="time">%S</div><span class="text">sec</span></div>'
          )
        );
      });

      $("#selectAll").click(function(){
          $("input[type=checkbox]").prop('checked', $(this).prop('checked'));
      })



      $("#button").click(function() {
        $("#success").html("submitok");
      });



      /******
        $('#newsletter').click(function() {
          $(this).data('clicked', true)
        })

        if ($('#newsletter').data('clicked')){
          $('.newsletter_1').prop('checked', true);
          $('.newsletter_2').prop('checked', true);

        } else {
          $('.newsletter_1').prop('checked', false);
          $('.newsletter_2').prop('checked', false);
        }

      *****/

})
