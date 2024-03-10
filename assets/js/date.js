const email = "lennoxhub[at]hotmail[dot]com";
const emailLink = document.createElement("a");
const pos = document.querySelector(".emailProtection");

emailLink.href = "mailto:" + email.replace("[at]", "@").replace("[dot]", ".");
emailLink.textContent = "[Email Protected]";

pos.appendChild(emailLink);

const dateTime = document.querySelector(".dateTime");
const todayDate = new Date();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dayOfWeek = daysOfWeek[todayDate.getDay()];
const day = todayDate.getDate();
const month = todayDate.getMonth() + 1;
const year = todayDate.getFullYear();

dateTime.textContent = `${dayOfWeek}, ${day} - ${month} - ${year}  `;

const seconds = () => {
  const dateSeconds = document.querySelector(".dateSeconds");
  const todayDate = new Date();
  (dateSeconds.textContent = todayDate.getSeconds()), "s";
};
setInterval(seconds, 1000);
