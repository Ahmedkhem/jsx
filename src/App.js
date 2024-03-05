import { Button, Card } from 'react-bootstrap';
import './App.css';
import Navigation from './components/Navigation';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

function App() {
  return (
    <div>
      <Navigation />
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '10%'}}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Image />
        <Card.Title> <Price /> </Card.Title>
        <Card.Text>
          <Description />
        </Card.Text>
        <Card.Footer></Card.Footer>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card></div>
    






    </div>
  
    
  );
}

export default App;
