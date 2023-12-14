import SectionTitle from './ui/SectionTitle'
import SectionVideo from './ui/SectionVideo'
import WhyUsItem from './ui/WhyUsItem'

import { BsFillShieldLockFill } from 'react-icons/bs'
import { GiReceiveMoney } from 'react-icons/gi'
import { FaUserShield } from 'react-icons/fa'
import { FaUserFriends } from 'react-icons/fa'
import { FaUserCheck } from 'react-icons/fa'
import { FaUserCog } from 'react-icons/fa'

function WhyUs() {
  const data = [
    {
      icon: BsFillShieldLockFill,
      title: 'Robust Security Measures',
      text: 'Our top priority is safeguarding customer assets. From two-factor authentication to cold storage.',
    },
    {
      icon: GiReceiveMoney,
      title: 'Extensive Range of Cryptocurrencies',
      text: 'We offer an ideal option for every type of investor. Access not only to leading cryptocurrencies.',
    },
    {
      icon: FaUserShield,
      title: 'Swift Transactions and High Liquidity',
      text: 'Providing the best trading experience with lightning-fast transaction speeds and market liquidity.',
    },
    {
      icon: FaUserFriends,
      title: 'User-Friendly Interface and Experience',
      text: 'Our platform is designed for seamless navigation and ease of use, ensuring a smooth experience.',
    },
    {
      icon: FaUserCheck,
      title: 'Exceptional Customer Support',
      text: 'Our dedicated support team is available around the clock to assist users with any queries.',
    },
    {
      icon: FaUserCog,
      title: 'Advanced Trading Tools and Analytics',
      text: 'Equipping traders with advanced tools and in-depth analytics for informed decision-making.',
    },
  ]

  return (
    <section className="why-us py-0 border-none">
      <div className="container py-16 max-sm:py-12 pb-32 border-b border-default rounded-3xl">
        <SectionVideo src="/videos/globe.mp4" />

        <SectionTitle
          title="Why Choose Us?"
          description="You can see below why people choose us. We provide the best service for you."
        />

        <div className="grid grid-cols-3 gap-x-14 gap-y-16 grid-rows-2 max-md:grid-cols-1 max-md:grid-rows-6 max-md:gap-16 max-md:text-center pt-4">
          {data.map((item, index) => (
            <WhyUsItem
              key={index}
              Icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
