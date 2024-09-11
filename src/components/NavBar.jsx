import lentes from "../imagenes/lentes.png";

export function NavBar() {
  return (
    <header className="navBar">
      <img className="imgTittle" src={lentes}></img>
      <h1 className="titlePage">Peliculas</h1>
    </header>
  );
}
