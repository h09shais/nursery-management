const ROOT_URL = "https://jsonplaceholder.typicode.com";

const ENDPOINTS = {
  USERS: "/users?_limit=10"
};

async function getUser() {
  const response = await fetch(`${ROOT_URL}${ENDPOINTS.USERS}`);
  return response.json();
}

export { getUser };
