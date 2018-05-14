export class Address {
    constructor(_addressLine1: string, _addressLine2: string, _city: string, _country: string) {
        this.AddressLine1 = _addressLine1;
        this.AddressLine2 = _addressLine2;
        this.City = _city; 
        this.Country = _country;
    }
    
    //Getter Setter Implementation
    private _addressLine1: string = "";
    public set AddressLine1(value: string) {
    this._addressLine1 = value;
    }
    public get AddressLine1() {
        return this._addressLine1;
    }

    public AddressLine2: string = undefined;
    public City: string = undefined;
    public Country: string = undefined;
    public toString = (): string => {
        let customerDetail: string = "";
        customerDetail += "Customer Address";
        customerDetail += "\n-------------------------------------------------------------------------------";
        customerDetail += `\n${this.AddressLine1}`;//Template Literals
        customerDetail += `\n${this.AddressLine2}`;//Template Literals
        customerDetail += `\n${this.City}`;//Template Literals
        customerDetail += `\n${this.Country}`;//Template Literals
        customerDetail += "\n--------------------------------------------------------------------------------";
        return customerDetail;
    }
}