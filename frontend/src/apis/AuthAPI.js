import axios from "axios";

const baseUrl = "http://localhost:5001";

const authApi = {
  auth() {
    return {
      register: (newUser) =>
        axios.post(baseUrl + "/api/user/register", newUser),
      login: (loginUser) => axios.post(baseUrl + "/api/user/login", loginUser),
      getDetails: (token) =>
        axios.get(baseUrl + "/api/user/user_token/getdetails", {
          headers: { Authorization: `Bearer ${token}` },
        }),
    };
  },
};
export default authApi;
