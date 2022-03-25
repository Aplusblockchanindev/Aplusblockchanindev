
const serverUrl = "https://9kagq4hrdy79.usemoralis.com:2053/server";
const appId = "LKxhTTUWbRvUdYLEYUBTOxQbA9B2waQ5L9Npzgn4";

Moralis.start({ serverUrl, appId });

// add from here down
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate();
  }
  console.log("logged in user:", user);
}
;
async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;