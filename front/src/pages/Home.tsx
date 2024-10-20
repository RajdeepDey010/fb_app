import React from 'react'
import TopNav from '../components/TopNav'
import LeftNav from '../components/LeftNav'
import RightNav from '../components/RightNav'
import PostFeed from '../components/PostFeed'

function Home() {
    return (
        <div>
            <div>
               <TopNav/>
            </div>
            <div className='flex justify-between text-black'>
                <LeftNav/>
                <PostFeed/>
                <RightNav/>
            </div>
        </div>
    )
}

export default Home
