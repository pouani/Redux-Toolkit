
import HttpService from '../../service/HttpService';
import ApiConfig from '../../service/ApiConfig';
import { IUser, IUserForm } from './User.type';

export const getUserListApi = async () => {
    return await HttpService.get<IUser[]>(ApiConfig.user)
}

export const createUserApi = async (data: IUserForm) => {
    return await HttpService.post<IUser>(ApiConfig.user, data);
}

export const deleteUserApi = async (id: number) => {
    const url = `${ApiConfig.user}/${id}`
    return await HttpService.delete(url)
}