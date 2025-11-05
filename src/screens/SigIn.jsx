import { FormLogin } from "../components/ui/FormLogin.jsx"
import { Header } from "../components/ui/Header.jsx"

export function SigIn() {
  return (
    <>
    <div className="w-2xl h-full mx-auto">
      <Header />
      <FormLogin />
    </div>
    </>
  )
}