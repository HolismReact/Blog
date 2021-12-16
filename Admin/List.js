import {
    List,
    Text,
    Enum,
} from '@List';
import CreateBlog from './Create';


const headers =
    <>
        <th>#</th>
        <th>Title</th>
    </>

const row = (item) => {
    return <>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.title}</td>
    </>
}

const breadcrumbItems = [
    {
        title: 'Home',
        url: '/'
    },
    {
        title: 'Blogs',
        url: '/blogs',
    },
    {
        title: 'List',
        url: '/blogs'
    }
]

const Blogs = (props) => {

    return (
        <List
            title="Blogs"
            entity="blog"
            headers={headers}
            row={row}
            create={CreateBlog}
        />
    );
}
export default Blogs;