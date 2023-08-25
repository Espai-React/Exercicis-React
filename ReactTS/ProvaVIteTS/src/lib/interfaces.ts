export interface Address {
	street: string;
	number: number;
	city: string;
	zip: number;
}

export interface Usuari {
	nom: string;
	age: number;
	country: string;
	address: Address;
	admin: boolean;
}
