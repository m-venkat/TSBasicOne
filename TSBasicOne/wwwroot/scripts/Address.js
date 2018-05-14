"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Address = /** @class */ (function () {
    function Address(_addressLine1, _addressLine2, _city, _country) {
        var _this = this;
        //Getter Setter Implementation
        this._addressLine1 = "";
        this.AddressLine2 = undefined;
        this.City = undefined;
        this.Country = undefined;
        this.toString = function () {
            var customerDetail = "";
            customerDetail += "Customer Address";
            customerDetail += "\n-------------------------------------------------------------------------------";
            customerDetail += "\n" + _this.AddressLine1; //Template Literals
            customerDetail += "\n" + _this.AddressLine2; //Template Literals
            customerDetail += "\n" + _this.City; //Template Literals
            customerDetail += "\n" + _this.Country; //Template Literals
            customerDetail += "\n--------------------------------------------------------------------------------";
            return customerDetail;
        };
        this.AddressLine1 = _addressLine1;
        this.AddressLine2 = _addressLine2;
        this.City = _city;
        this.Country = _country;
    }
    Object.defineProperty(Address.prototype, "AddressLine1", {
        get: function () {
            return this._addressLine1;
        },
        set: function (value) {
            this._addressLine1 = value;
        },
        enumerable: true,
        configurable: true
    });
    return Address;
}());
exports.Address = Address;
