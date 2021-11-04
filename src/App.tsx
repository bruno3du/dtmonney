/** @format */
import { Header } from './components/Header';
import { GlobalStyled } from './styles/global';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';
import Modal from 'react-modal';
import { useState } from 'react';

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
			<GlobalStyled />
			<Header handleOpenNewTransactionModal={handleOpenNewTransactionModal} />
			<NewTransactionModal
				isOpen={isNewTransactionModalOpen}
				onRequestClose={handleCloseNewTransactionModal} />
			<Dashboard />
		</>
	);
}

export default App;
