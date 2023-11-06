import { api } from '.';

interface SignInInput {
  email: string;
  password: string;
}
interface SignInResponse {
  access_token: string;
  refresh_token: string;
}

export const signIn = async ({
  email,
  password,
}: SignInInput): Promise<SignInResponse> => {
  try {
    const respose = await api.post('/auth/signin', { email, password });
    return respose.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
