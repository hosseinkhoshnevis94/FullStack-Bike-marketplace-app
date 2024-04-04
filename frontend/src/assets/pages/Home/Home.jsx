import React from 'react'
import HeroSetion from '../../components/HeroSetion/HeroSetion'
import { useSelector } from 'react-redux'

export default function Home() {

  const{loading , error,user} = useSelector(state=>state.user)
console.log(user);


  return (
    <div>
     <HeroSetion></HeroSetion>
        
    </div>
  )
}
