import { toast } from "react-toastify"

const demoAlert = () => toast.info("This is a demo feature and is currently unavailable.")

const apiError = () => {
  toast.error("Outdated data is being displayed due to an invalid response from the API. The cause of this error could be too many requests. Error code: 429", {
    autoClose: 5000
  })
}

const showToast = {
  demoAlert,
  apiError
}

export default showToast