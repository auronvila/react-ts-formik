import {ErrorMessage, Field} from "formik";

interface InputProps {
  label: string
  name: string
  type: string
}

export default function Input(props: InputProps) {
  const {label, name, ...rest} = props
  return (
    <div className={'form-control'}>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest}/>
      <ErrorMessage component={'div'} name={name} className={'error-message'}/>
    </div>
  )
}