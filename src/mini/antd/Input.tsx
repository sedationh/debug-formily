import { Input as AntdInput } from "antd"

const Input = (props) => {
  console.log('%c [ props ]-4', 'font-size:13px; background:pink; color:#bf2c9f;', props)
  return <AntdInput {...props} />
}

export default Input
