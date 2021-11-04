/** @format */

import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';


export default function TransactionTable() {
	useEffect(() => {
		api.get('transactions').then((response) => console.log(response.data));
	}, []);
	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Título</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Desenvolvimento de site</td>
						<td className='deposit'>R$ 12.000,00</td>
						<td>Desenvolvimento</td>
						<td>12/10/2021</td>
					</tr>
					<tr>
						<td>Desenvolvimento de site</td>
						<td className='deposit'>R$ 12.000,00</td>
						<td>Desenvolvimento</td>
						<td>12/10/2021</td>
					</tr>
					<tr>
						<td>Internet</td>
						<td className='withdraw'>- R$ 100,00</td>
						<td>Casa</td>
						<td>10/10/2021</td>
					</tr>
				</tbody>
			</table>
		</Container>
	);
}
