import styles from "./about.module.css";

function About({ contentHtml }) {
  return (
    <div
      id="aboutMe"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
      className={styles.main}
    />
  );
}

About.getInitialProps = function (props) {
  return {
    contentHtml: props.contentHtml,
  };
};

export default About;
