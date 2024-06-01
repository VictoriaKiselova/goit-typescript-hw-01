interface Address {
  city: string;
  country: string;
}
interface FirstUser {
  name: string;
  age: number;
  email: string;
  address?: Address;
}
const mango: FirstUser = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

interface SecondUser {
  name: string;
  age: number;
  email: string;
}
const poly: SecondUser = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};
