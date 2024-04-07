import axios from "axios";

const BASE_URL = "https://bootcamp-api.codeit.kr";

export async function postSignIn(body) {
  try {
    const response = await axios.post(`${BASE_URL}/api/sign-in`, body);
    const responseData = await response.data;

    return responseData;
  } catch (error) {
    const errorData = error.response.data;
    return errorData;
  }
}

export async function postSignUp(body) {
  try {
    const response = await axios.post(`${BASE_URL}/api/sign-up`, body);
    const responseData = await response.data;

    return responseData;
  } catch (error) {
    const errorData = error.response.data;
    return errorData;
  }
}

export async function postCheckEmail() {
  try {
    const response = await axios.post(`${BASE_URL}/api/check-email`, body);
    const responseData = await response.data;

    return responseData;
  } catch (error) {
    const errorData = error.response.data;
    return errorData;
  }
}
