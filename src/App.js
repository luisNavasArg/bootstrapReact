import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Form, FormLabel, FormControl, FormGroup,Alert} from 'react-bootstrap';
function App() {
  return (
    <div className="bg-primary bg-opacity-50">
      {['primary','secondary','success', 'danger', 'warning','info','light','dark'].map((a,i)=>{
        return(
          <Alert key={i+"ale"} variant={a}>Tenemos un aler con la variante {a}</Alert>
        )
      })}
      <Container>
        <Row>
          <Col>
            <Button variant='primary col-6 my-5'>Azul</Button>
            <Button variant='secundary col-6'>Gris</Button>
          </Col>
          <Col>
          <Button variant='primary col-6 my-5'>Azul</Button>
          <Button variant='secundary col-6'>Gris</Button>
          </Col>
          <Col>
            <Button variant='primary col-6 my-5'>Azul</Button>
            <Button variant='secundary col-6'>Gris</Button>
          </Col>
          <Col>
          <Button variant='primary col-6 my-5'>Azul</Button>
          <Button variant='secundary col-6'>Gris</Button>
          </Col>
        </Row>
        <Row>
          <Button variant='primary my-5'>Azul</Button>
          <Button variant='secundary '>Gris</Button>
        </Row>
      </Container>
      <Container className="row justify-content-center">
        <Form className='w-50 bg-danger bg-opacity-25'>
          <FormGroup className="my-5">
          <FormLabel>Email</FormLabel>
          <FormControl type="email" placeholder='Ingresa tu email'/>
          </FormGroup>
          <FormGroup className="my-5">
          <FormLabel>Clave</FormLabel>
          <FormControl type="password" placeholder='Ingresa tu clave'/>
          </FormGroup>
          
        </Form>
      </Container>
    </div>
  );
}

export default App;
