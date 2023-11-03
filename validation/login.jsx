import * as z from 'zod';

const loginValidation = z.object({
    email: z
        .string()
        .min(2, {
            message: 'Username must be at least 2 characters.',
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
});

export default loginValidation;
