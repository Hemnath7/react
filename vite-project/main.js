import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import { Client, Locale } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64d38f0a9db14895687d");

const getCountries = async () => {
  const locale = new Locale(client);
  const { countries } = await locale.getCountries();
  const countriesElem = document.querySelector("ul");

  countriesElem.innerHTML = "";

  countries.map((c) => {
    const li = document.createElement("li");
    li.innerHTML = `${c.code} - ${c.name}`;
    countriesElem.append(li);
  });
};

document.querySelector("#app").innerHTML = `
  <div>
  <h1> Hello Appwriters!</h1>
  <button id="countries" type="button">Get countries</button>
  <ul></ul>
  </div>
`;

document
  .querySelector("#countries")
  .addEventListener("click", () => getCountries());
