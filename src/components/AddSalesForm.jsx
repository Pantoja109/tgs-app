import { Input } from "./Input";
import { Button } from "./Button";

export function AddSalesForm() {
  return (
    <div>
      <div className="mt-14">
        <h2 className="text-2xl text-center font-bold text-pink-600">
          Ingrese los datos de la venta
        </h2>
        <form className="mt-6 w-full grid grid-rows-6 gap-y-5 place-items-center">
          <select className="ipt-text" name="client-select">
            <option>Cliente</option>
          </select>
          <Input type="text" placeholder="Articulo" />
          <Input type="text" placeholder="Precio" />
          <div className="px-4 w-[300px] h-[50px] bg-pink-400  rounded-2xl flex flex-row justify-between text-pink-50">
            <label className="text-lg self-center ">¿Apartado?</label>
            <select className="bg-pink-400" name="" id="">
              <option value="true">SI</option>
              <option value="true">NO</option>
            </select>
          </div>

          <Input type="text" placeholder="Monto del Apartado" />
          <Input type="number" placeholder="Numero de Pagos" />
          <Input type="date" />

          <Button>Guardar</Button>
        </form>
      </div>
    </div>
  );
}
