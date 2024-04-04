export interface IUser {
    id: number,
    name: string,
    username: string,
    phone: string,
    website: string,
    email: string,
    address: IAddress,
    company: ICompany,
}

export interface IAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: IGeo,
}

export interface ICompany {
    name: string,
    catchPhrase: string,
    bs: string,
}

export interface IGeo {
    lat: string,
    lng: string,
}

export interface IUserDropdownOption extends IUser {
    label: string;
  }