import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { List, Text, Enum, ItemAction, Chip, ValueWithTitle, DateTimeTitleAgo, TitleSubtitle, app } from '@List'
import UpsertPost from './Upsert'
import ManageTags from '../../Taxonomy/Tag/Manage'
// import ManageHierarchies from './AdminPanel/Taxonomy/Hierarchy/ManageHierarchies'

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
        <td>
            <Chip
                className={stateStyle}
                text={item.relatedItems.stateKey}
            />
        </td>
    </>
}

const itemActions = <>
    <ItemAction
        title='Manage tags'
        icon={LocalOfferIcon}
        dialog={ManageTags}
    />
</>

const BlogPosts = () => {
    return <List
        title='Posts'
        entityType='BlogPost'
        filters={filters}
        headers={headers}
        row={row}
        create={UpsertPost}
        hasEdit={true}
        hasDelete={true}
        itemActions={itemActions}
    />
}

export default BlogPosts