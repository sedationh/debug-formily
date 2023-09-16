import { createForm } from "@mini/core"
import { Field, FormConsumer, FormProvider } from "@mini/react"
import { FormItem, Input, Submit } from "@mini/antd"

const form = createForm({
  initialValues: {
    name: "hi",
  } as any,
})

const createPasswordEqualValidate = (equalName) => (field) => {
  if (!form.values["equalName"] && field.value && form.values[equalName] !== field.value) {
    field.selfErrors = ["Password does not match Confirm Password."]
  } else {
    field.selfErrors = []
  }
}

// 注册
export default function RegisterPage() {
  return (
    <div>
      <h3>RegisterPage</h3>
      <FormProvider form={form}>
        <Field
          name="name"
          title="Name"
          required
          decorator={[FormItem]}
          component={[Input, { placeholder: "Please Input" }]}
        />

        <Field
          name="password"
          title="Password"
          required
          decorator={[FormItem]}
          component={[Input, { type: "password", placeholder: "Please Input" }]}
          reactions={createPasswordEqualValidate("confirmPassword")}
        />
        <Field
          name="confirmPassword"
          title="Confirm Password"
          required
          decorator={[FormItem]}
          component={[Input, { type: "password", placeholder: "Please Input" }]}
          reactions={createPasswordEqualValidate("password")}
        />

        <Submit
          onSubmit={(res) => {
            console.log(res) //sy-log
          }}
          onSubmitSuccess={(...args) => {
            console.log("omg success", args) //sy-log
          }}
          onSubmitFailed={(...args) => {
            console.log("omg failed", args) //sy-log
          }}
          onClick={() => {}}
        >
          提交
        </Submit>

        <div>
          <FormConsumer>{(form) => JSON.stringify(form.values)}</FormConsumer>
        </div>
      </FormProvider>
    </div>
  )
}
