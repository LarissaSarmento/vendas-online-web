import { createContext, useContext, useState } from "react";

interface GlobalData { // Formato do estado global
    accessToken?: string;
}

interface GlobalContextProps{ // Define o que o contexto vai fornecer
    globalData: GlobalData; // Os dados
    setGlobalData: (globalData: GlobalData) => void // Função para alterar os dados

}

const GlobalContext = createContext({} as GlobalContextProps); // Cria o contexto, vai ter esse formato, começa vazio, só será usado de verdade quando estiver dentro do provider

interface GlobalProviderProps { // Define que o Provider receber:
    children: React.ReactNode // tudo que estiver dentro dele.
}

export const GlobalProvider = ({children}: GlobalProviderProps ) => { // Esse componente envolve a aplicação
    const [globalData, setGlobalData] = useState<GlobalData>({ // globalData: valor atual  setGlobalData: função que altera o valor, esse estado vive no topo da árvore.
         accessToken: 'Fez login'
    })

    return ( //Todo componente que estiver dentro daqui pode acessar globalData e setGlobalData
        <GlobalContext.Provider value={{globalData, setGlobalData}}> 
            {children} 
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => { // Hook customizado, aqui crio um atalho para usar o contexto
    const { globalData, setGlobalData } = useContext(GlobalContext) // Sobe a árvore, acha o GlobalContext.Provider e devolve o value

    const setAccessToken = (accessToken: string) =>{ // copia tudo que já existia ...globalData, subrescreve accessToken
        setGlobalData({
            ...globalData,
            accessToken,
        })
    }

    return {// Agora qualquer componente pode usar const {accss.., setAcc..} = useGlobalContext(), sem saber como isso é armazenado
        accessToken: globalData?.accessToken,
        setAccessToken,
    }
}