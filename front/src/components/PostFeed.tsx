import PostCard from './ui/PostCard'

function PostFeed() {
  return (
    <div className='w-1/2 px-4 py-2 flex flex-col gap-3'>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
    </div>
  )
}

export default PostFeed
