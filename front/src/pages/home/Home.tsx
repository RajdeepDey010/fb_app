import LeftNav from '../../components/LeftNav'
import RightNav from '../../components/RightNav'
import PostFeed from '../../components/PostFeed'
import AppLayout from '../../Layouts/AppLayout'

function Home() {
    return (
        <AppLayout>
            <div className='flex justify-between text-black flex-1 h-full'>
                <LeftNav />
                <PostFeed />
                <RightNav />
            </div>
        </AppLayout>
    )
}

export default Home
