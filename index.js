var customerName = 'bob'
console.log (customerName);

var customerName = 'bob'
function upperCaseCustomerName () {
    customerName = customerName.toUpperCase();
}


function setBestCustomer () {
    bestCustomer = 'not bob'
    console.log(bestCustomer);
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
    console.log(bestCustomer);
}
const leastFavoriteCustomer = 'unsuccessfully tries to reassign the least favorite customer'
function changeLeastFavoriteCustomer () {
    leastFavoriteCustomer = 'Assignment to constant variable'
}