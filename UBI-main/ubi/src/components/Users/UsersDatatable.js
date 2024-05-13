import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { Badge, Button } from "react-bootstrap";
import "react-data-table-component-extensions/dist/index.css";
import UsersPopup from "./UsersPopup";
import UsersServices from "../../services/UsersServices";
import Swal from "sweetalert2";
import Utils from "../../utils/Utils";

export function UsersDatatable({ users, setUsers, fetchUsers }) {
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);

  const [forceUpdate, setForceUpdate] = useState(false);

  const [data, setData] = useState(users);
  console.log(users);
  const columns = [
    {
      name: "NAME",
      selector: row => [row.name],
      width: '165px',
      sortable: true
    },
    {
      name: "USERNAME",
      selector: row => [row.username],
      width: '175px',
      sortable: true
    },
    {
      name: "EMAIL",
      selector: row => [row.email],
      width: '175px',
      sortable: true
    },
    {
      name: "ROLE",
      selector: row => [row.roles[0].name],
      width: '120px',
      sortable: true
    },
    {
      name: "STATUS",
      selector: row => {
        if (row.deleted)
          return <Badge bg="danger">Inactive</Badge>;
        else
          return <Badge bg="success">Active</Badge>;
      },
      sortable: false
    },
    {
      name: "ACTION",
      omit: !Utils.can("Activate User") && !Utils.can("Deactivate User"),
      selector: row => {
        return <div className="btn-list">
          {Utils.can("Update User") &&
            <Button variant="info" size="sm" onClick={() => openUpdate(row)}>
              <i className="fe fe-edit"></i> Edit
            </Button>
          }
          {!row.deleted &&
            <>
              {Utils.can('Activate User') &&
                <Button variant="danger" size="sm" onClick={() => openDelete(row)}>
                  <i className="fe fe-trash"></i> Deactivate
                </Button>
              }
            </>
          }
          {row.deleted &&
            <>
              {Utils.can('Deactivate User') &&
                <Button variant="success" size="sm" onClick={() => doActivate(row)}>
                  <i className="fe fe-unlock"></i> Activate
                </Button>
              }
            </>
          }
        </div>;
      },
      width: '185px',
      center: true,
      sortable: false
    },
  ];

  const openDelete = async (row) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-primary me-2",
        cancelButton: "btn btn-primary me-2",
        allowOutsideClick: false,
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "Once Deactivated, the user will be logged out and can't not be login, unless activated again.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, deactivate it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
        allowOutsideClick: false,
      })
      .then(async (result) => {
        if (result.isConfirmed) {

          try {
            if (Utils.can('View User')) {
              await UsersServices.delete(row.id);
              row.deleted = 1;
              setUsers(users);
              setForceUpdate(!forceUpdate);
              Utils.Toast('success', 'Record Successfully Deactivated!');
            }
          }
          catch (error) {
            console.log(error);
          }

        }
        else if (result.dismiss === Swal.DismissReason.cancel) {

        }
      });
  };

  const openUpdate = async (row) => {
    setUser(row);
    setShowModal(true);
  };

  const doActivate = async (row) => {
    await UsersServices.activate(row.id);
    row.deleted = 0;
    setUsers(users);
    setForceUpdate(!forceUpdate);
    Utils.Toast('success', 'Record Successfully Activated!');
  }

  const tableData = {
    columns,
    data,
  };
  
  return (
    <>
      <div className="table">
        <DataTableExtensions {...tableData} >
          <DataTable
            title="Desserts"
            columns={columns}
            data={data}
            noHeader
            // defaultSortField="id"
            defaultSortAsc={false}
            striped={true}
            center={true}
            persistTableHead
            // pagination
            highlightOnHover
            paginationRowsPerPageOptions={[10, 25, 50, 100, 200]}
            paginationPerPage={200}
          />
        </DataTableExtensions>
      </div>
      <UsersPopup showModal={showModal} setShowModal={setShowModal} fetchUsers={fetchUsers} id={user.id} />
    </>
  );
}
