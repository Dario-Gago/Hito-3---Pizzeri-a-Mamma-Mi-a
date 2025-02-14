import "./HomeS.css";
import CardPizza from "../CardPizza/CardPizza";
import Header from "../Header/Header";
import { pizzas } from "../../data/pizzas";
const Home = () => {
  return (
    <>
      <Header />
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {pizzas.map((pizza)=>(<CardPizza nombre={pizza.name} precio={pizza.price} ingredientes={pizza.ingredients} imagen={pizza.img}/>))}
      </div>
      
    </>
  );
};

export default Home;
