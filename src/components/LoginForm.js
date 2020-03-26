import styles from "../styles/components/loginform.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const LoginForm = () => {
  return (
    <div className={styles.loginFormContainer}>
      <div className={styles.welcomeMessage}>
        Hello, <br />
        Welcome Back
      </div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.loginForm}>
            <Field
              autocorrect="off"
              autocomplete="off"
              placeholder="john@example.com"
              className={styles.loginInput}
              type="email"
              name="email"
            />
            <ErrorMessage
              className={styles.loginError}
              name="email"
              component="div"
            />
            <Field
              placeholder="••••••"
              className={styles.loginInput}
              type="password"
              name="password"
            />
            <ErrorMessage
              className={styles.loginError}
              name="password"
              component="div"
            />
            <button
              className={styles.loginButton}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "•••" : "Login"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
