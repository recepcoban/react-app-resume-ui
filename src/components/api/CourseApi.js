import axios from "axios";
import * as Constants from "../common/Constants";

export async function getCourseById(id) {
  return await axios
    .get(Constants.ROOT_PATH + Constants.COURSE_PATH + "/info/" + id)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error.response.data.message);
      return error;
    });
}
