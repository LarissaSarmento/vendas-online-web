function Inicio(props) {
    return(
    <div>
        <h1>{props.titulo}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laudantium corporis minus quos nostrum, nam nesciunt dolores dolor ex nihil eaque, reiciendis magni placeat numquam, ea voluptatum veniam assumenda consequuntur?</p>
    </div>

)
}

export default Inicio


export function Lista({linha1, linha2, linha3, children}){
   return( <ol>
        <li>{linha1}</li>
        <li>{linha2}</li>
        <li>{linha3}{children}</li>
        
    </ol>
    )
}

