import { Routes, Route } from 'react-router-dom';


import * as T from './types'

import { useEffect, useState } from 'react';

import { AppRouter } from './router/AppRouter';


type Props = {}

export const App = (props: Props) => {

  const [theme, setTheme] = useState('null')

  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
  //     setTheme("dark")
  //   } else {
  //     setTheme("light")
  //   }
  // }, [])

  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }


  return (
    <>
      <AppRouter/>
    
    </>
   
  )
}

 