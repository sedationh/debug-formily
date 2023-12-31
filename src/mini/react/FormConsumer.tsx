import { observer } from "@mini/reactive-react"
import { useForm } from "./hooks"

const FormConsumer = observer(({ children }: any) => {
  const form = useForm()
  return children?.(form)
})

export default FormConsumer
