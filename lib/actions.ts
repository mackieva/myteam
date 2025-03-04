import { contactSchema } from './validators';

export function contactAction(prevState: unknown, formData: FormData) {
	const data = Object.fromEntries(formData);
	const validatedData = contactSchema.safeParse(data);

	if (!validatedData.success) {
		return {
			errors: validatedData.error.flatten().fieldErrors,
			data: data,
		};
	}

	return {
		name: validatedData.data.name,
	};
}
