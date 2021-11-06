/** @format */
import { Header } from './components/Header';
import { GlobalStyled } from './styles/global';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';
import Modal from 'react-modal';
import { useState } from 'react';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
	const [isNewTransactionModalOpen, SetIsNewTransactionModalOpen] =
		useState(false);

	function handleOpenNewTransactionModal() {
		SetIsNewTransactionModalOpen(true);
	}

	function handleCloseNewTransactionModal() {
		SetIsNewTransactionModalOpen(false);
	}
	return (
		<>
			<TransactionsProvider>
				<GlobalStyled />
				<Header handleOpenNewTransactionModal={handleOpenNewTransactionModal} />
				<NewTransactionModal
					isOpen={isNewTransactionModalOpen}
					onRequestClose={handleCloseNewTransactionModal}
				/>
				<Dashboard />
			</TransactionsProvider>
		</>
	);
}

export default App;
