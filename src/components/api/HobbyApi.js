import axios from "axios";
import * as Constants from "../common/Constants";

export async function getHobbyById(id) {
  return await axios
    .get(Constants.ROOT_PATH + Constants.HOBBY_PATH + "/info/" + id)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error.response.data.message);
      return error;
    });
}

export async function createHobby(hobby) {
  return await axios
    .post(Constants.ROOT_PATH + Constants.HOBBY_PATH, {
      userId: hobby.userId,
      name: hobby.name,
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

export async function updateHobby(hobby) {
  return await axios
    .put(Constants.ROOT_PATH + Constants.HOBBY_PATH, {
      id: hobby.id,
      userId: hobby.userId,
      name: hobby.name,
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

export async function deleteHobby(id) {
  return await axios
    .delete(Constants.ROOT_PATH + Constants.HOBBY_PATH + "/" + id)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error.response.data.message);
      return error;
    });
}
