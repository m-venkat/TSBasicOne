import { Customer } from "./Customer";
import { Address } from "./Address";


let customer: Customer;
customer.CustomerName = "Venkat";
customer.CustomerAddress = new Address("6/225 Buckley Street","", "Essendon","Australia");
customer.DateOfBirth = new Date("10/10/1980");
alert(customer.toString());
