$(document).ready(function () {
  $.getJSON('../data/employees.json', function (data) {
    var statusHTML = '<ul class="bulleted">';
    $.each(data,function (index, employee) {
      if (employee.inoffice === true) {
        statusHTML +='<li class="in">';
      } else {
        statusHTML +='<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML)
  }); // end getJSON
}); // end ready


$.ajax('../data/rooms.json', {
    type : 'GET',
    dataType: "json",
    success: function (response) {
      var statusHTML2 = '<ul class="rooms">';
    $.each(response,function (index, rooms) {
      if (rooms.available === true) {
        statusHTML2 +='<li class="empty">';
      } else {
        statusHTML2 +='<li class="full">';
      }
      statusHTML2 += rooms.room + '</li>';
    });
    statusHTML2 += '</ul>';
    $('#roomList').html(statusHTML2)
  } // end getJSON
  });
       
