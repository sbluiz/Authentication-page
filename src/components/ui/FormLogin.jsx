import { useState } from "react"   
import Button from "./button.jsx";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs.jsx";
import { Input } from "./input.jsx"




export function FormLogin() {

    const [email, SetEmail] = useState("")
    const [senha, SetSenha] = useState("")


    function HandleLogin() {
    console.log("E-mail:", email);
    console.log("Senha:", senha);
}



    return (
        <>
            <div className="flex items-center justify-center bg-gray-10 p-4 space-y-10 gap-15" >

                <div className="space-y-5">
                    <h1 className="text-5xl pt-5 text-blue-900 font-bold">Sistema de cadastro em banco de dados</h1>
                    <p className="w-[290px]">Projeto desenvolvido com React.js, ShadCN e MongoDB.</p>
                </div>
                
                <div>
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
                            value={senha}
                            onChange={(e) => SetSenha(e.target.value)}
                            className="border-2 border-white p2 rounded-2x font-bold bg-white" />
                            <Button onClick={HandleLogin}w>Checar dados</Button>
                        </TabsContent>
                        <TabsContent value="createaccount" className="space-y-4 ">
                            <p>Criar Registro   </p>
                            <Input placeholder="E-mail" 
                            value={email}
                            onChange={(e) => SetEmail(e.target.value)}
                            className="border-2 border-white p2 rounded-2x font-bold bg-white"  />
                            <Input placeholder="Senha"
                            value={senha}
                            onChange={(e) => SetSenha(e.target.value)}
                            className="border-2 border-white p2 rounded-2x font-bold bg-white"  />
                            <Button onClick={HandleLogin}>Cadastre-se já</Button>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </>
    )
}