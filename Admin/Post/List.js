import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { List, Text, Enum, ItemAction, Image, BooleanProperty, Chip, ValueWithTitle, DateTimeTitleAgo, TitleSubtitle, app } from '@List'
import UpsertPost from './Upsert'
import { ManageTags } from '../../Taxonomy/Exports'
import { ManageHierarchies } from '../../Taxonomy/Exports'
import { EntitySeo } from '../../Seo/Exports'
import { ViewComments } from '../../Social/Exports'
// import ManageHierarchies from './AdminPanel/Taxonomy/Hierarchy/ManageHierarchies'

const filters = <>
    <Text
        column='Title'
        placehodler='Title'
    />
    <Enum
        column='StateId'
        placeholder='State'
        entityType='BlogState'
    />
</>

const headers = <>
    <th></th>
    <th>Title</th>
    <th>Date</th>
    <th>State</th>
    <th>Comments enabled?</th>
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
            <Image
                url={item.relatedItems.imageUrl}
                uploadUrl={`/blogPost/setImage?postId=${item.id}`}
            />
        </td>
        <td>
            <a target='_blank' href={`${app.env('BLOG_URL')}/${item.slug}`}>
                <TitleSubtitle
                    title={<ValueWithTitle
                        value={item.title.cut(30)}
                        title={item.summary}
                    />}
                    subtitle={item.slug}
                />
            </a>
        </td>
        <td>
            <DateTimeTitleAgo
                date={item.lastUpdateUtcDate || item.utcDate}
                ago={item.relatedItems.lastUpdateTimeAgo || item.relatedItems.timeAgo}
            />
        </td>
        <td>
            <Chip
                className={stateStyle}
                text={item.relatedItems.stateKey}
            />
        </td>
        <td>
            <BooleanProperty
                column='acceptsComment'
                value={item.acceptsComment}
                actionUrl={`/blogPost/toggleCommentAcceptance/${item.id}`}
            />
        </td>
    </>
}

const itemActions = (item) => <>
    <EntitySeo
        entityType='BlogPost'
        entityGuid={item.guid}
    />
    <ItemAction
        title='Edit content'
        icon={TextSnippetIcon}
        goTo={`/post/editContent?id=${item.id}`}
    />
    <ManageTags
        entityType='BlogPost'
        entityGuid={item.guid}
    />
    <ManageHierarchies
        title='Manage categories'
        entityType='BlogPost'
        entityGuid={item.guid}
    />
    <ViewComments
        entityType='BlogPost'
        entityGuid={item.guid}
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
        // separateRowForActions={true}
        menuForActions={true}
    // dialogs={[UpsertPost, ManageTags]}
    />
}

export default BlogPosts
export { BlogPosts }