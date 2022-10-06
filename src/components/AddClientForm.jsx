import React from "react";
import { Input } from "./Input";
import { Button } from "./Button";

export function AddClientForm() {
  return (
    <div>
      <div className="mt-14">
        <h2 className="text-2xl text-center font-bold text-pink-600">
          Ingrese los datos del cliente
        </h2>
        <form className="mt-6 w-full grid grid-rows-6 gap-y-5 place-items-center">
          <Input type="text" placeholder="Nombre" />
          <Input placeholder="Apellido" />
          <Input placeholder="Telefono" />
          <Input placeholder="Instagram" />
          <Input placeholder="Facebook" />

          <Button>Guardar</Button>
        </form>
      </div>
    </div>
  );
}
