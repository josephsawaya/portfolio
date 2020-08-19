import styles from "../components/projectStub.module.css";
import Link from "next/link";

export default function ProjectStub({ val }) {
  return (
    <div className={styles.container}>
      <Link href="/projects/[id]" as={`/projects/${val.slug}`}>
        <div>
          <div>
            <h2 className={styles.title}>{val.title}</h2>
            <div className={styles.tags}>
              {val.tags.map((tag) => {
                return (
                  <div style={{ backgroundColor: tag.color }} key={tag.name}>
                    {tag.name}
                  </div>
                );
              })}
            </div>
            <div className={styles.dlcontainer}>
              {val.location ? (
                <p className={styles.location}>Location: {val.location}</p>
              ) : null}
              <p className={styles.date}>Date: {val.date}</p>
            </div>
          </div>
          <p>{val.description}</p>
        </div>
      </Link>
    </div>
  );
}
