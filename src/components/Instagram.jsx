import React from 'react'
import { track } from '@vercel/analytics';

export const Instagram = () => {
  return (
    <div 
    onClick={track('Click en Instagram')}
    id='instagram' 
    className="z-10 w-12 p-3 rounded-full 
    fixed bottom-10 cursor-pointer right-10 bg-sabagreen-50
    mb:right-4 mb:bottom-4">
        <img src="images/instagram.svg" alt="" />
    </div>
  )
}
