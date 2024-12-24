export interface IUser {
  id: string;
  email: string;
  password: string;
  name: string;
  photoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateUser {
  email: string;
  password: string;
  name: string;
}

export interface IUpdateUser {
  email?: string;
  password?: string;
  name?: string;
}