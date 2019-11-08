const ROOT_URL = "https://jsonplaceholder.typicode.com";
const FAMLY_URL = "https://tryfamly.co/api/daycare/tablet/group";

// Use env variables to store private data
const ACCESS_TOKEN = "";
const GROUP_ID = "";
const INSTITUTION_ID = "";

const ENDPOINTS = {
  USERS: "/users?_limit=10"
};

async function getUser() {
  const response = await fetch(`${ROOT_URL}${ENDPOINTS.USERS}`);
  return response.json();
}

async function getChildren() {
  const SEARCH_URL = `${FAMLY_URL}?accessToken=${ACCESS_TOKEN}&groupId=${GROUP_ID}&institutionId=${INSTITUTION_ID}`;
  return fetch(SEARCH_URL).then(response => response.json());
}

export { getUser, getChildren };
