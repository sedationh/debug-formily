import { useEffect } from "react"
import { FormContext } from "./context"
import { observer } from "@formily/reactive-react"

const FormProvider = observer(({ form, children }: any) => {
  useEffect(() => {
    form.onMount()
    return () => {
      form.onUnmount()
    }
  }, [form])

  return <FormContext.Provider value={form}>{children}</FormContext.Provider>
})

export default FormProvider
