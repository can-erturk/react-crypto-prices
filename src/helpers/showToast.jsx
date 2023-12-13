import { toast } from 'react-toastify'

/*
  Variables used to show error messages only once
  <React.StrictMode> causes the toast to be shown twice
*/
let axiosErrorShown = false
let apiErrorShown = JSON.parse(localStorage.getItem('apiErrorShown')) || false

// Toast message for demo features
const demoAlert = () => {
  toast.info('This is a demo feature and is currently unavailable.')
}

// Toast message for Axios errors
const axiosError = () => {
  // Show error message only once
  if (axiosErrorShown) return
  axiosErrorShown = true

  // Showing toast
  toast.error(
    "An unknown error occurred and the data couldn't be fetched. Please check the browser console for more.",
    {
      autoClose: false,
    },
  )
}

// Toast message for API errors
const apiError = () => {
  // Show error message only once
  if (apiErrorShown) return
  apiErrorShown = true

  // Showing toast
  toast.error(
    <>
      <span className="text-sm">
        Outdated data is being displayed due to an invalid response from the
        API.
      </span>
      <div className="text-xs">
        <span>Error code: 429</span>
        <button
          className="toast-btn"
          onClick={() => localStorage.setItem('apiErrorShown', true)}
        >
          Dont show again
        </button>
      </div>
    </>,
  )
}

// Export all toast messages as a single object
const showToast = {
  demoAlert,
  axiosError,
  apiError,
}

export default showToast
