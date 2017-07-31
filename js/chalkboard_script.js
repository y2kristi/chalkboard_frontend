$(document).ready(function(){


  $("form#student-signin").submit(function(){
    var email = $("#signin-email").val();
    var pwd = $("#signin-pwd").val();
    $.ajax({
      type: 'POST',
      url: 'http://138.197.44.69:3000/api/v1/signin',
      data: { student: {email: email, password: pwd }},
      success:function(data) {    
        if (data["status"] != "failed")
        {
          $accessToken = data["student"]["activation_token"]
          localStorage.activation_token = $accessToken;
         window.location.href = "dashboard_2.html"
        }
        else
        {
          
          window.location.reload();
          alert("Email or Password not matched");
        }
      }
    });
     return false;
  });

  $("form#student-signup").submit(function(){
    var email = $("#signup-email").val();
    var pwd = $("#signup-pwd").val();
    var pwd_confirmation = $("#signup-pwd-c").val();
    $.ajax({
      type: 'POST',
      url: 'http://138.197.44.69:3000/api/v1/signup',
      data: {student: {email: email, password: pwd, password_confirmation: pwd_confirmation }},
      success:function(data) {
        $accessToken = data["student"]["activation_token"]
        if (data["status"] != "failed")
        {
          localStorage.activation_token = $accessToken;
          window.location.href = "dashboard_2.html"

        }
        else
        {
          window.location.reload();
          alert("password or password confirmation doesn't match");
        }

      }
    });
    return false;
  }); 

  $("form#edit-student-form").submit(function(){
    var email = $(".student_edit_email").val();
    var nickname = $(".student_edit_nickname").val();
    var first = $(".student_edit_first").val();
    var last = $(".student_edit_last").val();
    var age = $(".student_edit_age").val();
    var school = $(".student_edit_school").val();
    var grade = $(".student_edit_grade").val();
    var island = $(".student_edit_island").val();
    var gender =  $(".student_edit_gender").val();
    if (localStorage.activation_token != "")
    {
      $.ajax({
      type: 'PUT',
      url: 'http://138.197.44.69:3000/api/v1/profiles/update',
      data: {student: {activation_token: localStorage.activation_token, email: email, nickname: nickname, first: first, last: last, age: age, school: school, grade: grade, island: island, gender: gender}}
      });
    }
  }); 

  $(".student-logout").click(function(){
    localStorage.activation_token = "";
    window.location.href = "index.html"
  });

  $(".student-profile").click(function(){ 
    window.location.href = "student_profile.html"
  });

  $("#to-continue").click(function(){ 
    window.location.href = "index.html"
  });

	$(".stop-double-tap").on('click touchend', function(e) {
		var el = $(this);
		var link = el.attr('href');
		window.location = link;
	});
 
});
   
