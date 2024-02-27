import {useFormik} from "formik";
import * as Yup from 'yup'

interface FormValues {
  name: string,
  email: string,
  channel: string
}


export default function OldYoutubeForm() {
  const initialValues = {
    name: '',
    channel: '',
    email: ''
  }

  function handleSubmit(values: FormValues, onSubmitProps) {
    console.log(onSubmitProps)
    console.log(values)
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('reqq'),
    email: Yup.string().email('invalid email').required('req'),
    channel: Yup.string().required('req')
  })

  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit
  });


  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor={'name'}>Name</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} id={'name'}
               name={'name'} type={'text'}/>
        {formik.touched.name && formik.errors.name && <div style={{color: "red"}}>{formik.errors.name}</div>}

        <label htmlFor={'email'}>E-mail</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} id={'email'}
               name={'email'} type={'email'}/>
        {formik.touched.email && formik.errors.email && <div style={{color: "red"}}>{formik.errors.email}</div>}

        <label htmlFor={'channel'}>Channel</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.channel} id={'channel'}
               name={'channel'}
               type={'text'}/>
        {formik.touched.channel && formik.errors.channel && <div style={{color: "red"}}>{formik.errors.channel}</div>}

        <button type={'submit'}>Submit</button>
      </form>
    </>
  )
}