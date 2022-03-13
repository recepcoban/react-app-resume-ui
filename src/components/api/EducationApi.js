import axios from "axios";
import * as Constants from "../common/Constants";

export async function getEducationById(id) {
  return await axios
    .get(Constants.ROOT_PATH + Constants.EDUCATION_PATH + "/info/" + id)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error.response.data.message);
      return error;
    });
}
