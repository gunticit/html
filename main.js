$('#menuToggle').on('click', function() {
    $('#mobileMenu').toggle();
  });

$(document).on('click', function(e) {
    if (!$(e.target).closest('#menuToggle, #mobileMenu').length) {
        $('#mobileMenu').hide();
    }
});

$(document).on('click', '.accordion-header', function() {
  var $item = $(this).closest('.accordion-item');
  var $body = $item.find('.accordion-body');
  var $arrow = $(this).find('.arrow');
  if ($body.is(':visible')) {
    $body.slideUp(180);
    $(this).removeClass('active');
  } else {
    $item.siblings().find('.accordion-body').slideUp(180);
    $item.siblings().find('.accordion-header').removeClass('active');
    $body.slideDown(180);
    $(this).addClass('active');
  }
});

$(document).on('click', '#tab-batdau, #tab-tinhnang, #tab-khactphuc, #tab-baomat', function() {
  $('#tab-batdau, #tab-tinhnang, #tab-khactphuc, #tab-baomat').removeClass('active');
  $(this).addClass('active');
  $('#content-batdau, #content-tinhnang, #content-khactphuc, #content-baomat').hide();
  if (this.id === 'tab-batdau') $('#content-batdau').show();
  if (this.id === 'tab-tinhnang') $('#content-tinhnang').show();
  if (this.id === 'tab-khactphuc') $('#content-khactphuc').show();
  if (this.id === 'tab-baomat') $('#content-baomat').show();
});

$(document).ready(function() {
  $('#ic-eye-close').show();
  $('#ic-eye-open').hide();

  $('#ic-eye-close, #ic-eye-open').on('click', function() {
    var $passwordInput = $('#password');
    var isPassword = $passwordInput.attr('type') === 'password';

    if (isPassword) {
      $passwordInput.attr('type', 'text');
      $('#ic-eye-close').hide();
      $('#ic-eye-open').show();
    } else {
      $passwordInput.attr('type', 'password');
      $('#ic-eye-close').show();
      $('#ic-eye-open').hide();
    }
  });
});
