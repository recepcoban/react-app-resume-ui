import axios from "axios";
import * as Constants from "../common/Constants";

export default async function getResume(email) {
  return await axios
    .get(
      Constants.ROOT_PATH +
        (email
          ? Constants.RESUME_BY_EMAIL_PATH + email
          : Constants.DEFAULT_RESUME_PATH)
    )
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error.response.data.message);
      return error;
    });
}
