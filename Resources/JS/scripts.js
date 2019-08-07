/******************
JQuery
*****************/


$(document).ready(function(date) {

  /******************
  CountDown Clock
  *****************/



  var today, month, date, time, dateTime, myDate;

  today = new Date(); //Retrieving todays date and time.
  month = [ // Creating an array of months
    'January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'Decemeber'
  ]

  // Setting the date to 5 days to stop at Midnight.
  date = month[(today.getMonth())] + ',' + (today.getDate() + 6) + ' ' + today.getFullYear();
  dateTime = date + ' ' + '00:00:00';



  // Utilixed Coundown Plugin from JQuery
  myDate = new Date(dateTime);
  myDate.setDate(myDate.getDate());
  $("#countdown").countdown(myDate, function(event) {
    $(this).html(
      event.strftime(
        '<div class="timer-wrapper"><div class="time">%D</div><span class="text">days</span></div><div class="timer-wrapper"><div class="time">%H</div><span class="text">hrs</span></div><div class="timer-wrapper"><div class="time">%M</div><span class="text">mins</span></div><div class="timer-wrapper"><div class="time">%S</div><span class="text">sec</span></div>'
      )
    );
  });

  /******************
  Checkboxs
  *****************/



  // Created a function that monitors the change to the input[type="checkbox"]. If ant are marked "checked:true" they are all marked true. If any are marked false, they are all marked false.

  $('input[type="checkbox"]').change(function() {
    if ($(this).is(":checked")) {
      $(".newsletter_1").prop("checked", true);
      $(".newsletter_2").prop("checked", true);
    } else if ($(this).is(":not(:checked)")) {
      $(".newsletter_1").prop("checked", false);
      $(".newsletter_2").prop("checked", false);
    }
  });

  // Created an event that when either blue buttons are clicked, and both checkboxes checked, an ajax call will be executed.

  $(".button").click(function() {

    if ($(".newsletter_1:checked,.newsletter_2:checked").length == 2) {




      $.ajax({
        url: 'https://bl45immth4.execute-api.us-east-1.amazonaws.com/production/',
        data: '',
        success: function(data) {
          var x = JSON.parse(data.body) //parse the data at the internal object.
          $(".success").html(x.submitok) //pushed content from object to the Dom
        }

      });



      //


    } else {
      // If both checkboxes are not checked when either button is pushed, alert will open reminding them to check the boxes before proceeding.
      alert("Please check the checkbox before proceeding.")

    }
  });



})
