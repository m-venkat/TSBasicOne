"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer() {
        var _this = this;
        this.CustomerID = 0;
        this.CustomerName = "";
        this.DateOfBirth = undefined;
        this.CustomerAddress = undefined;
        this.CalculateAge = function () {
            return 3;
        };
        this.toString = function () {
            var customerDetail = "";
            customerDetail += "Customer Detail";
            customerDetail += "\n-------------------------------------------------------------------------------";
            customerDetail += "\nCustomer ID:               " + _this.CustomerID; //Template Literals
            customerDetail += "\nCustomer Name:             " + _this.CustomerName; //Template Literals
            customerDetail += "\nCustomer Date Of Birth:    " + _this.DateOfBirth; //Template Literals
            customerDetail += "\nAge:                       " + _this.CalculateAge(); //Template Literals
            customerDetail += "\n" + _this.CustomerAddress; //Template Literals
            customerDetail += "\n--------------------------------------------------------------------------------";
            return customerDetail;
        };
    }
    return Customer;
}());
exports.Customer = Customer;
