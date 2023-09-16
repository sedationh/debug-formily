import { useForm } from "@formily/react"

// https://antd.formilyjs.org/zh-CN/components/submit
const Submit = ({ children, onSubmit, onSubmitSuccess, onSubmitFailed, onClick }) => {
  // 获取form表单
  const form = useForm()
  return (
    <button
      onClick={(e) => {
        if (onClick) {
          if (onClick(e) === false) {
            return
          }
        }
        if (onSubmit) {
          form.submit(onSubmit).then(onSubmitSuccess).catch(onSubmitFailed)
        }
      }}
    >
      {children}
    </button>
  )
}

export default Submit
