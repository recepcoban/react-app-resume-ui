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

export async function createCourse(course) {
  return await axios
    .post(Constants.ROOT_PATH + Constants.COURSE_PATH, {
      userId: course.userId,
      name: course.name,
      provider: course.provider,
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

export async function updateCourse(course) {
  return await axios
    .put(Constants.ROOT_PATH + Constants.COURSE_PATH, {
      id: course.id,
      userId: course.userId,
      name: course.name,
      provider: course.provider,
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

export async function deleteCourse(id) {
  return await axios
    .delete(Constants.ROOT_PATH + Constants.COURSE_PATH + "/" + id)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error.response.data.message);
      return error;
    });
}
