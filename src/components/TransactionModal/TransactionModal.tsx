import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface TransactionModalProps {
  show: boolean;
  handleClose: () => void;
  handleAddTransaction: (type: string, amount: number, text: string, date: Date | null) => void;
}

const TransactionModal: React.FC<TransactionModalProps> = ({ show, handleClose, handleAddTransaction }) => {
  const [transactionType, setTransactionType] = useState<string>('');
  const [transactionAmount, setTransactionAmount] = useState<number>(0);
  const [transactionText, setTransactionText] = useState<string>('');
  const [transactionDate, setTransactionDate] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddTransaction(transactionType, transactionAmount, transactionText, transactionDate);
    handleClose();
    // Сбросить значения формы после отправки
    setTransactionType('');
    setTransactionAmount(0);
    setTransactionText('');
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Добавить транзакцию</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-2' controlId="transactionType">
            <Form.Label>Тип</Form.Label>
            <Form.Control
              as="select"
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
            >
              <option value="">Выберите тип транзакции</option>
              <option value="expense">Трата</option>
              <option value="income">Прибыль</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className='mb-2' controlId="transactionAmount">
            <Form.Label>Сумма</Form.Label>
            <Form.Control
              type="number"
              placeholder="Введите сумму"
              value={transactionAmount}
              onChange={(e) => setTransactionAmount(parseFloat(e.target.value))}
            />
          </Form.Group>
          <Form.Group className='mb-2' controlId="transactionDate">
            <Form.Label className='col-12'>Дата</Form.Label>
            <DatePicker
              className='form-control'
              selected={transactionDate}
              onChange={(date: Date | null) => setTransactionDate(date)}
              dateFormat="dd/MM/yyyy"
            />
          </Form.Group>
          <Form.Group className='mb-2' controlId="transactionText">
            <Form.Label>Описание</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите описание транзакции"
              value={transactionText}
              onChange={(e) => setTransactionText(e.target.value)}
            />
          </Form.Group>
          <Button className='mb-2' variant="primary" type="submit" style={{float: 'right'}}>
            Добавить
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default TransactionModal;
