import { useState } from "react"
import Button from "./button.jsx";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs.jsx";
import { Input } from "./input.jsx"




export function FormLogin() {

    const [name, SetName] = useState("")
    const [state, SetState] = useState("")
    const [favoriteSport, SetSport] = useState("")
    const [email, SetEmail] = useState("")
    const [password, SetSenha] = useState("")


    const HandleLogin = async () => {
        const dados = { email, name, state,favoriteSport, password }; // objeto com os valores

        try {
            const resposta = await fetch('http://localhost:3001/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados), // transforma o objeto em JSON
            });

            const resultado = await resposta.json();
            console.log('Resposta do backend:', resultado);
        } catch (erro) {
            console.error('Erro ao enviar:', erro);
        }
    };



    return (
        <>
            <div className="flex items-center justify-center bg-gray-10 p-4 space-y-10 gap-15" >

                <div className="space-y-5">
                    <h1 className="text-5xl pt-5 text-blue-900 font-bold">Sistema de cadastro em banco de dados</h1>
                    <p className="w-[290px]">Projeto desenvolvido com React.js, ShadCN e MongoDB.</p>
                </div>

                <div className="mt-30">
                    <Tabs defaultValue="loginaccount" className="w-[350px] bg-blue-600 border border-black rounded-lg p-5">
                        <TabsList className="w-full">
                            <TabsTrigger value="loginaccount" className="hover:bg-blue-400">Exibir dados</TabsTrigger>
                            <TabsTrigger value="createaccount" className="hover:bg-blue-400">Cadastrar-se</TabsTrigger>
                        </TabsList>
                        <TabsContent value="loginaccount" className="space-y-4 ">
                            <p>Preencha com seu email e senha</p>
                            <Input placeholder="E-mail"
                                value={email}
                                onChange={(e) => SetEmail(e.target.value)}
                                className="border-2 border-white p2 rounded-2x font-bold bg-white" />

                            <Input placeholder="Senha"
                                type="password"
                                value={password}
                                onChange={(e) => SetSenha(e.target.value)}
                                className="border-2 border-white p2 rounded-2x font-bold bg-white" />
                            <Button>Checar dados</Button>
                        </TabsContent>
                        <TabsContent value="createaccount" className="space-y-4">

                            <p>Criar Registro   </p>
                            <Input placeholder="Nome"
                                value={name}
                                onChange={(e) => SetName(e.target.value)}
                                className="border-2 border-white p2 rounded-2x font-bold bg-white" />

                            <Input placeholder="Estado"
                                value={state}
                                onChange={(e) => SetState(e.target.value)}
                                className="border-2 border-white p2 rounded-2x font-bold bg-white" />

                            <Input placeholder="Esporte Favorito"
                                value={favoriteSport}
                                onChange={(e) => SetSport(e.target.value)}
                                className="border-2 border-white p2 rounded-2x font-bold bg-white" />

                            <Input placeholder="E-mail"
                                value={email}
                                onChange={(e) => SetEmail(e.target.value)}
                                className="border-2 border-white p2 rounded-2x font-bold bg-white" />

                            <Input type="password" placeholder="Senha"
                                value={password}
                                onChange={(e) => SetSenha(e.target.value)}
                                className="border-2 border-white p2 rounded-2x font-bold bg-white" />
                            <Button onClick={HandleLogin}>Cadastre-se já</Button>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </>
    )
}