import Head from "next/head";
import Form from "../components/form";
import About from "../components/about";
import remark from "remark";
import html from "remark-html";
import path from "path";
import matter from "gray-matter";
import fs from "fs";
import ProjectStub from "../components/projectStub";

export default function Home({ contentHtml, projects }) {
  return (
    <div className="body">
      <div className="container">
        <Head>
          <title>Joseph Sawaya</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale = 1.0"
          />
        </Head>
        <div className="navbar">
          <h1>Joseph Sawaya</h1>
          <ul className="list">
            <li>
              <a href="https://www.linkedin.com/in/joseph-sawaya-3b4747197/">
                <p>LinkedIn</p>
              </a>
            </li>
            <li>
              <a href="https://github.com/josephsawaya">
                <p>Github</p>
              </a>
            </li>
          </ul>
        </div>
        <h2>Projects</h2>
        <div id="projects">
          {projects.map((val) => {
            return <ProjectStub val={val} key={val.title} />;
          })}
        </div>
        <About contentHtml={contentHtml} />

        <div id="contact">
          <Form />
        </div>
        <style jsx>{``}</style>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const aboutDoc = path.join(process.cwd(), "components", "about.md");
  const fileContents = fs.readFileSync(aboutDoc, "utf8");

  const projDirName = path.join(process.cwd(), "projects");
  const projDir = fs.readdirSync(projDirName, "utf8");
  const projects = [];
  projDir.forEach(async (val) => {
    const temp = fs.readFileSync(
      path.join(projDirName, val, val + ".md"),
      "utf8"
    );
    const matterRes = matter(temp);

    projects.push(matterRes.data);
  });

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();
  return {
    props: {
      contentHtml,
      projects,
    },
  };
}
