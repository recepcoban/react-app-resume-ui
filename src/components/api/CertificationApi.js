import axios from "axios";
import * as Constants from "../common/Constants";

export async function getCertificationById(id) {
  return await axios
    .get(Constants.ROOT_PATH + Constants.CERTIFICATION_PATH + "/info/" + id)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error.response.data.message);
      return error;
    });
}

export async function createCertification(certification) {
  return await axios
    .post(Constants.ROOT_PATH + Constants.CERTIFICATION_PATH, {
      userId: certification.userId,
      name: certification.name,
      provider: certification.provider,
      url: certification.url,
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

export async function updateCertification(certification) {
  return await axios
    .put(Constants.ROOT_PATH + Constants.CERTIFICATION_PATH, {
      id: certification.id,
      userId: certification.userId,
      name: certification.name,
      provider: certification.provider,
      url: certification.url,
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

export async function deleteCertification(id) {
  return await axios
    .delete(Constants.ROOT_PATH + Constants.CERTIFICATION_PATH + "/" + id)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error.response.data.message);
      return error;
    });
}
