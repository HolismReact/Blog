import { BlogPosts } from './Post/List'
import PostContent from './Post/Content'

const BlogRoutes = [
    {
        "path": "/posts",
        "component": BlogPosts
    },
    {
        "path": "/post/editContent",
        "component": PostContent
    }
]

export { BlogRoutes }
export { BlogPosts }