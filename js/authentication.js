$(document).ready(function () {
  window.onload = function(){
    if (localStorage.activation_token != "")
    {
      $.ajax({
        type: 'GET',
        url: 'http://138.197.44.69:3000/api/v1/profiles/show',
        data: {student: {activation_token: localStorage.activation_token}},
        success:function(data) {
          if (data["status"] != "failed")
            {
              user = data.student
              $(".student_view_email").text(user.email);
              $(".student_view_nickname").text(user.nickname);
              $(".student_view_first").text(user.first);
              $(".student_view_last").text(user.last);
              $(".student_view_age").text(user.age);
              $(".student_view_school").text(user.school);
              $(".student_view_grade").text(user.grade);
              $(".student_view_island").text(user.island);
              $(".student_view_gender").text(user.gender);

              $(".student_edit_email").val(user.email);
              $(".student_edit_nickname").val(user.nickname);
              $(".student_edit_first").val(user.first);
              $(".student_edit_last").val(user.last);
              $(".student_edit_age").val(user.age);
              $(".student_edit_school").val(user.school);
              $(".student_edit_grade").val(user.grade);
              $(".student_edit_island").val(user.island);
              $(".student_edit_gender").val(user.gender);
            }
          else
            {
              // window.location.reload();
              alert("Student not found.");
            }
          }
        });
    }
    else
    {
      $('#authentication_message').modal('show');
    }
  };
});
