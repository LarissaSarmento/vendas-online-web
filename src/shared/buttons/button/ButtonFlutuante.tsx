import { BFlutuante } from "./button.styles";
import { FloatButton } from "antd";

interface TipagemFloatButton extends React.ComponentProps<typeof FloatButton>{
    padding?: string;
}

    const Flutuante = ({padding, ...props}: TipagemFloatButton) =>{
    return (
        <BFlutuante style={{padding}}/>
    )
}

export default Flutuante;