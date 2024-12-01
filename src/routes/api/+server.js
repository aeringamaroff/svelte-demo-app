import { MongoClient, ObjectId } from 'mongodb';
import { MONGODB_PASSWORD, MONGODB_USER } from '$env/static/private';
import { json } from '@sveltejs/kit';

const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@ruby-cluster.twqrq.mongodb.net/?retryWrites=true&w=majority&appName=ruby-cluster`;

const client = new MongoClient(uri);

const database = client.db('expense-tracker');
const expenses = database.collection('user_expenses');

export async function GET({ url }) {
	try {
		const userId = await url.searchParams.get('user_id');

		if (!userId) {
			return json('Missing user_id parameter', { status: 400 });
		}

		const query = { user_id: userId };
		const expense = await expenses.find(query).sort({ date: -1 }).toArray();

		return json(expense);
	} catch (error) {
		console.error('Error:', error);
		return json('Failed to fetch expenses', { status: 500 });
	}
}

export async function POST({ request }) {
	try {
		const body = await request.json();

		if (typeof body.date === 'string') body.date = new Date(body.date);

		const result = await expenses.insertOne(body);

		return json({ success: true, insertedId: result.insertedId });
	} catch (error) {
		console.error('Error inserting data:', error);
		return json({ success: false, error: error.message }, { status: 500 });
	}
}

export async function DELETE({ request }) {
	const { id } = await request.json();

	console.log('delete request', request);

	const result = await expenses.deleteOne({ _id: new ObjectId(id) });

	return json(result);
}
