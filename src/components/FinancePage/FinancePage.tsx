import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Container, Row, Col, Card, Table } from 'react-bootstrap';
import { addTransaction } from '../../shared/actions';
import TransactionModal from '../TransactionModal/TransactionModal';
import { Transaction } from '../../shared/models';
import './FinancePage.css';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const FinancePage: React.FC = ({ expense, income, balance, transactions, addTransaction }: any) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const sortedTransactions = transactions.slice().sort((a: { date: string | number | Date; }, b: { date: string | number | Date; }) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return 0;
  });

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Учет финансов</h1>
          <Row className="mt-sm-4 mt-3">
            <Col className='col-md col-12 mb-2'>
              <Card className='custom-card' style={{ backgroundColor: '#5cc14f' }}>
                <h2>Доходы: {income}</h2>
              </Card>
            </Col>
            <Col className='col-md col-12 mb-2'>
              <Card className='custom-card' style={{ backgroundColor: '#c14f4f7d' }}>
                <h2>Расходы: {expense}</h2>
              </Card>
            </Col>
            <Col className='col-md col-12 mb-2'>
              <Card className='custom-card' style={{ backgroundColor: '#feff519c' }}>
                <h2>Баланс: {balance}</h2>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col className='col-12 mb-2'>
          <Row>
            <Col>
              <h2>Список транзакций:</h2>
            </Col>
            <Col className='col-auto'>
              <Button variant="success" onClick={handleOpenModal}>Добавить транзакцию</Button>
            </Col>
          </Row>
        </Col>
        <Col className='col-12'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Дата</th>
                <th>Тип</th>
                <th>Сумма</th>
                <th>Текст</th>
              </tr>
            </thead>
            <tbody>
              {sortedTransactions.map((transaction: Transaction) => {
                let transactionDate = transaction.date ? new Date(transaction.date) : null;
                let formattedDate = transactionDate ? 
                  transactionDate.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' }) : '';
                return (
                  <tr key={transaction.id}>
                    <td>{formattedDate}</td>
                    <td style={transaction.type === 'income' ? {color: '#00e700'} : {color: 'red'}}>
                      {transaction.type === 'income'? 'Доход' : 'Расход'}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.text}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
      
      <TransactionModal
        show={showModal}
        handleClose={handleCloseModal}
        handleAddTransaction={(type: string, amount: number, text: string, date: Date | null) => {
          let newTransaction: Transaction = { id: new Date().toUTCString(), type, amount, text, date};
          addTransaction(newTransaction);
        }}
      />
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  income: state.income,
  expense: state.expense,
  balance: state.balance,
  transactions: state.transactions
});

const mapDispatchToProps = {
  addTransaction
};

export default connect(mapStateToProps, mapDispatchToProps)(FinancePage);
