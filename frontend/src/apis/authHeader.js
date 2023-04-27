export default function authHeader() {
  const user = localStorage.getItem("authToken");

  if (user) {
    return { Authorization: user };
  } else {
    return {};
  }
}
