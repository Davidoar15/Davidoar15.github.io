import errorImage from '../assets/Survey-error-image.png';

function Error() {

  return (
    <div>
        <div>
          <img src={errorImage} alt='Page Error'/>
        </div>
        <h1>ERROR 404: Página No Encontrada</h1>
        <h3>
          Vaya, parece que no podemos encontrar 
          la página que buscas. Intenta volver a 
          la página anterior
        </h3>
    </div>
  );
}

export default Error;