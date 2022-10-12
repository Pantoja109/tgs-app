import { createContext, useState, useEffect } from "react";

export const ClientsContext = createContext();

export const ClientsProvider = ({ children }) => {
  const [clients, setClients] = useState([]);

  const [clientEdit, setClientEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchClients();
  }, []);

  //Fetch Clients Data
  const fetchClients = async () => {
    const response = await fetch(`/clients?_sort=id&_order=asc`);
    const data = await response.json();
    setClients(data);
  };

  //Add Client
  const addClient = async (newClient) => {
    const response = await fetch("/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newClient),
    });
    const data = await response.json();
    setClients([data, ...clients]);
  };

  //Update Client
  const updateClient = async (id, updItem) => {
    const response = await fetch(`/clients/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });
    const data = await response.json();

    console.log(id, updItem);
    console.log(clients);
    setClients(
      clients.map((item) => (item.id === id ? { ...item, ...data } : item)),
    );
  };

  //Set item to be updated
  const editClient = (item) => {
    setClientEdit({
      item,
      edit: true,
    });
  };

  return (
    <ClientsContext.Provider
      value={{ clients, clientEdit, addClient, editClient }}
    >
      {children}
    </ClientsContext.Provider>
  );
};
