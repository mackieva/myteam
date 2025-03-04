import { z } from 'zod';

export const contactSchema = z.object({
	name: z.string().min(1, 'This field is required'),
	email: z.string().email().min(1, 'This field is required'),
	company: z.string().min(1, 'This field is required'),
	title: z.string().min(1, 'This field is required'),
	message: z.string().min(1, 'This field is required'),
});
