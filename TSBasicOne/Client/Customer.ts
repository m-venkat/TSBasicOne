import { Address } from "./Address"; 

export class Customer
{
    public CustomerID: number = 0;
    public CustomerName: string = "";
    public DateOfBirth: Date = undefined;
    public CustomerAddress: Address = undefined;

    public CalculateAge = (): number =>
    {
        return 3;
    }
    public toString = (): string => {
        let customerDetail: string = "";
        customerDetail += "Customer Detail";
        customerDetail += "\n-------------------------------------------------------------------------------";
        customerDetail += `\nCustomer ID:               ${this.CustomerID}`;//Template Literals
        customerDetail += `\nCustomer Name:             ${this.CustomerName}`;//Template Literals
        customerDetail += `\nCustomer Date Of Birth:    ${this.DateOfBirth}`;//Template Literals
        customerDetail += `\nAge:                       ${this.CalculateAge()}`;//Template Literals
        customerDetail += `\n${this.CustomerAddress}`;//Template Literals
        customerDetail += "\n--------------------------------------------------------------------------------";
        return customerDetail;
    }
}

