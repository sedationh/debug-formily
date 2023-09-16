import { createElement, useContext } from "react"
import { FieldContext, FormContext } from "./context"
import { observer } from "@mini/reactive-react"

const Field = observer((props: any) => {
  const form = useContext(FormContext)
  const field = form.createField(props)

  const component = createElement(field.component[0], {
    ...field.component[1],
    value: field.value,
    onChange: field.onInput,
  })

  const decorator = createElement(field.decorator[0], field.decorator[1], component)

  return <FieldContext.Provider value={field}>{decorator}</FieldContext.Provider>
})

export default Field
