import { FieldContext } from "@formily/react"
import { observer } from "@formily/reactive-react"
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
