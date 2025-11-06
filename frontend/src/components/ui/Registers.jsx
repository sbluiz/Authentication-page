import { useEffect, useState } from "react";
import {
  Table, TableBody, TableCaption, TableCell,
  TableHead, TableHeader, TableRow
} from "./table.jsx";


const API_URL = "https://backend-authentication-nryf.onrender.com";


export function Registers() {
  // Estado que vai guardar os dados vindos do backend
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function carregarDados() {
      try {
        const resposta = await fetch(`${API_URL}/usuarios`);
        const dados = await resposta.json();
        setUsuarios(dados);
      } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
      }
    }

    // 🔹 Carrega os dados na montagem do componente
    carregarDados();

    // 🔹 Atualiza automaticamente a cada 5 segundos
    const intervalo = setInterval(carregarDados, 5000);

    // 🔹 Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="p-5">
      <div>
        <h1 className="font-bold text-2xl">Contas cadastradas</h1>
        <p>Deixe marcado que você passou por aqui.</p>
      </div>

      <Table>
        <TableCaption>
          A lista é atualizada sempre que alguém se cadastra ou verifica suas credenciais de login.
        </TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Nome</TableHead>
            <TableHead>Data de Cadastro</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead className="text-right">Esporte Favorito</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {usuarios.length > 0 ? (
            usuarios.map((user, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.createdAt}</TableCell>
                <TableCell>{user.state}</TableCell>
                <TableCell className="text-right">{user.favoriteSport}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-4 text-gray-500">
                Nenhum registro encontrado
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
