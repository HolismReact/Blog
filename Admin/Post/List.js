import { List, Text as TextFilter, Enum, ValueWithTitle } from '@List'
import { Form, Text, LongText, Slug } from '@Form'

const filters = <>
    <TextFilter
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
    <td>
        <ValueWithTitle 
            value={item.title}
            title={item.summary}
        />
    </td>
    <td>{item.date}</td>
    <td>{item.state}</td>
</>

const inputs = <>
    <Text
        column="Title"
        placehodler="Title"
        required="Title is not written"
    />
    <Slug />
    <LongText
        column="Summary"
        placehodler="Summary"
    />
</>

const CreatePost = () => {
    return <Form
        title="Create a post"
        entityType='BlogPost'
        inputs={inputs}
    />
}

const BlogPosts = () => {
    return <List
        title='Posts'
        entityType='BlogPost'
        filters={filters}
        headers={headers}
        row={row}
        create={CreatePost}
        hasEdit={true}
        hasDelete={true}
    />
}

export default BlogPosts