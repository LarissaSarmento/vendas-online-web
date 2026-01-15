import { Button, Form, Input } from "antd"
import { useEffect } from "react"


export default function SimpleForm() {
    const [form] = Form.useForm()

useEffect(()=>{
    form.setFieldsValue({
        name: 'Larissa',
        email: 'teste@teste'
    })
},[form])


const onFinish = (values: any) =>{
    console.log('Valores do formulario:', values)
    alert(`Nome: ${values.name} | Email: ${values.email}`)
}

const onFinishFailed = (errorInfo: any) => {
    console.log('Erro de validação:', errorInfo)
}

return (
    <Form 
    form={form}
    layout="vertical"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    >
      <Form.Item
      label="Nome"
      name="name"
      rules={[{required: true, message: 'Informe o nome'}]}
    >
        <Input placeholder="Digite seu nome"/>
    </Form.Item>

    <Form.Item
    label="Email"
    name="email"
    rules={[{required: true, message: 'Informe o email'},
        {type:'email', message: 'Email inválido'}
    ]}
    >
    <Input placeholder="Digite seu email"/>
    </Form.Item>
    <Form.Item>
    <Button type="primary" htmlType="submit">
        Enviar</Button>
    </Form.Item>
      </Form>
)
}