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

export async function createSocialMedia(socialMedia) {
  return await axios
    .post(Constants.ROOT_PATH + Constants.SOCIAL_MEDIA_PATH, {
      userId: socialMedia.userId,
      type: socialMedia.type,
      url: socialMedia.url,
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

export async function updateSocialMedia(socialMedia) {
  return await axios
    .put(Constants.ROOT_PATH + Constants.SOCIAL_MEDIA_PATH, {
      id: socialMedia.id,
      userId: socialMedia.userId,
      type: socialMedia.type,
      url: socialMedia.url,
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

export async function deleteSocialMedia(id) {
  return await axios
    .delete(Constants.ROOT_PATH + Constants.SOCIAL_MEDIA_PATH + "/" + id)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error.response.data.message);
      return error;
    });
}
