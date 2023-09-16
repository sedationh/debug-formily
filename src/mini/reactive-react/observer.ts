/* eslint-disable react-hooks/rules-of-hooks */
import { memo, useEffect, useReducer, useRef } from "react"
import { Tracker } from "@formily/reactive"

const useObserver = (view) => {
  const [, forceUpdate] = useReducer((x) => x + 1, 1)

  const trackerRef = useRef(null)
  if (!trackerRef.current) {
    trackerRef.current = new Tracker(() => {
      forceUpdate()
    })
  }

  useEffect(() => {
    return () => {
      if (!trackerRef.current) {
        return
      }
      trackerRef.current.dispose()
      trackerRef.current = null
    }
  }, [])

  return trackerRef.current?.track(view)
}

const observer = (component) => {
  const WrappedComponent = (props) => {
    return useObserver(() => component({ ...props }))
  }

  return memo(WrappedComponent)
}

export default observer
