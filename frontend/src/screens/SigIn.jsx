import { FormLogin } from "../components/ui/FormLogin.jsx"
import { Registers } from "../components/ui/Registers.jsx"

export function SigIn() {
  return (
    <>



      <div className="flex-col">
          <div className="min-h-screen flex items-center justify-center">
            <FormLogin />
          </div>
          <div className="mt-10">
            <Registers />
          </div>
      </div>

    </>
  )
}