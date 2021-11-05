/** @format */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer, Model } from 'miragejs';

createServer({
	models: {
		transaction: Model,
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: 'Freelance de Website',
					type: 'deposit',
					category: 'Dev',
					amount: 6000,
					createdAt: new Date('2021-10-23 09:20:30'),
				},
				{
					id: 2,
					title: 'Freelance de Website',
					type: 'deposit',
					category: 'Dev',
					amount: 6000,
					createdAt: new Date('2021-10-23 09:20:30'),
				},
				{
					id: 3,
					title: 'Aluguel',
					type: 'withdraw',
					category: 'Dev',
					amount: 1000,
					createdAt: new Date('2021-10-23 09:20:30'),
				},
			],
		});
	},
	routes() {
		this.namespace = 'api';

		this.get('/transactions', () => {
			return this.schema.all('transaction');
		});

		this.post('/transactions', (schema, request) => {
			const data = JSON.parse(request.requestBody);
			return schema.create('transaction', data);
		});
	},
});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
