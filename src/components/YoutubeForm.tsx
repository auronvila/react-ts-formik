import {ErrorMessage, Field, FieldArray, Form, Formik, FormikProps} from "formik";
import * as Yup from 'yup'

interface FormValues {
  name: string,
  email: string,
  channel: string,
  social: {
    facebook: string
  },
  phoneNumbers: string[]
}

export default function YoutubeForm() {
  const initialValues: FormValues = {
    name: '',
    channel: '',
    email: '',
    social: {
      facebook: ''
    },
    phoneNumbers: ['']
  }

  const savedData = {
    name: 'AURON',
    channel: 'AURONPLAY',
    email: 'auron@gmail.com',
    social: {
      facebook: 'none'
    },
    phoneNumbers: ['343555654']
  }

  function handleSubmit(values: FormValues,onSubmitProps) {
    setTimeout(() => {
      console.log(values)
    onSubmitProps.setSubmitting(false)
      onSubmitProps.resetForm()
    }, 1000)
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    channel: Yup.string().required('Channel is required'),
    social: Yup.object().shape({
      facebook: Yup.string().required("Facebook is required")
    }),
    phoneNumbers: Yup.array().of(Yup.string())
  })

  return (
    <>
      <Formik
        enableReinitialize
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}>
        {(formik: FormikProps<FormValues>) => (
          <Form>
            <label htmlFor={'name'}>Name</label>
            <Field name={'name'} type={'text'}/>
            <ErrorMessage name={'name'} component="div" className="error-message"/>
            {formik.touched.name ? <> {/*console.log('send req to the server to check the username')*/} </> : ''}
            <label htmlFor={'email'}>E-mail</label>
            <Field name={'email'} type={'email'}/>
            <ErrorMessage name={'email'} component="div" className="error-message"/>
            <label htmlFor={'channel'}>Channel</label>
            <Field name={'channel'} type={'text'}/>
            <ErrorMessage name={'channel'} component="div" className="error-message"/>
            <label htmlFor={'facebook'}>Facebook</label>
            <Field name={'social.facebook'} type={'text'}/>
            <ErrorMessage name={'social.facebook'} component="div" className="error-message"/>
            <div>
              <label>List of phone numbers</label>
              <FieldArray name={'phoneNumbers'}>
                {(arrayHelpers) => (
                  <div>
                    {arrayHelpers.form.values.phoneNumbers.map((_phoneNumber: string, index: number) => (
                      <div style={{display: 'flex', margin: 10}} key={index}>
                        <Field name={`phoneNumbers.${index}`} type={'text'}/>
                        <button type={'button'} onClick={() => arrayHelpers.remove(index)}>-</button>
                        {index === arrayHelpers.form.values.phoneNumbers.length - 1 && arrayHelpers.form.values.phoneNumbers.length < 5 && (
                          <button type={'button'} onClick={() => arrayHelpers.push('')}>+</button>
                        )}
                      </div>
                    ))}
                    {arrayHelpers.form.values.phoneNumbers.length === 0 && (
                      <button type={'button'} onClick={() => arrayHelpers.push('')}>Add Phone Number</button>
                    )}
                  </div>
                )}
              </FieldArray>
            </div>
            <button disabled={formik.isSubmitting} type={'submit'}>Submit</button>
            <button type={'button'} onClick={() => formik.setValues({
              name: 'Auron',
              email: 'Auron@gmail.com',
              channel: 'teset',
              phoneNumbers: [''],
              social: {facebook: 'Auronvila'}
            })}>
              Change field values
            </button>
            <button
              onClick={() => {
                // this can be used when the user blurs out of the input, and we can check if the username the user typed is unique
                formik.validateField('name')
                formik.setFieldTouched('name')
              }}
              type={'button'}
            >
              trigger field validation
            </button>
            <button
              onClick={() => {
                formik.setValues(savedData)
              }}
              type={'button'}
            >
              load saved data
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
}
