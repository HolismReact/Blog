import { List, Text as TextFilter, Enum, ValueWithTitle, DateTimeTitleAgo, TitleSubtitle, app } from '@List'
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

const row = (item) => {
    let stateStyle = "";
    switch (item.stateKey) {
        case "Draft":
        default:
            stateStyle = "bg-red-400 text-white";
            break;
        case "Published":
            stateStyle = "bg-green-400";
            break;
    }
    return <>
        <td>
            <a target='_blank' href={`${app.env('BLOG_URL')}/${item.slug}`}>
                <TitleSubtitle
                    title={<ValueWithTitle
                        value={item.title}
                        title={item.summary}
                    />}
                    subtitle={item.slug}
                />
            </a>
        </td>
        <td>
            <DateTimeTitleAgo
                date={item.utcDate}
                ago={item.relatedItems.timeAgo}
            />
        </td>
        <td>{item.state}</td>
    </>
}

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