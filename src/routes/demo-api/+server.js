import { MongoClient } from 'mongodb';
import { MONGODB_PASSWORD } from '$env/static/private';
import { json } from '@sveltejs/kit';

const uri = `mongodb+srv://aeringamaroff:${MONGODB_PASSWORD}@ruby-cluster.twqrq.mongodb.net/?retryWrites=true&w=majority&appName=ruby-cluster`;

const client = new MongoClient(uri);

export async function GET({ url }) {
	try {
		const userId = await url.searchParams.get('user_id');
		if (!userId) {
			return json('Missing user_id parameter', { status: 400 });
		}

		const database = client.db('expense-tracker');
		const expenses = database.collection('user_expenses');

		const query = { user_id: userId };
		const expense = await expenses.find(query).sort({ date: -1 }).toArray();

		return json(expense);
	} catch (error) {
		console.error('Error:', error);
		return json('Failed to fetch expenses', { status: 500 });
	}
}

export async function PUT() {
	// TODO: will write to the db
}

export async function DELETE(requestEvent) {
	// TODO: deletes an expense

	const { params } = requestEvent;
	const { expenseId } = params;
}
