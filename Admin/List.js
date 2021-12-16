import {
    List,
    Text,
    Enum,
    ListAction,
    ItemAction,
    post,
    ValueWithTitle,
    app
} from '@List';
import DoneIcon from '@mui/icons-material/Done';
import MessageIcon from '@mui/icons-material/Message';
import CreateBlog from './Create';

const filters =
    <>
        <Text column='title' placeholder='Title' />
        <Enum column='stateId' placeholder='State' entity='state' />
    </>

const sorts = [
    {
        caption: "Newest",
        column: "date",
        direction: "desc"
    },
    {
        caption: "Most important",
        key: "MostImportant"
    }
]

const listActions = (itemIds) => {

    const closeAll = ({ setProgress, reloadList }) => {
        setProgress(true);
        post('/blog/closeAll', itemIds).then(data => {
            app.success('Blogs are closed successfully');
            setProgress(false);
            reloadList();
        }, error => {
            app.error(error);
            setProgress(false);
        })
    }

    return <>
        <ListAction
            title='Close all'
            icon={DoneIcon}
            click={(params) => closeAll(params)}
            minCardinality={2}
        />
    </>
}

const itemActions = (item) => {
    const closeBlog = ({ setProgress, setItem }) => {
        setProgress(true);
        post(`/blog/close?blogId=${item.id}`)
            .then(data => {
                app.success('Blog is closed');
                setProgress(false);
                setItem(data);
            }, error => {
                app.error(error);
                setProgress(false);
            });
    }

    return <>
        <ItemAction
            title='View'
            icon={<MessageIcon />}
            goTo={`/blog/view?blogId=${item.id}`}
        />
        {
            item.stateKey === 'Closed'
                ?
                null
                :
                <ItemAction
                    title='Close'
                    icon={DoneIcon}
                    click={(params) => closeBlog(params)}
                />
        }
    </>
}

const headers =
    <>
        <th>#</th>
        <th> User </th>
        <th>Title</th>
        <th>Creation date</th>
        <th>State</th>
    </>

const row = (item) => {
    return <>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.title}</td>
        <td>
            <ValueWithTitle
                value={new Date(item.date).toDateString()}
                title={item.relatedItems.TimeAgo + ' ago'}
            />
        </td>
        <td>{item.stateKey}</td>
    </>
}

const card = (item) => {
    return <div className="blog bg-orange-200 m-2">
        <div>{item.title}</div>
    </div>
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
            filters={filters}
            sorts={sorts}
            listActions={listActions}
            headers={headers}
            row={row}
            create={CreateBlog}
            itemActions={itemActions}
        />
    );
}

export default Blogs;