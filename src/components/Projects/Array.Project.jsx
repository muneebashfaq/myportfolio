'use client'
import showrealz from '../../assets/showrealz2.PNG'
import RGSC from '../../assets/RGSC.PNG'
import console from '../../assets/console.PNG'
import tudunum from '../../assets/tudunum.PNG'
import TISZA_Világ from '../../assets/TISZA Világ.PNG'
import Sabby from '../../assets/sabby.png'
const ArrayProject = [
  {
    pic_url: TISZA_Világ.src || TISZA_Világ,
    title: 'TISZA Világ',
    description: 'A community engagement platform developed for Hungary’s Tisztelet és Szabadság Párt (TISZA Party) enabling users to participate in local civic activities through gamified challenges, events, and volunteer networking. Designed to drive active participation and strengthen community involvemen',
    stack: ['React.ts', 'Asp.Net', 'Mysql'],
    liveUrl: 'https://beta.tv.stg.wevolve.world/login',
    github: null,
  },
  {
    pic_url: Sabby.src || Sabby,
    title: 'Sabby',
    description: 'Sabby is a global streaming platform offering curated documentaries, lifestyle and cultural content with multilingual support. Built for seamless viewing across web, mobile and smart TVs it delivers high-quality, on-demand, ad-free entertainment with scalable architecture.',
    stack: ['React.ts', 'Asp.Net', 'Mysql'],
    liveUrl: 'https://sabby.tv/',
    github: null,
  },
  {
    pic_url: showrealz.src || showrealz,
    title: 'Showrealz',
    description: 'A video-based talent platform connecting performing artists with global opportunities. Features smooth scrolling reels, AI-powered search, and profile-based content to showcase skills and improve discoverability.',
    stack: ['React.ts', 'Node.js', 'Express.js', 'MongoDb'],
    liveUrl: 'https://beta.showrealz.com/home',
    github: null,
  },
  {
    pic_url: console.src || console,
    title: 'Console',
    description: 'A centralized admin console designed to manage content and operations across multiple platforms. It enables video uploads, editing and AI-powered subtitle generation, ensuring efficient content management and seamless control over application data and functionalities',
    stack: ['React.ts', 'Asp.Net', 'Mysql'],
    liveUrl: 'https://console.tv.stg.wevolve.world/',
    github: null,
  },
  {
    pic_url: RGSC.src || RGSC,
    title: 'RGSC',
    description: 'G-Coin is a digital gold platform built on blockchain technology that tracks responsibly sourced gold across the supply chain—from mine to vault—and enables secure global trading through tokenized assets.',
    stack: ['React.ts', 'Node.js', 'Express.js', 'MongoDb'],
    liveUrl: 'https://portal.gcoin.com/#/',
    github: null,
  },

  {
    pic_url: tudunum.src || tudunum,
    title: 'Tudo Num',
    description: 'Tudo Num is an all-in-one super app designed to simplify everyday life by connecting users with essential services, enabling seamless interactions and creating new opportunities through a unified digital platform',
    stack: ['React', 'Django', 'Python', 'postgresql'],
    liveUrl: 'https://www.tudonum.app/',
    github: null,
  },
]

export default ArrayProject
