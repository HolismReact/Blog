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

const Posts = () => {
    return <List
        title='Posts'
        entityType='Post'
        filters={filters}
        headers={headers}
        row={row}
    />
}

export default Posts