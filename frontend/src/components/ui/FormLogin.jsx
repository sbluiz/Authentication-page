import { useState } from "react";
import Button from "./button.jsx";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs.jsx";
import { Input } from "./input.jsx";

const API_URL = "https://backend-authentication-nryf.onrender.com";

export function FormLogin() {
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [favoriteSport, setSport] = useState("");
  const [email, setEmail] = useState("");
  const [password, setSenha] = useState("");
  const [userData, setUserData] = useState(null); // armazenar os dados retornados
  const [erro, setErro] = useState(""); // armazenar mensagens de erro

  const HandleLogin = async () => {
    try {
      const resposta = await fetch(`${API_URL}/login`, { // endpoint do login
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const resultado = await resposta.json();

      if (resposta.ok) {
        setUserData(resultado); // armazena os dados do usuário
        setErro("");
      } else {
        setErro(resultado.message || "Erro ao checar dados");
        setUserData(null);
      }
    } catch (erro) {
      console.error("Erro ao enviar:", erro);
      setErro("Erro de conexão com o servidor");
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center bg-gray-10 p-4 space-y-10 gap-15">
        <div className="md:space-y-5 mt-60 md:mt-0">
          <h1 className="text-4xl md:text-5xl pt-5 text-blue-900 font-bold">
            Sistema de cadastro em banco de dados
          </h1>
          <p className="w-[290px]">Projeto desenvolvido com React.js, ShadCN e MongoDB.</p>
        </div>

        <div>
          <Tabs defaultValue="loginaccount" className="w-[350px] bg-blue-600 border border-black rounded-lg p-5">
            <TabsList className="w-full">
              <TabsTrigger value="loginaccount" className="hover:bg-blue-400">Exibir dados</TabsTrigger>
              <TabsTrigger value="createaccount" className="hover:bg-blue-400">Cadastrar-se</TabsTrigger>
            </TabsList>

            <TabsContent value="loginaccount" className="space-y-4">
              <p>Preencha com seu email e senha</p>
              <Input
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-white p2 rounded-2x font-bold bg-white"
              />
              <Input
                placeholder="Senha"
                type="password"
                value={password}
                onChange={(e) => setSenha(e.target.value)}
                className="border-2 border-white p2 rounded-2x font-bold bg-white"
              />
              <Button onClick={HandleLogin}>Checar dados</Button>

              {erro && <p className="text-red-500 mt-2">{erro}</p>}

              {userData && (
                <div className="mt-4 p-2 bg-white rounded shadow">
                  <p><strong>Nome:</strong> {userData.name}</p>
                  <p><strong>Estado:</strong> {userData.state}</p>
                  <p><strong>Esporte favorito:</strong> {userData.favoriteSport}</p>
                  <p><strong>E-mail:</strong> {userData.email}</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="createaccount" className="space-y-4">
              <p>Criar Registro</p>
              <Input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} className="border-2 border-white p2 rounded-2x font-bold bg-white" />
              <Input placeholder="Estado" value={state} onChange={(e) => setState(e.target.value)} className="border-2 border-white p2 rounded-2x font-bold bg-white" />
              <Input placeholder="Esporte Favorito" value={favoriteSport} onChange={(e) => setSport(e.target.value)} className="border-2 border-white p2 rounded-2x font-bold bg-white" />
              <Input placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} className="border-2 border-white p2 rounded-2x font-bold bg-white" />
              <Input type="password" placeholder="Senha" value={password} onChange={(e) => setSenha(e.target.value)} className="border-2 border-white p2 rounded-2x font-bold bg-white" />
              <Button onClick={HandleLogin}>Cadastre-se já</Button>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
