import { useForm } from "@mini/react"
import { Button } from "antd"

// https://antd.formilyjs.org/zh-CN/components/submit
const Submit = ({
  children,
  onSubmit,
  onSubmitSuccess,
  onSubmitFailed,
  onClick,
}: {
  children: any
  onSubmit?: any
  onSubmitSuccess?: any
  onSubmitFailed?: any
  onClick?: any
}) => {
  // 获取form表单
  const form = useForm()
  return (
    <Button
      onClick={(e) => {
        if (onClick?.(e) === false) {
          return
        }
        if (onSubmit) {
          form.submit(onSubmit).then(onSubmitSuccess).catch(onSubmitFailed)
        }
      }}
    >
      {children}
    </Button>
  )
}

export default Submit
