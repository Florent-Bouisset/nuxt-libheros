export interface Pharmacy {
  _id: string;
  name: string;
  road: string;
  zipCode: string;
  phone: string;
  image: string;
  stock: Array<Medicament>;
}
export interface Medicament {
  id: string;
  name: string;
  stock: number;
  price: number;
}

export interface MedicationAvailability {
  id: string;
  name: string;
  availability: [
    {
      id: string;
      name: string;
      price: number;
      stock: number;
    }
  ];
}
