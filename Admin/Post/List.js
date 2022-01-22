import { List, Text, Enum } from '@List'

const filters = <>
    <Text
        column='Title'
        placehodler='Title'
    />
    <Enum
        column='StateId'
        placeholder='State'
        entityType='postState'
    />
</>

const headers = <>
    <th>Title</th>
    <th>Date</th>
    <th>State</th>
</>

const row = (item) => <>
    <td>{item.title}</td>
    <td>{item.date}</td>
    <td>{item.state}</td>
</>

const BlogPosts = () => {
    return <List
        title='Posts'
        entityType='BlogPost'
        filters={filters}
        headers={headers}
        row={row}
    />
}

export default BlogPosts