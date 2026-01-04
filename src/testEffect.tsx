import { useEffect, useState } from "react";

function UseEf() {
    const [count, setcount] = useState(0)
    const [countb, setcountb] = useState(10)
    const [user, setuser] = useState()

    useEffect(()=>{
        console.log('Roda a cada rendenrização')
    })

    // Array de dependencia
    // Passo nos colchetes quando esse efeto deve ocorrer
    useEffect(() =>{
        console.log('Só roda ao incrementar valor')
    },[count])

    // Array de dependencia vazio
    // Só vai ser executado quando começa a pag a tela, usado ex carregar dados externos de api, GET

    useEffect(() =>{
        console.log('Só executa uma vez')
    },[])

    // Clean up function (remover função para não ficar armazenada na memória)
    // Quando tem um evento que não quero que seja usado depois de um certo tempo

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(`O incremento foi alterao ${count}, vezes.`)
        }, 2000)

        return () =>{
            clearTimeout(timer)
        }
    }, [count])

    // fetch com useEffect, para requisição de api

    fetch()

    return (
        <>
    <div>
        <button onClick={()=> setcount(prevCount => prevCount +1)}>
            Renderizar
        </button>
        <p>{count}</p>
         </div>
        <div>
        <button onClick={()=> setcountb(prevCount => prevCount +1)}>
            RenderizarB
        </button>
        <p>{countb}</p>
    </div>
    </>
)}

export default UseEf