/** @format */
import { Header } from './components/Header';
import { GlobalStyled } from './styles/global';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';
import { useState } from 'react';

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
			<GlobalStyled />
			<Header handleOpenNewTransactionModal={handleOpenNewTransactionModal} />
			<Modal
				isOpen={isNewTransactionModalOpen}
				onRequestClose={handleCloseNewTransactionModal}>
				<h2>Cadastrar transação</h2>
			</Modal>
			<Dashboard />
		</>
	);
}

export default App;
