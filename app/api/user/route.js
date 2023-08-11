import { connectToDB } from '@/utils/database';
import User from '@/models/user';

export const POST = async(req) => {
	const { name, email, address, dob, phone } = await req.json();

	try {
		await connectToDB();
		const newUser = new User({ name, email, address, dob, phone });
		await newUser.save();

		return new Response(JSON.stringify(newUSer), { status: 201 });
	} catch (error) {
		return new Response('Unable to create new User', { status: 500 });
	}
};
