import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [name, setName] = useState("");

  function sendInfo(bruh) {
    bruh.preventDefault();
    console.log(name);
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
        <form onSubmit={sendInfo}>
          <label>Name</label>
          <input onChange={(e) => setName(e.target.value)} value={name}></input>
          <label>Email</label>
          <input></input>
          <label>Phone number</label>
          <input></input>
          <label>Message</label>
          <input type="submit"></input>
        </form>
      </div>
      <style jsx>{``}</style>
    </div>
  );
}
