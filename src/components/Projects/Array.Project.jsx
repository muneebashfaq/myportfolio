'use client'
import ecommerce from '../../assets/ecommerce.PNG'
import lms from '../../assets/lms.png'
import vms from '../../assets/vms.PNG'
import mao from '../../assets/mao.PNG'
import frogpay from '../../assets/frogpay.PNG'
import talentapp from '../../assets/talentapp.PNG'

const ArrayProject = [
  {
    pic_url: ecommerce.src || ecommerce,
    title: 'E-Commerce',
    description: 'Built with ReactJS as frontend and Django as backend — a full-featured e-commerce platform.',
    github: 'https://muneebashfaq.github.io/e-commerce/',
  },
  {
    pic_url: lms.src || lms,
    title: 'Learning Management System',
    description: 'Built with HTML, CSS, Bootstrap, JavaScript as frontend and Django as backend.',
    github: null,
  },
  {
    pic_url: vms.src || vms,
    title: 'Vehicle Management System',
    description: 'Built with HTML, CSS, Bootstrap, JavaScript as frontend and Django as backend.',
    github: null,
  },
  {
    pic_url: mao.src || mao,
    title: 'Govt M.A.O College Website',
    description: 'Built with ReactJS — an official website for a Government College.',
    github: 'https://muneebashfaq.github.io/mao_web/',
  },
  {
    pic_url: frogpay.src || frogpay,
    title: 'Frogpay',
    description: 'Built for an international client using ReactJS — a cryptocurrency payment app.',
    github: 'https://muneebashfaq.github.io/frogpay/',
  },
  {
    pic_url: talentapp.src || talentapp,
    title: 'TalentApp',
    description: 'Built with ReactJS and Django — parses CVs and shortlists candidates automatically.',
    github: 'https://muneebashfaq.github.io/talentapp/',
  },
]

export default ArrayProject
