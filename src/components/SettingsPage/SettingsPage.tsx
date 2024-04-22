import React, { useState } from "react";
import { connect } from "react-redux";
import { setUsername } from "../../shared/actions";
import { Form, Button, Col, Row, Container } from "react-bootstrap";

const SettingsPage: React.FC = ({ username, setUsername }: any)  => {
    const [newUsername, setNewUsername] = useState<string>('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewUsername(e.target.value);
    };
    
    const handleSubmit = () => {
        if (newUsername.trim() !== '') {
          setUsername(newUsername.trim());
          setNewUsername('');
        }
      };

    return (
        <Container>
            <Row>
                <Col>
                <h1 className="mb-4">Настройки</h1>
                <p>Ваше имя: {username}</p>
                <h2>Изменить имя:</h2>
                <Form>
                    <Form.Group controlId="formUsername">
                        <Row>
                            <Col className="col">
                                <Form.Control type="text" placeholder="Введите новое имя" value={newUsername} onChange={handleUsernameChange} />
                            </Col>
                            <Col className="col-auto px-2">
                                <Button variant="primary" onClick={handleSubmit}>Сохранить</Button>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
        </Container>
    );
  };
  
  const mapStateToProps = (state: any) => ({
    username: state.username
  });
  
  const mapDispatchToProps = {
    setUsername
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);