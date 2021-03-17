export interface PlayerInterface {
  _id: string;
  firstName: string;
  lastName: string;
  birthdate: Date;
  role: string;
  price: {
    currency: string,
    amount: number,
  };
  contract: string;
  thumbnail: string;
}
