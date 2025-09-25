import React from 'react'
import {
  Link as ScrollLink,
  animateScroll as scroll,
  scroller,
} from 'react-scroll'
import { useRouter } from 'next/router'
import { Icon } from '@iconify/react'


export const SignIn = () => {
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
    <div
      onClick={() => scrollToPage('pricing')}
      className="flex mr-10 text-lg text-[#4eb9db] hover:text-[#8668de] font-bold place-items-center font-mono"
    >
      <span>Agendar consulta</span>
      <Icon icon="lets-icons:sign-in" width="24" height="24" className='mx-2'></Icon>
    </div>
  )
}

export const CTA = ({ name, text }) => {
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
    <div
      onClick={() => scrollToPage(name)}

    >
      <Animated text={text} />
    </div>

  );
};

export const AnimatedCTA = ({ name, text }) => {
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
    <div
      onClick={() => scrollToPage(name)}
    >
      <Animated text={text} />
    </div>

  );
};

export const Animated = ({ text }) => {
  return (
    <button className="group relative p-px block w-full text-base text-gray-900 font-bold bg-gradient-cyan overflow-hidden rounded-md">
      <div className="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-300 "></div>
      <div className="py-4 px-7 bg-[#4d3398] rounded-md">
        <p className="relative z-10 text-white tracking-px uppercase text-xl">
          {text}
        </p>
      </div>
    </button>
  )
}

export const HomeButton = ({ text }) => {
  return (
    <button className="group relative p-px block w-full text-base text-gray-900 font-bold bg-gradient-cyan overflow-hidden rounded-md borde-2">
      <div className="absolute top-0 left-0 h-full w-full transition ease-in-out duration-300 bg-gradient-to-r from-blue-600 from-0% via-purple-900 via-100%"></div>
      <div className="py-4 px-7 bg-[#4d3398] rounded-md">
        <p className="relative z-10 text-white tracking-px uppercase text-xl">
          {text}
        </p>
      </div>
    </button>
  )
}

export const Login = ({ text }) => {
  return (
    <a className="inline-block bg-yellow-funded-90  items-center justify-center py-2 px-4 hover:-translate-y-1 duration-300 delay-150 ease-in-out hover:scale-110 font-bold font-heading hover:bg-yellow-funded-70 rounded-lg text-funded-150">
      {text}
    </a>
  )
}

import { motion, useAnimation  } from 'framer-motion';
import { useEffect } from 'react';

export const AnimatedButton = ({ text }) => {
  const controls = useAnimation();

    useEffect(() => {
      const interval = setInterval(() => {
          controls.start({
              x: ['-100%', '100%'], // Mueve el láser de izquierda a derecha
              transition: { duration: 1.5, ease: 'linear' },
          });
      }, 3000);
      return () => clearInterval(interval);
  }, [controls]);

    return (
      <div className="relative">
      
      <button className="relative p-px block w-full text-base text-gray-900 font-bold bg-gradient-cyan overflow-hidden rounded-md border-2">
      <motion.div
          className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-purple-900 via-90% to-transparent"
          animate={controls}
          style={{ zIndex: 1 }}
      />
          <div className="absolute top-0 left-0 h-full w-full transition ease-in-out duration-300 bg-gradient-to-r from-blue-600 from-0% via-purple-900 via-100%"></div>
          <div className="py-4 px-7 bg-[#4d3398] rounded-md">
              <p className="relative z-10 text-white tracking-px uppercase text-xl">
                  {text}
              </p>
          </div>
      </button>
  </div>
    );
};




