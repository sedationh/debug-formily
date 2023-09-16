import { useContext } from "react"
import { FormContext } from "./context"

export const useForm = () => {
  const form = useContext(FormContext)

  return form
}
