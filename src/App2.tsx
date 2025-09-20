import Inicio from './inicio' // Aqui importa a função default
import { Lista } from './inicio' //Para mportar uma função especifica

 
 function Profile() {
    return (
            <img src="https://i.imgur.com/MK3eW3Am.jpg"
            alt="Teste"
             />
    )
}

export default function Gallery(){ //Componente Pai e o Profile o filho
    return (
        <section>
            <h1>Cientistas</h1> 
            <Profile /> 
            <Profile />
            <Profile />
            <Inicio titulo = "Larissa"/>
            <Lista
            linha1 = "Primeira Linha" 
            linha2 = "Segunda Linha"
            linha3 = "Linha teste"/>
            <Lista  linha1 ="Outro teste"> <Profile /></Lista>
            
        </section>
    )
}


