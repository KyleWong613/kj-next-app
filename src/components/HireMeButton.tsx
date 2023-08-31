import styles from './Button.module.css'
import {GithubSvg, LinkedInSvg} from './Icons';
import {motion} from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export function HireMeButton() {
  const [isActive, setIsActive] = React.useState(false);

  return (
    
        <div className="w-48 h-auto hidden lg:flex items-center justify-center relative md:w-24">
            <nav className="flex items-center justify-center flex-wrap pt-2 mr-4">
              <motion.a href="/certifications"
                 whileTap={{scale:0.9}}
              className="w-6 mx-3">
              <FontAwesomeIcon icon={faCertificate} className="fa-2rem w-8 mx-3" />
              </motion.a>
            </nav>
            <div>
              <a className="items-center  translate-x-[-50%] translate-y-[-50%] shadow-md border
               border-solid bg-dark rounded-full"
               href="mailto:kaijengre2@gmail.com">
                Hire Me
              </a>
            </div>
          
        </div> 
  )
}