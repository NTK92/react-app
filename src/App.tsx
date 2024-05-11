// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import { Container, Row, Col } from 'react-bootstrap';
import routes from './shared/routes';
import FinanceProvider from './shared/FinanceContext';
import './App.css'

const App: React.FC = () => {
  return (
    <FinanceProvider>
      <Router>
          <Container fluid>
            <Row>
              <Col className='d-flex' style={{padding:'15px', backgroundColor: '#ff6f32'}} >
                <img className='me-2 mb-2' src={process.env.PUBLIC_URL + '/img/investment-analysis-icon.svg'} width={'50px'}/>
                <h2>Finance control</h2>
              </Col>
            </Row>
            <Row>
              <Col className='col-auto px-0 sidebar-block'>
                <Sidebar />
              </Col>
              <Col style={{padding:'15px'}}>
                <Switch>
                  {routes.map(route => (
                    <Route 
                      key={route.path} 
                      path={route.path} 
                      exact={route.exact} 
                      component={route.component}
                    />
                  ))}
                </Switch>
              </Col>
            </Row>
          </Container>
        </Router>
    </FinanceProvider>
  );
};

export default App;
