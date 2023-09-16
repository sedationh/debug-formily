import { createForm } from "@formily/core"
import { FormProvider, FormConsumer, Field } from "@formily/react"
import { FormItem, Input, Submit } from "@mini/antd"
// import { FormItem, Input, Submit } from "@formily/antd"

const form = createForm()

const FormilyPage = (props) => {
  return (
    <div>
      <h3>FormilyPage</h3>
      <FormProvider form={form}>
        <Field
          name="input"
          title="输入框"
          required
          initialValue="Hello world"
          decorator={[FormItem]}
          component={[Input]}
        />
         <Field
          name="input2"
          title="输入框"
          required
          initialValue="Hello world"
          decorator={[FormItem]}
          component={[Input]}
        />
        <FormConsumer>
          {() => (
            <div
              style={{
                marginBottom: 20,
                padding: 5,
                border: "1px dashed #666",
              }}
            >
              Real-time response：{JSON.stringify(form.values)}
            </div>
          )}
        </FormConsumer>
        <Submit onSubmit={console.log}>submit</Submit>
      </FormProvider>
    </div>
  )
}

export default FormilyPage
