import { observer } from "@mini/reactive-react"
import { FieldContext } from "@mini/react"
import { useContext } from "react"

const FormItem = observer(({ children }) => {
  const field = useContext(FieldContext)

  return (
    <div>
      <div>{field.title}</div>
      {children}
      <div className="red">{(field as any).selfErrors.join(",")}</div>
    </div>
  )
})

export default FormItem
