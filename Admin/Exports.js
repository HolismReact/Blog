import { BlogPosts } from './Post/List'
import PostContent from './Post/Content'
import ArticleIcon from '@mui/icons-material/Article';

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

const BlogMenu = [
    {
        "title": "Blog",
        "icon": ArticleIcon,
        "children": [
            {
                "title": "Posts",
                "url": "/posts"
            },
            {
                "title": "Comments",
                "url": "/comments?entityType=blogPost"
            },
            {
                "title": "Categories",
                "url": "/hierarchies?entityType=blogPost"
            },
            {
                "title": "Tags",
                "url": "/tags?entityType=blogPost"
            }
        ]
    }
]

export { BlogRoutes }
export { BlogPosts }
export { BlogMenu }