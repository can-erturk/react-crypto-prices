import showToast from "~/helpers/showToast"
import SectionTitle from "./ui/SectionTitle"
import { FaAngleRight } from "react-icons/fa"

function DownloadNow() {

  // Function for handling demo alerts when buttons are clicked
  const demoAlertHandler = () => showToast.demoAlert()

  return (
    <section id="download-now" className="py-0">
      {/* <div className="container"> */}
      <div className="container overflow-hidden rounded-3xl py-44 max-sm:py-24 border-none border-default relative">

        <SectionTitle
          title="Download Now"
          description="If you wish to download the app, you can start a subscription or try it for free with the buttons below."
        />

        <div className="flex max-sm:flex-col gap-4 justify-center items-center -mt-2 max-sm:-mt-6">
          <button className="flex items-center font-medium bg-white text-black py-3 px-8 rounded-full max-lg:py-2 max-lg:px-4 max-lg:text-sm" onClick={demoAlertHandler}>
            <span>Start Subscription</span>
            <FaAngleRight className="ml-2 -mr-2 mt-[1px]" size={14} />
          </button>
          <button className="flex items-center font-medium py-3 px-8 border border-[#99999960] rounded-full max-lg:py-2 max-lg:px-4 max-lg:text-sm" onClick={demoAlertHandler}>
            <span>Try for Free</span>
            <FaAngleRight className="ml-2 -mr-2 mt-[1px]" size={14} />
          </button>
        </div>

      </div>
    </section>
  )
}

export default DownloadNow
