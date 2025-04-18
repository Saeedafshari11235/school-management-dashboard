import React, { useState } from "react";
import { products } from "../../datas";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import './Products.css'

export default function Products() {
  const [productData, setProductData] = useState(products);

  const productDelete = (id) => {
    setProductData(productData.filter((product) => product.id !== id));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/products/${params.row.id}`}  className="link">
              <div className="productListproduct">
                {params.row.title}
              </div>
            </Link>
          </>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="productListConfigContainer">
            <Link to={`/products/${params.row.id}`}>
              <button className="productlistedit">Edit</button>
            </Link>

            <MdDeleteOutline
              className="productListdelete"
              onClick={() => productDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={productData}
        columns={columns}
        pageSize={2}
        disableSelectionOnClick
      />
    </div>
  );
}
