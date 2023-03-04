import decode from 'jwt-decode';
import { useContext } from 'react';
import { UserContext } from '../../../components/context/user.context';
import { postRequest } from '../../../api/Api';

const { setCurrentUserToken } = useContext(UserContext);
// Saves user token to localStorage
export const setToken = (userToken) => {
  localStorage.setItem('user_token', userToken);
};

// Retrieves the user token from localStorage
export const getToken = () =>
  localStorage.getItem('user_token');
// Checking if token is expired.
export const isTokenExpired = (token) => {
  try {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      return true;
    }
  } catch (err) {
    return false;
  }
};
export const login = async (values) => {
  const { username, password } = values;
  const payload = JSON.stringify({
    username,
    password,
  });
  console.log(payload);
  try {
    const result = await postRequest(
      'api/v1/signin',
      payload
    );
    setCurrentUserToken(
      result.data.data.access_token.token
    );
    setToken(result.data.data.access_token.token);
  } catch (err) {
    return err.message;
  }
  return null;
};
export const loggedIn = () => {
  // Checks if there is a saved token and it's still valid
  const token = getToken(); // Getting token from localstorage
  return !!token && !isTokenExpired(token); // handwaiving here
};

// Clear user token and profile data from localStorage
export const logout = () => {
  localStorage.removeItem('user_token');
  setCurrentUserToken(null);
};

