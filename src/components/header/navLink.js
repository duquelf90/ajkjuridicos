import { useRouter } from 'next/router'
import {
  Link as ScrollLink,
  animateScroll as scroll,
  scroller,
} from 'react-scroll'

const navbarData = [
  { title: 'Home', slug: 'home' },
  { title: 'Servicios', slug: 'services' },
  { title: 'Quienes somos', slug: 'features' },
  { title: 'Contacto', slug: 'contact' },
]

export const NavLink = ({ className }) => {
  const router = useRouter()
  const scrollTarget = (target) =>
    scroller.scrollTo(target, {
      smooth: true,
      duration: 500,
      offset: -120,
      spy: true,
      setActiveLink: target,
    })

  const scrollToPage = async (target) => {
    if (router.pathname !== '/') {
      await router.push('/')
    }
    scrollTarget(target)
  }
  return (
    <div className="flex flex-wrap items-center">
      <div className="w-auto">
        <div className={`${className} w-auto lg:block`}>
          <div className="lg:flex lg:items-center lg:w-auto lg:space-x-12 text-sm mr-10 ">
            {navbarData.map(({ slug, title }, i) => (
              <div
                onClick={() => scrollToPage(slug)}
                key={i}
                className="font-mono hover:text-[#4eb9db] text-lg font-semibold cursor-pointer"
              >
                {title}
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export const MobileNav = ({ className }) => {
  const router = useRouter()
  const scrollTarget = (target) =>
    scroller.scrollTo(target, {
      smooth: true,
      duration: 500,
      offset: -90,
      spy: true,
      setActiveLink: target,
    })

  const scrollToPage = async (target) => {
    if (router.pathname !== '/') {
      await router.push('/')
    }
    scrollTarget(target)
  }
  return (
    <div className="flex flex-col items-left pl-8 text-white ">
      {navbarData.map(({ slug, title }, i) => (
        <div
          onClick={() => scrollToPage(slug)}
          key={i}
          className="hover:text-yellow-funded text-3xl font-bold cursor-pointer py-2 font-mono"
        >
          {title}
        </div>
      ))}

    </div>
  )
}
