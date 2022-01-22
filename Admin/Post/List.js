import { List, Text as TextFilter, Enum, ValueWithTitle, DateTimeTitleAgo, app } from '@List'
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
    <td className="text-left">
        <a className="text-lg font-bold " target='_blank' href={`${app.trim(process.env.REACT_APP_BLOG_URL || '', '/')}/${item.slug}`}>
            <ValueWithTitle
                value={item.title}
                title={item.summary}
            />
        </a>
        <div className="text-xs text-gray-400">
            {item.slug}
        </div>
    </td>
    <td>
        <DateTimeTitleAgo
            date={item.utcDate}
            ago={item.relatedItems.timeAgo}
        />
    </td>
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
        // title={(mode) => mode === app.formMode.creation ? 'Create a post' : 'Edit the post'}
        entityType='BlogPost'
        humanReadableEntityType='Post'
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