import Head from "next/head";
import Form from "../components/form";
export default function Home() {
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
        <Form />
      </div>
      <style jsx>{``}</style>
    </div>
  );
}
