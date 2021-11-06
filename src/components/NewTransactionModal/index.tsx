/** @format */

import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import outcomeImg from '../../assets/outcome.svg';
import incomeImg from '../../assets/income.svg';
import closeImg from '../../assets/close.svg';
import { FormEvent, useState } from 'react';
import { useTransaction } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransactionModal({
	isOpen,
	onRequestClose,
}: NewTransactionModalProps) {
	const [type, setType] = useState('deposit');
	const [title, setTitle] = useState('');
	const [category, setCategory] = useState('');
	const [value, setValue] = useState(0);

	const { createTransaction } = useTransaction();

	async function handleCreateNewTransaction(event: FormEvent) {
		event.preventDefault();

		if (!title.trim() || !category.trim()) {
			return;
		}

		await createTransaction({ amount: value, title, type, category });
		setValue(0);
		setCategory('');
		setType('deposit');
		setTitle('');

		onRequestClose();
	}
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName='react-modal-overlay'
			className='react-modal-content'>
			<button
				type='button'
				onClick={onRequestClose}
				className='react-modal-close'>
				<img src={closeImg} alt='Fechar Modal' />
			</button>
			<Container onSubmit={handleCreateNewTransaction}>
				<h2>Cadastrar transação</h2>

				<input
					type='text'
					placeholder='Título'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input
					type='number'
					placeholder='Valor'
					value={value}
					onChange={(e) => setValue(Number(e.target.value))}
				/>

				<TransactionTypeContainer>
					<RadioBox
						isActive={type === 'deposit'}
						activeColor='green'
						type='button'
						onClick={() => setType('deposit')}>
						<img src={incomeImg} alt='Entrada' />
						<span>Entrada</span>
					</RadioBox>
					<RadioBox
						isActive={type === 'withdraw'}
						activeColor='red'
						type='button'
						onClick={() => setType('withdraw')}>
						<img src={outcomeImg} alt='Saída' />
						<span>Saida</span>
					</RadioBox>
				</TransactionTypeContainer>
				<input
					type='text'
					placeholder='Categoria'
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				/>

				<button type='submit'>Cadastrar</button>
			</Container>
		</Modal>
	);
}
