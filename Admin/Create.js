import { Form, Text, Enum, LongText } from '@Form';

const fields =
    <>
        <Text
            column='title'
            placeholder='Title'
            required='Please write the title.'
        />
    </>

const CreateBlog = (props) => {
    return <Form
        entity='blog'
        inputs={fields}
    />
}

export default CreateBlog;