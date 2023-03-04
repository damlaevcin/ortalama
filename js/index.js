function ortalama(x, y, z, t) {
    return (parseInt(x) + parseInt(y) + parseInt(z) + parseInt(t)) / 4;
}

$(document).on("click", ".button", function () {
    var number1 = $(".number1").val()
    var number2 = $(".number2").val()
    var number3 = $(".number3").val()
    var number4 = $(".number4").val()
    $(".result").val(ortalama(number1, number2, number3, number4))
})