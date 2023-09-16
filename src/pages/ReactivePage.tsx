import { observable } from "@formily/reactive"
import { observer } from "@formily/reactive-react"
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
          console.log('%c seda - [ obj ]-15-「ReactivePage」', 'font-size:13px; background:pink; color:#bf2c9f;', obj)
          console.log(
            "%c seda - [ obj.cnt ]-13-「ReactivePage」",
            "font-size:13px; background:pink; color:#bf2c9f;",
            obj.cnt
          )
        }}
      >
        +1
      </Button>
      {JSON.stringify(obj)}
    </div>
  )
})

export default ReactivePage
