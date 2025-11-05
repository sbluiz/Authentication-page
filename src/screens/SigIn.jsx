import { FormLogin } from "../components/ui/FormLogin.jsx"
import { Registers } from "../components/ui/Registers.jsx"

export function SigIn() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="max-w-4xl w-full mx-auto space-y-6">
          <FormLogin />
          <Registers />
        </div>
      </div>
    </>
  )
}