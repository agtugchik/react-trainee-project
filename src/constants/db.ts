export type User = {
  id: string;
  firstName: string;
  secondName: string;
  email: string;
  password: string;
};

export const Users: User[] = [
  { id: '0', firstName: '', secondName: '', email: 'artur@mail.ru', password: '1Artur' },
];

export default Users;
