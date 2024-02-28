import * as Yup from 'yup'
import {Form, Formik, FormikProps} from "formik";
import FormikControl from "./FormikControl.tsx";

export default function FormikContainer() {
  const validationSchema = Yup.object({
    email: Yup.string().required()
  })

  const initialValues = {
    email: ''
  }

  function onSubmit(values) {
    console.log(values)
  }

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {(formik: FormikProps<typeof initialValues>) => (
          <Form>
            <FormikControl control={'input'} label={'email'} name={'email'} type={'email'}/>
            <button type={'submit'}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
}