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
            <Inicio />
            <Lista />
        </section>
    )
}

function Inicio(){
    return(
    <div>
        <h1>Titulo</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laudantium corporis minus quos nostrum, nam nesciunt dolores dolor ex nihil eaque, reiciendis magni placeat numquam, ea voluptatum veniam assumenda consequuntur?</p>
    </div>

)
}

function Lista(){
   return( <ol>
        <li>Linha 1</li>
        <li>Linha 2</li>
        <li>Linha 3</li>
    </ol>
    )
}