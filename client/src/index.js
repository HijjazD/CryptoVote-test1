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
    // your signup logic here
    showModalText("Sign up clicked!");
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
