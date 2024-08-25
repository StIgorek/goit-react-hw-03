import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.number()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={UserSchema}
      onSubmit={(values, actions) => {
        console.log("SUBMIT");
        actions.resetForm();
      }}
    >
      <Form className={css.container}>
        <div className={css.list}>
          <label>Name</label>
          <Field type="text" name="name" className={css.input} />
          <ErrorMessage name="name" component="span" className={css.errMsg} />
        </div>
        <div className={css.list}>
          <label>Number</label>
          <Field
            type="text"
            name="number"
            className={css.input}
            placeholder="0441112233"
          />
          <ErrorMessage name="number" component="span" className={css.errMsg} />
        </div>
        <div>
          <button type="submit">Add contact</button>
        </div>
      </Form>
    </Formik>
  );
}
