"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Address_1 = require("./Address");
var customer;
customer.CustomerName = "Venkat";
customer.CustomerAddress = new Address_1.Address("6/225 Buckley Street", "", "Essendon", "Australia");
customer.DateOfBirth = new Date("10/10/1980");
alert(customer.toString());
