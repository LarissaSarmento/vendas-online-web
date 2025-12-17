
import { Input as NomeInput } from 'antd'

interface TipoInput extends React.ComponentProps<typeof NomeInput>{
    title?: string
    margin?: string
}

const Input2 = ({title, margin, ...props}:TipoInput) => {
    return (
    <div style={{margin}}>
    {title && <label style={{display:"block", margin:"20px 32px"}}>{title}</label>}
    <NomeInput {...props} style={{width:"500px"}}/>
    </div>
    )
}

export default Input2