import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import Link from "next/link";

export default function Post(val) {
  return (
    <div>
      <Link href="/"> Back to Home</Link>
      <h1>{val.title}</h1>
      <p>{val.date}</p>
      <p>{val.location}</p>
      <div>
        {val.tags.map((tag) => {
          return (
            <div style={{ backgroundColor: tag.color }} key={tag.name}>
              {tag.name}
            </div>
          );
        })}
      </div>
      <div dangerouslySetInnerHTML={{ __html: val.contentHtml }}></div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const fileContents = fs.readFileSync(
    path.join(process.cwd(), "projects", params.id, params.id + ".md")
  );
  const matterRes = matter(fileContents);
  const processedContent = await remark().use(html).process(matterRes.content);
  const contentHtml = processedContent.toString();
  return {
    props: {
      ...matterRes.data,
      contentHtml,
    },
  };
}

export async function getStaticPaths() {
  const projects = fs.readdirSync(path.join(process.cwd(), "projects"));
  const paths = projects.map((project) => {
    return {
      params: {
        id: project,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
