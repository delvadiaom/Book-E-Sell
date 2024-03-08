export class BookModel {
	id?: number;
	name!: string;
	price!: string;
	categoryid!: number;
	category?: string;
	description!: string;
	base64image!: string;
	publisherId?: number;
	quantity?: number;
}
