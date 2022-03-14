import axios from "axios";
import * as Constants from "../common/Constants";

export async function getLanguageById(id) {
  return await axios
    .get(Constants.ROOT_PATH + Constants.LANGUAGE_PATH + "/info/" + id)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error.response.data.message);
      return error;
    });
}

export async function createLanguage(language) {
  return await axios
    .post(Constants.ROOT_PATH + Constants.LANGUAGE_PATH, {
      userId: language.userId,
      name: language.name,
      level: language.level,
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

export async function updateLanguage(language) {
  return await axios
    .put(Constants.ROOT_PATH + Constants.LANGUAGE_PATH, {
      id: language.id,
      userId: language.userId,
      name: language.name,
      level: language.level,
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

export async function deleteLanguage(id) {
  return await axios
    .delete(Constants.ROOT_PATH + Constants.LANGUAGE_PATH + "/" + id)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error.response.data.message);
      return error;
    });
}
