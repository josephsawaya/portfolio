import { useState } from "react";
import styles from "./form.module.css";
import Head from "next/head";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const checkFormValidity = (e) => {
    e.preventDefault();
    if (!name || !(email || phoneNumber) || !message) {
      console.log("invalid");
    } else {
      console.log("valid");
      const data = {
        name,
        email,
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
      setMessage("");
    }
  };
  return (
    <form className={styles.form} onSubmit={checkFormValidity}>
      <div className={styles.title}>
        <h2>Contact me</h2>
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Name</label>
        <input
          className={styles.input}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Email</label>
        <input
          className={styles.input}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <div className={styles.messageField}>
        <label className={styles.label}>Message</label>
        <textarea
          className={styles.messageInput}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
      </div>
      <input className={styles.submit} type="submit"></input>
    </form>
  );
};

export default Form;
