'use client';
import styles from './page.module.scss'
import { useRef } from 'react';
import Header from '../components/header';
import Pica from '../components/main';
import StickyCursor from '../components/stickyCursor';

export default function Home() {
  
  const stickyElement = useRef(null);

  return (
    <main >
      <Header ref={stickyElement}/>
      {/* <Pica ref={stickyElement}/> */}
      <StickyCursor stickyElement={stickyElement}/>
    </main>
  )
}