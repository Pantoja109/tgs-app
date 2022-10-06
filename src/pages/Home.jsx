import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <div className="mt-20 grid grid-rows-3 gap-y-4 place-items-center">
        <Link to={"/add-client"}>
          <Button version="btn-primary">Alta de cliente</Button>
        </Link>
        <Link to={"/add-sale"}>
          <Button version="btn-primary">Alta de venta</Button>
        </Link>
        <Link>
          <Button version="btn-primary">Reporte clientes</Button>
        </Link>
      </div>
    </div>
  );
}
