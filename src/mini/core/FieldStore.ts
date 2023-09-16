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
  }

  onInput = (e) => {
    const newValue = e.target.value
    console.log("%c seda - [ newValue ]-21-「FieldStore」", "font-size:13px; background:pink; color:#bf2c9f;", newValue)

    this.value = newValue
    this.form.values[this.props.name] = newValue
  }
}
