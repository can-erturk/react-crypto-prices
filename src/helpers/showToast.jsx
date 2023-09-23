import { toast } from "react-toastify"

const demoAlert = () => toast.info("This is a demo feature and is currently unavailable.")

const apiError = () => toast.error(
  <span>
    <span className="text-sm">Outdated data is being displayed due to an invalid response from the API.</span>
    <div className="text-xs">
      <span>Error code: 429</span>
      <button className="toast-btn" onClick={() => localStorage.setItem("apiErrorShown", true)}>Dont show again</button>
    </div>
  </span>
)

const showToast = {
  demoAlert,
  apiError
}

export default showToast