const BASE_URL = "https://bootcamp-api.codeit.kr";

export async function getUser() {
  const response = await fetch(`${BASE_URL}/api/users`);
  const body = await response.json();
  return body;
}
export async function createLogin(data) {
  const response = await fetch(`${BASE_URL}/api/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const body = await response.json();
  return body;
}

// formData 안됌..
/*fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: "test@codeit.com",
    password: "sprint101",
  })
})


try {
  const obj = {
    email: "test@codeit.com",
    password: "sprint101",
  };
  const response = await fetch(`${BASE_URL}/api/sign-in`, {
    method: "POST",
    body: obj,
  });
  const body = await response.json();
  return body;
} catch (error) {
  console.error("Error:", error);
}*/
