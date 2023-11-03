import * as z from 'zod';

const RegisterValidation = z
    .object({
        name: z.string().min(2, {
            message: 'Name must be at least 2 characters.',
        }),
        email: z
            .string()
            .min(2, {
                message: 'Email must be at least 2 characters.',
            })
            .email({
                message: 'Please provide a valid email address.',
            }),
        password: z
            .string()
            .min(12, {
                message: 'Password must be at least 12 characters.',
            })
            .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, {
                message:
                    'Password must include at least one digit, one lowercase and one uppercase letter.',
            }),
        c_password: z.string(),
    })
    .refine((data) => data.password === data.c_password, {
        message: "Passwords don't match.",
        path: ['c_password'],
    });

export default RegisterValidation;
