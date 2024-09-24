import { useFormik } from 'formik';

export default function useFormikHandler(initialValues, validationSchema, onSubmit) {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return formik
}
