
export interface CreateUserDTO {
    name: string;
    email: string;
    password: string;
}

export interface UpdateUser extends CreateUserDTO {
    id: number;
}

export interface DeleteUser {
    id: number;
}