import axios from "axios";
import * as Constants from "../common/Constants";

export default async function createUser(user) {
  return await axios
    .post(Constants.ROOT_PATH + Constants.CREATE_USER_PATH, {
      email: user.email,
      fullName: user.fullName,
      title: user.title,
      employer: user.employer,
      birthDate: user.birthDate,
      phone: user.phone,
      location: user.location,
      summary: user.summary,
    })
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error.response.data.message);
      return error;
    });
}
