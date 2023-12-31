import { define, observable } from "@formily/reactive"
import { FieldStore } from "./FieldStore"
import { batchSubmit } from "./internal"

export class FormStore {
  props

  values

  fields: Record<string, FieldStore> = {}

  constructor(props) {
    this.props = props
    this.values = props.initialValues

    this.makeObservable()
  }

  createField(props) {
    const { name } = props

    if (!this.fields[name]) {
      new FieldStore(props, this)
    }

    return this.fields[name]
  }

  makeObservable = () => {
    define(this, {
      fields: observable.shallow,
      values: observable,
    })
  }

  onMount() {}

  onUnmount() {}

  submit = (onSubmit) => {
    return batchSubmit(this, onSubmit)
  }
}
