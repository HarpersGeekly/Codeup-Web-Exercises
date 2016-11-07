var luckyNumber = Math.floor(Math.random()* 6);
    console.log(luckyNumber);

var total = 60;
var discountPercent = 0;
var discount;

switch(luckyNumber) {
    case (1):
        discountPercent = 0.1;
        console.log("You get a 10% discount");
        break;
    case (2):
        discountPercent = 0.25;
        console.log("You get a 25% discount");
        break;
    case (4):
        discountPercent = 0.5;
        console.log("You get a 50% discount");
        break;
    case (5):
        discountPercent = 1;
        console.log("It's free!");
        break;
    default:
        discountPercent = 0;
        console.log("No discount for you!");

}
// apply the discountPercent
discount = total - (total * discountPercent);

console.log('You will pay ' + (total - discount));

console.log('Your original price was: ' + total);
console.log('Your lucky number is: ' + luckyNumber);
console.log('You get a discount of ' + discountPercent);
console.log('You saved $' + discount + '.');
console.log('You will pay $' + (total - discount) + '.');


var monthofYear = Math.floor(Math.random()* 13);

switch(monthofYear) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('June');
        break;
    case 7:
        console.log('July');
        break;
    case 8:
        console.log('August');
        break;
    case 9:
        console.log('September');
        break;
    case 10:
        console.log('October');
        break;
    case 11:
        console.log('November');
        break;
    case 12:
        console.log('December');

}
