import { FaDiscord, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa6'
import showToast from '~/helpers/showToast'

function Footer() {
  // Function for handling demo alerts when buttons are clicked
  const demoAlertHandler = () => showToast.demoAlert()

  const socials = [
    {
      icon: FaTwitter,
      color: '#179cf0',
    },
    {
      icon: FaDiscord,
      color: '#5865f2',
    },
    {
      icon: FaFacebook,
      color: '#1f7bf2',
    },
    {
      icon: FaYoutube,
      color: '#ff0808',
    },
  ]

  return (
    <>
      <div className="container py-16 flex flex-col items-center gap-2">
        <div className="flex flex-wrap items-center gap-2">
          {socials.map((social, index) => (
            <span
              key={index}
              className={`inline-block p-2 transition-all hover:text-[${social.color}] cursor-pointer`}
              onClick={demoAlertHandler}
            >
              <social.icon size={30} />
            </span>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap">
          <span
            className="inline-block p-2 opacity-60 hover:underline cursor-pointer"
            onClick={demoAlertHandler}
          >
            Terms of Use
          </span>
          <span
            className="inline-block p-2 opacity-60 hover:underline cursor-pointer"
            onClick={demoAlertHandler}
          >
            Privacy Policy
          </span>
        </div>
      </div>
    </>
  )
}

export default Footer
