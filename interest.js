function calculate () {

  //The values are from the input box in the html file.
  //Whatever is input, the values will be stored in these variables.
  var amount = $('#amount').val();
  var rate = $('#rate').val();
  var month = $('#month').val();
  var interestPercent = amount * (rate/100);
  var total = Number(amount) * month * Number(rate);

  //Rounding the value to two decimal places
  $('#total').val(total.toFixed(2));

  return false;
}

$('#calculator').submit(calculate);