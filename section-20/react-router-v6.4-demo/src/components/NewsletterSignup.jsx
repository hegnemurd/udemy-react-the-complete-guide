import { useRef } from "react";
import { useFetcher } from "react-router-dom";

import classes from "./NewsletterSignup.module.css";

function NewsletterSignup() {
  const emailE1 = useRef();
  const fetcher = useFetcher();

  function signupForNewsletterHandler(event) {
    event.preventDefault();
    const enteredEmail = emailE1.current.value;
    fetcher.submit(
      { email: enteredEmail },
      { method: "post", action: "/newsletter" }
    );
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up for our weekly newsletter</h2>
      <form onSubmit={signupForNewsletterHandler}>
        <input
          ref={emailE1}
          id="email"
          type="email"
          placeholder="Your email"
          aria-label="Your email address."
        />
        <button>Sign Up</button>
      </form>
    </section>
  );
}

export default NewsletterSignup;
