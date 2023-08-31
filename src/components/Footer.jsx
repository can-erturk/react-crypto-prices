import { FaDiscord, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6"

function Footer() {
  return (
    <div className="container pt-8 pb-12 flex flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        <a href="#" className="inline-block p-2 transition-all hover:text-[#179cf0]"><FaTwitter size={30} /></a>
        <a href="#" className="inline-block p-2 transition-all hover:text-[#5865f2]"><FaDiscord size={34} /></a>
        <a href="#" className="inline-block p-2 transition-all hover:text-[#1f7bf2]"><FaFacebook size={30} /></a>
        <a href="#" className="inline-block p-2 transition-all hover:text-[#ff0808]"><FaYoutube size={34} /></a>
      </div>
      <div className="flex gap-2">
        <a href="#" className="inline-block p-2 opacity-60 hover:underline">Terms of Use</a>
        <a href="#" className="inline-block p-2 opacity-60 hover:underline">Privacy Policy</a>
      </div>
    </div>
  )
}

export default Footer