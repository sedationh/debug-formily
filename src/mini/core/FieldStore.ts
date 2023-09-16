import { define, observable } from "@formily/reactive"

export class FieldStore {
  name
  component
  decorator
  selfErrors = []
  value
  form
  props

  constructor(props, formStore) {
    this.props = props
    this.component = props.component
    this.decorator = props.decorator
    this.name = props.name
    this.form = formStore
    this.value = this.form.values[this.name]
    this.form.fields[this.name] = this

    this.makeObservable()
  }

  makeObservable = () => {
    define(this, {
      value: observable,
    })
  }

  onInput = (e) => {
    const newValue = e.target.value

    this.value = newValue
    this.form.values[this.props.name] = newValue
  }
}
