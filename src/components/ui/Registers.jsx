import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./table.jsx"

export function Registers() {
    return (
        <>  
            <div className="p-5">
                <div>
                    <h1 className="font-bold text-2xl">Contas cadastradas</h1>
                    <p>Deixe marcado que você passou por aqui.</p>
                </div>
                <Table>
                    <TableCaption>A lista é atualizada sempre que alguém se cadastra ou verifica suas credenciais de login.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Nome</TableHead>
                            <TableHead>Data de Cadastro</TableHead>
                            <TableHead>Estado</TableHead>
                            <TableHead className="text-right">Esporte Favorito</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Luiz Henrique Dos Santos Couto</TableCell>
                            <TableCell>05/11/2025</TableCell>
                            <TableCell>Minas Gerais</TableCell>
                            <TableCell className="text-right">Futebol</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </>
    )
}