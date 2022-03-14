import axios from "axios";
import * as Constants from "../common/Constants";

export async function getProjectById(id) {
  return await axios
    .get(Constants.ROOT_PATH + Constants.PROJECT_PATH + "/info/" + id)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error.response.data.message);
      return error;
    });
}

export async function createProject(project) {
  return await axios
    .post(Constants.ROOT_PATH + Constants.PROJECT_PATH, {
      userId: project.userId,
      name: project.name,
      url: project.url,
      details: project.details,
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

export async function updateProject(project) {
  return await axios
    .put(Constants.ROOT_PATH + Constants.PROJECT_PATH, {
      id: project.id,
      userId: project.userId,
      name: project.name,
      url: project.url,
      details: project.details,
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

export async function deleteProject(id) {
  return await axios
    .delete(Constants.ROOT_PATH + Constants.PROJECT_PATH + "/" + id)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error.response.data.message);
      return error;
    });
}
