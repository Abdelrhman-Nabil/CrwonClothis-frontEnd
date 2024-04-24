import  {Input,FormInputLabel,Group}from'./form.component.style.js';
const FormInput = ({ label, ...otherProp }) => {
    return (
        <Group>
          <Input {...otherProp} />
            {label && <FormInputLabel shrink={otherProp.value.length} >{label}</FormInputLabel>}
        </Group>
    )
}
export default FormInput 