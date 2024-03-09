const email = "lennoxhub[at]hotmail[dot]com";
const emailLink = document.createElement("a");
const pos = document.querySelector(".emailProtection");

emailLink.href = "mailto:" + email.replace("[at]", "@").replace("[dot]", ".");
emailLink.textContent = "[Email Protected]";

pos.appendChild(emailLink);

let dateTime = document.querySelector(".dateTime");
let currentDate = new Date();

dateTime.textContent = currentDate;
