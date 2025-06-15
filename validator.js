function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
function validatePhone(phone) {
    var re = /^\\d{8,15}$/;
    return re.test(phone);
}
  
$('#registerForm').on('submit', function(e) {
    var isValid = true;
  
    var fullname = $('#fullname').val().trim();
    var email = $('#email').val().trim();
    var phone = $('#phone').val().trim();
    var agree = $('#agree').is(':checked');
    var captcha = grecaptcha.getResponse();
  
    $('.error').text('');
  
    if (fullname === '') {
      $('#fullnameError').text('Vui lòng nhập họ và tên.');
      isValid = false;
    }
  
    if (email === '') {
      $('#emailError').text('Vui lòng nhập email.');
      isValid = false;
    } else if (!validateEmail(email)) {
      $('#emailError').text('Email không hợp lệ.');
      isValid = false;
    }
  
    if (phone !== '' && !validatePhone(phone)) {
      $('#phoneError').text('Số điện thoại không hợp lệ.');
      isValid = false;
    }
  
    if (!agree) {
      $('#agreeError').text('Bạn phải đồng ý với điều khoản.');
      isValid = false;
    }
  
    if (captcha.length === 0) {
      $('#captchaError').text('Vui lòng xác thực reCAPTCHA.');
      isValid = false;
    }
  
    if (!isValid) {
      e.preventDefault();
    }
});

$('#loginForm').on('submit', function(e) {
    e.preventDefault();
    var email = $('#email').val().trim();
    var password = $('#password').val().trim();
    var isValid = true;

    $('#emailError').text('');
    $('#passwordError').text('');

    if (email === '') {
        $('#emailError').text('Vui lòng nhập email.');
        isValid = false;
    } else if (!validateEmail(email)) {
        $('#emailError').text('Email không hợp lệ.');
        isValid = false;
    }

    if (password === '') {
        $('#passwordError').text('Vui lòng nhập mật khẩu.');
        isValid = false;
    }
  
    if (!isValid) {
      e.preventDefault();
    }
});