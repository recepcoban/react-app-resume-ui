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

export async function createEducation(education) {
  return await axios
    .post(Constants.ROOT_PATH + Constants.EDUCATION_PATH, {
      userId: education.userId,
      startDate: education.startDate,
      endDate: education.endDate,
      schoolName: education.schoolName,
      departmentName: education.departmentName,
      active: education.active,
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

export async function updateEducation(education) {
  return await axios
    .put(Constants.ROOT_PATH + Constants.EDUCATION_PATH, {
      id: education.id,
      userId: education.userId,
      startDate: education.startDate,
      endDate: education.endDate,
      schoolName: education.schoolName,
      departmentName: education.departmentName,
      active: education.active,
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

export async function deleteEducation(id) {
  return await axios
    .delete(Constants.ROOT_PATH + Constants.EDUCATION_PATH + "/" + id)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error.response.data.message);
      return error;
    });
}
