function getOutput(id) {
    return Number(document.getElementById(id).value);
}
function printOutputValue(id, num) {
    document.getElementById(id).value = num;
}
function printOutput(id, num) {
    document.getElementById(id).innerText = num;
}


function bookingCalclution(bookingClass, deraction) {
    var clickCount = getOutput(bookingClass + '-class');
    if (deraction == 'plus') {
        clickCount += 1;

    }
    if (deraction == 'minus' && clickCount > 0) {
        clickCount -= 1;

    }
    printOutputValue(bookingClass + '-class', clickCount);
    var subtotal = 0;
    if (bookingClass == 'first') {
        var economy = getOutput('economy-class');
        subtotal = (clickCount * 150) + (economy * 100);

    }
    if (bookingClass == 'economy') {
        var first = getOutput('first-class');
        subtotal = (clickCount * 100) + (first * 150);

    }
    printOutput('sub-total', subtotal);
    var tax = subtotal * .1;
    printOutput('tax', tax);
    var total = subtotal + tax;
    printOutput('total', total);


}