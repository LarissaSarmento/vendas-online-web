/*
AULA 02

1 - Criar projeto no GitHub
2 - Clocar no terminal (Se precisar mudar a pasta usar o CD caminho..)
3 - Instalar o Vite, que deixa o sistema leve e ágil - Documentação: https://vite.dev/guide/
4 - Rodar no terminal: npm create vite@latest
5 - Escolher: React e TypeCript
6 - Terminal: npm install 
7 - Terminal: npm run dev
*/

/*
AULA 03

Instalação Eslint e Prettier = Padronização do código, espaços e vírgulas por ex.
1- Rodar esse comando: npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-simple-import-sort pre-commit prettier
Está sendo salvo somente em DEV pois não precisa ir para PRD, seria informação desnecessária.
2- Criar pasta eslintrc.js e prettierrc.js na raiz do projeto.
3 - No package.json remover: "type": "module" e "private": true. Pois pode ser que o eslint não funcione
4 - Baixar plugin ESLint 
5 - Criar na raiz do projeto uma pasta: .vscode. Dentro da pasta o arquivo: settings.json. Remover do gitignore o .vscode
6 - Colar dentro do settings as informações correspondentes, assim como em esLintrc e prettierrc.
*/

/*
AULA 04

Styled-components e AntD
Documentação: https://ant.design/docs/react/introduce
1- Terminal: npm install antd
OBS: Precisa de um pre commit para evitar subir o código com erro de formatação caso esqueça de rodar manualmente o npm run lint.
2- Instalar o Husky.
Documentação sytle-component: https://styled-components.com/docs/basics#installation
3- npm install styled-components
*/