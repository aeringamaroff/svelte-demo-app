export interface Expense {
	_id: string;
	user_id: string; // will use a guid for the ids
	amount: number;
	title: string;
	description: string;
	date: Date;
}
