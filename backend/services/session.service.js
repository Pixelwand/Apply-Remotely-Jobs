import config from 'config';
import axios from 'axios';
import qs from 'qs';

 const GoogleOauthToken  ={
  access_token,
  id_token,
  expires_in,
  refresh_token,
  token_type,
  scope,
}

export const getGoogleOauthToken = async ({
  code,
}) => {
  const rootURl = 'https://oauth2.googleapis.com/token';

  const options = {
    code,
    client_id: config.get<string>('googleClientId'),
    client_secret: config.get<string>('googleClientSecret'),
    redirect_uri: config.get<string>('googleOauthRedirect'),
    grant_type: 'authorization_code',
  };
  try {
    const { data } = await axios.post<GoogleOauthToken>(
      rootURl,
      qs.stringify(options),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return data;
  } catch (err) {
    console.log('Failed to fetch Google Oauth Tokens');
    throw new Error(err);
  }
};

const GoogleUserResult = {
  id,
  email,
  verified_email,
  name,
  given_name,
  family_name,
  picture,
  locale
}

export async function getGoogleUser({
  id_token,
  access_token,
}){
  try {
    const { data } = await axios.get<GoogleUserResult>(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
      {
        headers: {
          Authorization: `Bearer ${id_token}`,
        },
      }
    );

    return data;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
}

