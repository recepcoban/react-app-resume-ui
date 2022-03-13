import axios from "axios";
import * as Constants from "../common/Constants";

export async function getSocialMediaById(id) {
  return await axios
    .get(Constants.ROOT_PATH + Constants.SOCIAL_MEDIA_PATH + "/info/" + id)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error.response.data.message);
      return error;
    });
}
