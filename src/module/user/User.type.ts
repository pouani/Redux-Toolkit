export interface IUser {
    id: number;
    name: string;
    email: string;
}

export enum ApiStatus {
    "loading",
    "ideal",
    "success",
    "error"
}

export interface IUserState {
    list: IUser[],
    listStatus: ApiStatus,
    createUserFormStatus: ApiStatus
}

export interface IUserForm {
    name: string;
    email: string;
}