
import HttpService from '../../service/HttpService';
import ApiConfig from '../../service/ApiConfig';
import { IUser } from './User.type';

export const getUserList = async () => {
    return await HttpService.get<IUser[]>(ApiConfig.user)
}