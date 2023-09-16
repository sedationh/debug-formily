import { autorun, batch, toJS } from "@formily/reactive"

export const validateSelf = (field) => {
  const query = field.query
  const value = field.value

  if (query.required && (value == "" || value == undefined)) {
    field.selfErrors = ["请输入必填项"]
  } else {
    if (field.selfErrors.includes("请输入必填项")) {
      field.selfErrors = []
    }
  }
}

export const createReactions = (field) => {
  const reactions = field.props.reactions
  if (typeof reactions === "function") {
    autorun(
      batch.bound(() => {
        reactions(field)
      })
    )
  }
}

export const batchValidate = async (target) => {
  target.errors = []
  for (const key in target.fields) {
    const field = target.fields[key]

    validateSelf(field)

    if (field.selfErrors[0]) {
      target.errors.push({ key, msg: field.selfErrors[0] })
    }
  }

  if (target.errors.length > 0) {
    throw target.errors
  }
}

export const batchSubmit = async (form, onSubmit) => {
  await batchValidate(form)
  const res = onSubmit(toJS(form.values))
  return res
}
