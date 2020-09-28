import { UserObject } from '../types/index';
import axios, { AxiosResponse } from 'axios';

export const LoginWithToken = async (
    Username: string,
    Password: string
  ): Promise<UserObject> => {
    const resJson = await axios
    .post(`https://admin.localwobiz.com`, {Username, Password})
    .then((response: AxiosResponse<UserObject>)  => {
        const { data } = response;
        if(!data.success){
            const postResponse: UserObject = {
                success: data.success,
                message: data.message,
                code: data.code,
                token: '',
                user_id: 0,
                expires: 0,
            };
            return postResponse;
        }
        const postResponse: UserObject = {
            token: data.token,
            user_id: data.user_id,
            expires: data.expires,
            code: 200,
            message: '',
            success: true,
        }
        return postResponse

    });
    return resJson
  };
  