import axios from "axios";
import * as Constants from "../common/Constants";

export default async function getDefaultResume() {
  return await axios
    .get(Constants.ROOT_PATH + Constants.DEFAULT_RESUME_PATH)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error.response.data.message);
      return error;
    });
}
