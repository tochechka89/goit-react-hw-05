import { Formik, Form, Field } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchForm.module.css'

export default function SearchForm({ onSubmit, onError }) {

    const handleSubmit = (values, actions) => {
        onSubmit(values.query);
        if (values.query === '') {
            onError(true);
            toast.error('Please enter your search query!');
            return;
        }
        actions.resetForm();
    }

    return (
        <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
            <Form className={css.form}>
                <Field className={css.input} type='text' name='query' autoComplete="off" placeholder="Search movies" autoFocus />
                <button className={css.btn} type='submit'>Search</button>
                {onError && <Toaster position="top-right" />}
            </Form>
        </Formik>
    )
}