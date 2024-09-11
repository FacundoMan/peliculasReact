import { API_PATH } from "../utils/Constants";
export function get(path) {
  return fetch(API_PATH + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Njc1NmZjMmZkNWYyNmU0N2YzNTA2OGI5MjNmNjNiNCIsIm5iZiI6MTcyMjY5MzQ2OC4yOTY1MDgsInN1YiI6IjY2YWJmODZiOGY2YWZmZDhmMzY0OGU1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ds7bZMbny1d_n3VbQvY_P3uDW8aEP-CREajKp4EqgUc",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
