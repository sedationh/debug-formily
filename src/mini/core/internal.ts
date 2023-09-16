import { autorun, batch } from "@formily/reactive"

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
