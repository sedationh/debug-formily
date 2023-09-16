import { observable } from "@formily/reactive"
import { observer } from "@mini/reactive-react"
import { Button } from "antd"

const obj = observable({
  cnt: 1,
})

const ReactivePage = observer(() => {

  return (
    <div>
      <Button
        onClick={() => {
          obj.cnt++
        }}
      >
        +1
      </Button>
      {JSON.stringify(obj)}
    </div>
  )
})

export default ReactivePage
