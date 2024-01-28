// sub-posts
import PostsList from "./sub-posts/PostsList"
import NewPost from "./sub-posts/NewPost"

// main
const Posts = () => {
  return (
    <div className="flex-grow flex">
        <div className="max-w-[720px] mx-auto px-3 flex-grow flex flex-col">
            <PostsList />
            <NewPost />
        </div>
    </div>
  )
}

export default Posts