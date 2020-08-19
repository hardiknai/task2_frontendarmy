import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Carousel } from "react-bootstrap";
import one from "./img/01.jpg";
import two from "./img/02.jpg";
import three from "./img/03.jpg";
import four from "./img/04.jpg";

const initialState = {
  images: [
    {
      src: one,
      color: "white",
    },
    {
      src: two,
      color: "white",
    },
    {
      src: three,
      color: "Green",
    },
    {
      src: four,
      color: "Blue",
    },
  ],
};
function App() {
  const [state, setstate] = useState(initialState);
  return (
    <Carousel>
      {state.images &&
        state.images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image.src} alt="First slide" height="200px"/>
            <Carousel.Caption style={{color:image.color}}>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default App;
