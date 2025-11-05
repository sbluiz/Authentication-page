import Button from "./button.jsx";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs.jsx";
import { Input } from "./input.jsx"


export function FormLogin() {
    return (
        <>
            <div className="flex items-center justify-center bg-gray-10 p-4 space-y-6 gap-15" >

                <div className="space-y-5">
                    <h1 className="text-5xl pt-5 text-blue-600 font-bold">Bem-vindo ao React & Shadcn!</h1>
                    <p className="w-[290px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, fuga. Dolorum, obcaecati quasi natus cum ratione quam corporis</p>
                </div>
                
                <div>
                    <Tabs defaultValue="loginaccount" className="w-[350px] bg-blue-600 border border-black rounded-lg p-5">
                        <TabsList className="w-full">
                            <TabsTrigger value="loginaccount" className="hover:bg-blue-400">Fazer Login</TabsTrigger>
                            <TabsTrigger value="createaccount" className="hover:bg-blue-400">Criar Conta</TabsTrigger>
                        </TabsList>
                        <TabsContent value="loginaccount" className="space-y-4 ">
                            <p>Preencha com seu email e senha</p>
                            <Input placeholder="email" className="border-2 border-white p2 rounded-2x font-bold bg-white" />
                            <Input placeholder="Senha"  className="border-2 border-white p2 rounded-2x font-bold bg-white" />
                            <Button>Logar</Button>
                        </TabsContent>
                        <TabsContent value="createaccount" className="space-y-4 ">
                            <p>Crie sua conta</p>
                            <Input placeholder="E-mail" className="border-2 border-white p2 rounded-2x font-bold bg-white"  />
                            <Input placeholder="Senha" className="border-2 border-white p2 rounded-2x font-bold bg-white"  />
                            <Button className={"cente"}>Criar Conta</Button>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </>
    )
}