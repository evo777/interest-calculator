function calculate () {
  var amount = $('#amount').val();
  var rate = $('#rate').val();
  var month = $('#month').val();
  var interestPercent = amount * (rate/100);
  var total = Number(amount) * month * Number(rate);
}