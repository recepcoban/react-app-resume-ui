import axios from "axios";
import * as Constants from "../common/Constants";

export async function getSkillById(id) {
  return await axios
    .get(Constants.ROOT_PATH + Constants.SKILL_PATH + "/info/" + id)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error.response.data.message);
      return error;
    });
}

export async function createSkill(skill) {
  return await axios
    .post(Constants.ROOT_PATH + Constants.SKILL_PATH, {
      userId: skill.userId,
      name: skill.name,
      level: skill.level,
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

export async function updateSkill(skill) {
  return await axios
    .put(Constants.ROOT_PATH + Constants.SKILL_PATH, {
      id: skill.id,
      userId: skill.userId,
      name: skill.name,
      level: skill.level,
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

export async function deleteSkill(id) {
  return await axios
    .delete(Constants.ROOT_PATH + Constants.SKILL_PATH + "/" + id)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error.response.data.message);
      return error;
    });
}
