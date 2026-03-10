
export interface CreateUserDTO {
    email: string;
    password: string;
}

export interface UpdateUser extends CreateUserDTO {
    id: number;
}

export interface DeleteUser {
    id: number;
}