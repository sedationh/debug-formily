import { define, observable } from "@formily/reactive"
import { createReactions, validateSelf } from "./internal"

export class FieldStore {
  name
  component
  decorator
  selfErrors = []
  value
  form
  props
  query

  constructor(props, formStore) {
    this.props = props
    this.name = props.name
    this.component = props.component
    this.decorator = props.decorator
    this.query = { required: props.required }

    this.form = formStore
    this.value = this.form.values[this.name]
    this.form.fields[this.name] = this

    this.makeObservable()
    this.makeReactive()
  }

  makeObservable = () => {
    define(this, {
      value: observable,
      selfErrors: observable,
    })
  }

  makeReactive = () => {
    createReactions(this)
  }

  onInput = (e) => {
    const newValue = e.target.value

    this.value = newValue
    this.form.values[this.props.name] = newValue

    validateSelf(this)
  }
}
