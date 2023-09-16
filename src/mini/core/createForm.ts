import { FormStore } from "./FormStore"

export const createForm = (options) => {
  return new FormStore(options)  
}
