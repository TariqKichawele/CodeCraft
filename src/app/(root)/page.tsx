import React from 'react'
import Header from './_components/Header'

const Home = () => {
  return (
    <div className='min-h-screen'>
        <div className='max-w-[1800px] mx-auto px-4'>
            <Header />

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                EditorPanel 
                Output Panel
            </div>
        </div>
    </div>
  )
}

export default Home