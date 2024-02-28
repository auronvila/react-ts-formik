import Input from "./Input.tsx";
import TextArea from "./TextArea.tsx";

interface FormikControlProps {
  control: 'input' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date'
  label: string
  name: string
  type: string
}

export default function FormikControl(props: FormikControlProps) {
  const {control, ...rest} = props;

  switch (control) {
    case 'input':
      return <Input {...rest}/>
    case 'textarea':
      return <TextArea {...rest}/>
    case 'select':
    case'radio':
    case 'checkbox':
    case 'date':
    default :
      return null
  }
}