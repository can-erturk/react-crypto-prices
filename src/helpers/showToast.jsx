import { toast } from 'react-toastify'

const setApiErrorShown = () => {
  localStorage.setItem('apiErrorShown', true)
}

// Demo features
const demoAlert = () => {
  toast.info('This is a demo feature and is currently unavailable.')
}

// Axios error
const axiosError = () => {
  toast.error(
    <>
      <p className="text-sm block ml-2">
        An unknown error occurred and the data couldn't be fetched. Please check
        the browser console for more.
      </p>
    </>,
    {
      autoClose: false,
    },
  )
}

// CoinGecko API error
const apiError = () => {
  toast.error(
    <>
      <p className="text-sm block ml-2">Invalid response from the API.</p>
      <p className="text-sm block ml-2">Error code: 429</p>
      <button
        className="border border-default py-2 px-4 rounded-md hover:bg-zinc-800 text-xs block ml-auto mt-4"
        onClick={setApiErrorShown}
      >
        Dont show again
      </button>
    </>,
  )
}

const showToast = {
  demoAlert,
  axiosError,
  apiError,
}

export default showToast
