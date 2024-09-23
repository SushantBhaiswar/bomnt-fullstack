import * as Yup from 'yup';

const loginSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .max(20, 'Password must be 20 characters or less')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Password must contain letters and numbers')
        .required('Required'),
});

export default loginSchema;
