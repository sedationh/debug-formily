import { FieldStore } from "./FieldStore"

export class FormStore {
  props

  values

  fields: Record<string, FieldStore> = {}

  constructor(props) {
    this.props = props
    this.values = props.initialValues
  }

  createField(props) {
    const { name } = props

    if (!this.fields[name]) {
      this.fields[name] = new FieldStore(props, this)
    }

    return this.fields[name]
  }

  onMount() {}

  onUnmount() {}
}
