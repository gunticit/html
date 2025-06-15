$('#menuToggle').on('click', function() {
    $('#mobileMenu').toggle();
  });

$(document).on('click', function(e) {
    if (!$(e.target).closest('#menuToggle, #mobileMenu').length) {
        $('#mobileMenu').hide();
    }
});