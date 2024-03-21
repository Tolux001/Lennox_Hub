const pos = document.querySelector(".emailProtection");
const emailReference = Array.from(
  document.querySelectorAll(".emailProtections")
);

const email = "lennoxhub[at]hotmail[dot]com";
const emailLink = document.createElement("a");
emailLink.href = "mailto:" + email.replace("[at]", "@").replace("[dot]", ".");
emailLink.textContent = "[Email Protected]";

emailReference.forEach((e) => {
  e.appendChild(emailLink);
});
document.querySelector(".emailProtections").appendChild(emailLink);
document.querySelector(".emailProtections1").appendChild(emailLink);
document.querySelector(".emailProtections2").appendChild(emailLink);
document.querySelector(".emailProtections3").appendChild(emailLink);
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
  dateSeconds.textContent = `${todayDate.getSeconds()}s`;
};
setInterval(seconds, 1000);
