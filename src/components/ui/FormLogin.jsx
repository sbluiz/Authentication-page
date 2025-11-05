import Button from "./button.jsx";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs.jsx";
import { Input } from "./input.jsx"


export function FormLogin() {
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-10 p-4 space-y-6">

                <div className="h-[350px]">
                    <h1 className="text-2xl pt-5">Bem-vindo ao React & Shadcn!</h1>
                    <p className="w-[290px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, fuga. Dolorum, obcaecati quasi natus cum ratione quam corporis</p>
                </div>
                
                <Tabs defaultValue="account" className="w-[350px] h-[350px] border border-black rounded-lg p-5">
                    <TabsList className="w-full">
                        <TabsTrigger value="loginaccount">Fazer Login</TabsTrigger>
                        <TabsTrigger value="createaccount">Criar Conta</TabsTrigger>
                    </TabsList>
                    <TabsContent value="loginaccount" className="space-y-4 ">
                        <p>Preencha com seu email e senha</p>
                        <Input placeholder="email" />
                        <Input placeholder="Senha" />
                        <Button>Logar</Button>
                    </TabsContent>
                    <TabsContent value="createaccount" className="space-y-4 ">
                        <p>Crie sua conta</p>
                        <Input placeholder="E-mail" />
                        <Input placeholder="Senha" />
                        <Button className={"cente"}>Criar Conta</Button>
                    </TabsContent>
                </Tabs>
            </div>
        </>
    )
}