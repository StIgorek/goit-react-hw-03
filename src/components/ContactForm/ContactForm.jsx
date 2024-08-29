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

export default function ContactForm(onAdd) {
  const handleSubmit = (e) => {
    e.preventDefault;
    onAdd({
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
      id: Date.now(),
    });
    e.target.reset();
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
      <Form className={css.container} onSubmit={handleSubmit}>
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
            placeholder="111-22-33"
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
