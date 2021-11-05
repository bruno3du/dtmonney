/** @format */

import { Container } from './styles';
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';

export function Summary() {
	const { transactions } = useContext(TransactionsContext);
	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={IncomeImg} alt='Entradas' />
				</header>
				<strong>R$ 1.000,00</strong>
			</div>
			<div>
				<header>
					<p>Saídas</p>
					<img src={OutcomeImg} alt='Saídas' />
				</header>
				<strong>- R$ 500,00</strong>
			</div>
			<div className='highlight-background'>
				<header>
					<p>Total</p>
					<img src={totalImg} alt='Total' />
				</header>
				<strong>R$ 500,00</strong>
			</div>
		</Container>
	);
}
