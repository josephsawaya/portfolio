import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import Link from "next/link";

export default function Post(val) {
  return (
    <div className="container">
      <Link href="/">
        <a>Back to Home</a>
      </Link>
      <h1>{val.title}</h1>
      <div className="dlcontainer">
        <p className="date">{val.date}</p>
        <p className="location">{val.location}</p>
      </div>
      <div className="tags">
        {val.tags.map((tag) => {
          return (
            <div
              className="tag"
              style={{ backgroundColor: tag.color }}
              key={tag.name}
            >
              {tag.name}
            </div>
          );
        })}
      </div>
      <a className="github" href={val.github}>
        GitHub Repo
      </a>
      <a className="demo" href={val.demo}>
        Demo
      </a>
      <div dangerouslySetInnerHTML={{ __html: val.contentHtml }}></div>
      <h2>Images</h2>
      <div>
        {val.images.map((img) => {
          return (
            <img
              className="sc"
              src={`/${img.name}`}
              alt={img.name}
              key={img.name}
            ></img>
          );
        })}
      </div>
      <style jsx>{`
        .date {
          color: grey;
        }
        .location {
          color: grey;
          margin-left: 20px;
        }
        .dlcontainer {
          display: flex;
        }
        h1 {
          margin: 0;
          margin-top: 20px;
        }
        .tags {
          display: flex;
          margin-bottom: 20px;
        }
        .tag {
          padding: 10px;
          color: white;
          border-radius: 5px;
          margin-right: 15px;
        }
        .container {
          width: 60%;
          margin auto;
        }
        .github {
          margin-right: 15px;
        }

        a {
          text-decoration: none;
          color: #0080FF;
        }
        a:hover {
          text-decoration: none;
          color: #00B2FF
        }
        .sc {
          width:100%;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const fileContents = fs.readFileSync(
    path.join(process.cwd(), "projects", params.id, params.id + ".md")
  );

  const matterRes = matter(fileContents);
  const processedContent = await remark().use(html).process(matterRes.content);
  let contentHtml = processedContent.toString();
  contentHtml = contentHtml.concat(
    "<style>a{ text-decoration: none;color: #0080FF;} a:hover{text-decoration: none;color: #00B2FF} p { line-height: 200%; margin-bottom: 30px; }</style>"
  );
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
