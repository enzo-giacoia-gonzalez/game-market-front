import React from "react";
import { useContext } from "react";
import { DataProductsProvider } from "../Context/UseContextEdition";
import apiInstance from "../utils/utils";

const AdminCategoriesDelete = () => {
 


  const { OneCategories} = useContext(DataProductsProvider)

  

  const handleDelete = async () => {
    
    let token = localStorage.getItem("token") || "";
  
      await apiInstance.delete(
        process.env.REACT_APP_LOCAL_HOST +
          process.env.REACT_APP_CATEGORIES_APP +
          "/" +
         OneCategories._id,
        {
          headers: {
            "x-token": token,
          },
        }
      );
  };

  

  return (
    <div className="flex flex-col space-y-[7px] px-[8px] items-center justify-start h-[600px]">
        <input className="py-2 mt-[40px] w-[350px] border-[1px] border-black rounded-[3px]"
          placeholder="Categoria a eliminar"
          value={OneCategories.nombre}
        />
      
        <button className="px-[40px] mt-[20px] h-[40px] bg-yellow-200 rounded-[8px] pointer-events-auto hover:bg-yellow-300" onClick={handleDelete}>eliminar</button>
    </div>
  );
};

export default AdminCategoriesDelete;
