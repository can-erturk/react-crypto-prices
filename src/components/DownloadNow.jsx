import SectionTitle from "./ui/SectionTitle"

function DownloadNow() {
  return (
    <section>
      <div className="container">

        <SectionTitle
          title="Download Now"
          description="If you wish to download the app, you can start a subscription or try it for free with the buttons below."
        />

        <div className="flex max-sm:flex-col gap-4 justify-center items-center -mt-2 max-sm:-mt-6">
          <button className="bg-brand py-3 px-6 rounded-full font-medium">Start Subscription</button>
          <button className="font-medium py-3 px-6">Try for free</button>
        </div>

      </div>
    </section>
  )
}

export default DownloadNow
