// sub-posts
import SinglePost from "./SinglePost"

// main
const PostsList = () => {
  return (
    <div className="flex-grow mt-1 h-[82vh] overflow-y-auto pr-1" id="note-list-con">
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
    </div>
  )
}

export default PostsList