"use strict";
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
if (customer !== null && customer !== undefined) {
    console.log(customer.birthday);
}
//# sourceMappingURL=index.js.map