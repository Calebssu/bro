import "./App.css";
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  const insertionSort = (event) => {
    event.preventDefault();
    let input1 = event.target.insertion1.value;
    let input2 = event.target.insertion2.value;
    let input3 = event.target.insertion3.value;
    axios.get(`http://localhost:3001/inser/${input1}/${input2}/${input3}`)
    .then(res => {
      console.log(res.data)
    })
    event.target.reset();
  };

  const add = (event) => {
    event.preventDefault();
    let input1 = event.target.add1.value;
    let input2 = event.target.add2.value;
    if(input1 < 1 || input1 > 1000 || input2 < 1 || input2 > 1000){
      console.log("Please enter a number between 1 - 1000")
    } else {
      axios.get(`http://localhost:3001/add/${input1}/${input2}`)
      .then(res => {
        console.log(res.data)
      })
      event.target.reset();
    }
  }

  const dayOfProgrammer = (event) => {
    event.preventDefault();
    let input1 = event.target.dotp.value;
    if(input1 > 1700 && input1 < 2700){
      axios.get(`http://localhost:3001/year/${input1}`)
      .then(res => {
        console.log(res.data)
      })
      event.target.reset();
    } else {
      console.log("Please enter a year between 1700 - 2700")
    }
  }

  useEffect(() => {
    async function getter(){
      await axios.get("http://localhost:3001/")
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
    }
    getter()
  }, [])

  return (
    <div className="App">
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">
            <img
              src="https://imgs.search.brave.com/rpvFTKmpNCXett-qyCGlOWdjsZ8gtRWxH2K0fggyprE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM0/MDg5MzMwMC92ZWN0/b3IvdGVjaG5vbG9n/eS1sb2dvLWRlc2ln/bi10ZW1wbGF0ZS1u/ZXR3b3JraW5nLXZl/Y3Rvci1sb2dvLWRl/c2lnbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9LThYQldG/RFJBQVllM2xlTDRu/dU1uZWkwd1dwTDYt/SXFzUENBYldJaEFT/az0"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <h1>Data from json</h1>
        <ul>{data}</ul>
      <br />
      <h1>Insertion sort</h1>
      <h4>Check the console for the results</h4>
      <form onSubmit={insertionSort}>
        <input
          type="Number"
          placeholder="Enter a number"
          id="insertion1"
          name="insertion1"
        ></input>
        <input
          type="Number"
          placeholder="Enter a number"
          id="insertion2"
          name="insertion2"
        ></input>
        <input
          type="Number"
          placeholder="Enter a number"
          id="insertion3"
          name="insertion3"
        ></input>
        <button>Submit</button>
      </form>
      <br />
      <h1>Addition</h1>
      <h4>Check the console for the results</h4>
      <form onSubmit={add}>
        <input
          type="Number"
          placeholder="Enter a number"
          id="add1"
          name="add1"
        ></input>
        <input
          type="Number"
          placeholder="Enter a number"
          id="add2"
          name="add2"
        ></input>
        <button>Submit</button>
      </form>
      <br />
      <h1>Day of the programmer</h1>
      <h4>Check the console for the results</h4>
      <form onSubmit={dayOfProgrammer}>
        <input
          type="Number"
          placeholder="Enter a number"
          id="dotp"
          name="dotp"
        ></input>
        <button>Submit</button>
      </form>
      <br />
      <p>
        I learned a decent amount about data structures and algorithms this week. I learned alot about Big O time complexities and how it's used to measure the runtime of programs. Outside of class but still related to data structures and algorithms I learned about how to use HashSet and HashMap effictevely.
      </p>
    </div>
  );
}

export default App;
