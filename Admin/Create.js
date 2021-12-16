import { Form, Text, Enum, LongText } from '@Form';

const fields =
    <>
        <Text
            column='title'
            placeholder='Title'
            required='Please write the title.'
        />
        <Enum
            column='priorityId'
            entity='priority'
            placeholder='Priority'
            required='Please choose the priority for this blog. Choose less importance if it is less urgent.'
        />
        <LongText
            column='body'
            placeholder='Please describe the problem!'
            required='We need to know the problem to be able to help.'
        />
    </>

const CreateBlog = (props) => {
    return <Form
        entity='blog'
        inputs={fields}
    />
}

export default CreateBlog;