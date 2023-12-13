import { FaDiscord, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6"
import showToast from "~/helpers/showToast"

function Footer() {

  // Function for handling demo alerts when buttons are clicked
  const demoAlertHandler = () => showToast.demoAlert()

  return (
    <>
      <div className="container py-16 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <a className="inline-block p-2 transition-all hover:text-[#179cf0] cursor-pointer" onClick={demoAlertHandler}><FaTwitter size={30} /></a>
          <a className="inline-block p-2 transition-all hover:text-[#5865f2] cursor-pointer" onClick={demoAlertHandler}><FaDiscord size={34} /></a>
          <a className="inline-block p-2 transition-all hover:text-[#1f7bf2] cursor-pointer" onClick={demoAlertHandler}><FaFacebook size={30} /></a>
          <a className="inline-block p-2 transition-all hover:text-[#ff0808] cursor-pointer" onClick={demoAlertHandler}><FaYoutube size={34} /></a>
        </div>
        <div className="flex gap-2">
          <a className="inline-block p-2 opacity-60 hover:underline cursor-pointer" onClick={demoAlertHandler}>Terms of Use</a>
          <a className="inline-block p-2 opacity-60 hover:underline cursor-pointer" onClick={demoAlertHandler}>Privacy Policy</a>
        </div>
      </div>
    </>
  )
}

export default Footer