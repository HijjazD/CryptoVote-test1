import { startAuthentication, startRegistration } from "@simplewebauthn/browser";

document.addEventListener("DOMContentLoaded", () => {
  const signupButton = document.querySelector("[data-signup]");
  const loginButton = document.querySelector("[data-login]");
  const emailInput = document.querySelector("[data-email]");
  const modal = document.querySelector("[data-modal]");
  const closeButton = document.querySelector("[data-close]");

  const SERVER_URL = "http://localhost:3000"; // or your prod URL later

  signupButton.addEventListener("click", signup);
  loginButton.addEventListener("click", login);
  closeButton.addEventListener("click", () => modal.close());

  async function signup() {
    const email = emailInput.ariaValueMax

    const data = await navigator.credentials.create({
      publicKey: {
        challenge: new Uint8Array([0,1,2,3,4,5,6]),
        rp: { name: "CryptoVote" },
        user: {
          id: new Uint8Array(16),
          name: email,
          displayName: "messi",
        },
        pubKeyCredParams: [
          {type: "public-key", alg: -7},
          {type: "public-key", alg: -8},
          {type: "public-key", alg: -257}
        ]
      }
    })

    showModalText(`Successfully registered ${email}`);
  }

  async function login() {
    // your login logic here
    showModalText("Login clicked!");
  }

  function showModalText(text) {
    modal.querySelector("[data-content]").innerText = text;
    modal.showModal();
  }
});
