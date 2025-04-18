import React, { useState } from "react";
import { userRows } from "../../datas";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import "./UserList.css";

export default function UserList() {
  const [userData, setUserData] = useState(userRows);

  const userDelete = (id) => {
    setUserData(userData.filter((user) => user.id !== id));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to="/" className="link">
              <div className="userListuser">
                <img
                  src="images/avatar.png"
                  alt="avatar"
                  className="userlistimage"
                />
                {params.row.username}
              </div>
            </Link>
          </>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListConfigContainer">
            <Link to={`/users/${params.row.id}`}>
              <button className="userlistedit">Edit</button>
            </Link>

            <MdDeleteOutline
              className="userListdelete"
              onClick={() => userDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={userData}
        columns={columns}
        pageSize={2}
        disableSelectionOnClick
      />
    </div>
  );
}
