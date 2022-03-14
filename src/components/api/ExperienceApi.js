import axios from "axios";
import * as Constants from "../common/Constants";

export async function getExperienceById(id) {
  return await axios
    .get(Constants.ROOT_PATH + Constants.EXPERIENCE_PATH + "/info/" + id)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error.response.data.message);
      return error;
    });
}

export async function createExperience(experience) {
  return await axios
    .post(Constants.ROOT_PATH + Constants.EXPERIENCE_PATH, {
      userId: experience.userId,
      startDate: experience.startDate,
      endDate: experience.endDate,
      employer: experience.employer,
      url: experience.url,
      position: experience.position,
      responsibilities: experience.responsibilities,
      active: experience.active,
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

export async function updateExperience(experience) {
  return await axios
    .put(Constants.ROOT_PATH + Constants.EXPERIENCE_PATH, {
      id: experience.id,
      userId: experience.userId,
      startDate: experience.startDate,
      endDate: experience.endDate,
      employer: experience.employer,
      url: experience.url,
      position: experience.position,
      responsibilities: experience.responsibilities,
      active: experience.active,
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

export async function deleteExperience(id) {
  return await axios
    .delete(Constants.ROOT_PATH + Constants.EXPERIENCE_PATH + "/" + id)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error.response.data.message);
      return error;
    });
}
