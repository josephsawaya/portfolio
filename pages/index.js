import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function checkFormValidity(e) {
    e.preventDefault();
    if (!name || !(email || phoneNumber) || !message) {
      console.log("invalid");
    } else {
      console.log("valid");
      const data = {
        name,
        email,
        phoneNumber,
        message,
      };
      fetch("api/contact", {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log(JSON.stringify(res));
      });
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
  }

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Joseph Sawaya</h1>
      <ul>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a>About Me</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
      <div id="projects"></div>
      <div id="about-me"></div>
      <div id="contact">
        <form onSubmit={checkFormValidity}>
          <label>Name</label>
          <input onChange={(e) => setName(e.target.value)} value={name} />
          <label>Email</label>
          <input onChange={(e) => setEmail(e.target.value)} value={email} />
          <label>Phone number</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phoneNumber}
          />
          <label>Message</label>
          <input onChange={(e) => setMessage(e.target.value)} value={message} />
          <input type="submit"></input>
        </form>
      </div>
      <style jsx>{``}</style>
    </div>
  );
}
