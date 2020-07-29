import Head from "next/head";
import Form from "../components/form";

import remark from "remark";
import html from "remark-html";
import path from "path";
import matter from "gray-matter";
import fs from "fs";

export default function Home({ contentHtml }) {
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
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} s />
      <div id="contact">
        <Form />
      </div>
      <style jsx>{``}</style>
    </div>
  );
}

export async function getStaticProps() {
  const aboutDoc = path.join(process.cwd(), "components", "about.md");
  const fileContents = fs.readFileSync(aboutDoc, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();
  return {
    props: {
      contentHtml,
    },
  };
}
