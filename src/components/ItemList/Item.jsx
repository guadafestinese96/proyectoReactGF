import './Item.css';

export default function Item({ item }) {
  return (
    <div className="itemContainerIndex">
      <a href="https://api.whatsapp.com/send/?phone=1161950112&text&type=phone_number&app_absent=0" target="_blank"><p className="clickToBuy">COMPRAR</p></a>
      <div className="itemImgContainer">
        <img className="itemImg" src={item.image} alt={item.nombre} />
      </div>
      
      <h2 className="itemMarca">{item.marca}</h2>
      <p className="itemNombre">{item.nombre}</p>
      <p className="itemGenero">{item.genero}</p>
      {/* <p className="itemPrecio">${item.precio}</p> */}

    </div>
  );
}
/*
return (
  <div className="itemContainerIndex">
    <NavLink to={`/item/${item.id}`}>
      <p className="clickToBuy">COMPRAR</p>
    <div className="itemImgContainer">
      <img className="itemImg" src={item.image} alt={item.nombre} />
    </div>
    </NavLink>
    <h2 className="itemMarca">{item.marca}</h2>
    <p className="itemNombre">{item.nombre}</p>
    <p className="itemGenero">{item.genero}</p>
    <p className="itemPrecio">${item.precio}</p>

  </div>
);*/