import ProductCard from 'components/ProductCard';

const Catalog = () => {
  return (
    <div className="container" >

      <div className="home-container-catalog">

      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Informe o nome do carro" aria-label="Informe o nome do carro" aria-describedby="basic-addon2" />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button">Buscar</button>
        </div>
      </div>

      </div>

      <div className="container my-4">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;