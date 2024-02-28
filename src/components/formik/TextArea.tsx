import {ErrorMessage, Field} from "formik";

interface TextAreaProps {
  label: string
  name: string
  type: string
}

export default function TextArea(props: TextAreaProps) {
  const {label, name, ...rest} = props;
  return (
    <>
      <div className={'form-control'}>
        <label htmlFor={name}>{label}</label>
        <Field rows={5} as={'textarea'} id={name} name={name} {...rest}/>
        <ErrorMessage name={name} component={'div'} className={'error-message'}/>
      </div>
    </>
  )
}