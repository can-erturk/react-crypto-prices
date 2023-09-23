import { toast } from "react-toastify"

// Define available toast messages
const toastMessages = {
  demoAlert: {
    type: "info",
    message: "This is a demo feature and is currently unavailable.",
  },
  apiError: {
    type: "error",
    message: "Outdated data is being displayed due to an invalid response from the API. The cause of this error could be too many requests. Error code: 429",
  },
}

const createToast = (key, autoClose = 5000) => {

  // Extract type and message from specified toast message
  const { type, message } = toastMessages[key]
  
  // Display toast message with its type and autoClose duration
  toast[type](message, { autoClose })
}

export default createToast