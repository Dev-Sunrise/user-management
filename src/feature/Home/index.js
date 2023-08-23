import { fetchDataUser } from "api/Service";
import _, { debounce } from "lodash";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Button from "./components/Button";
import ModalAddUser from "./components/Modal/ModalAddUser.js";
import ModalDeleteUser from "./components/Modal/ModalDeleteUser";
import ModalEditUser from "./components/Modal/ModalEditUser";
import Table from "./components/Table";

import Papa from "papaparse";
import { toast } from "react-toastify";

const Home = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [listUsers, setListUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [nextPages, setNextPages] = useState(1);
  const [dataUserEdit, setDataUserEdit] = useState({});
  const [dataUserDelete, setDataUserDelete] = useState({});
  const [, setSortBy] = useState("asc");
  const [, setSortField] = useState("id");
  const [dataExport, setDataExport] = useState([]);

  const getUsers = async (page) => {
    let res = await fetchDataUser(page);
    if (res?.data) {
      setListUsers(res.data);
      setTotalPages(res.total_pages);
    }
  };

  useEffect(() => {
    getUsers(nextPages);
  }, [nextPages]);

  const handleUpdateTable = (user) => {
    setListUsers([user, ...listUsers]);
  };

  const handleEditUser = (user) => {
    setDataUserEdit(user);
    setShowModalEdit(true);
  };

  const handleUpdateEditTableUser = (user) => {
    let cloneListUser = _.cloneDeep(listUsers);
    let index = listUsers.findIndex((item) => item.id === user.id);
    cloneListUser[index].first_name = user.first_name;
    setListUsers(cloneListUser);
  };

  const handleDeleteUser = (user) => {
    setDataUserDelete(user);
    setShowModalDelete(true);
  };

  const handleDeleteTableUser = (user) => {
    let cloneListUser = _.cloneDeep(listUsers);
    cloneListUser = cloneListUser.filter((item) => item.id !== user.id);
    setListUsers(cloneListUser);
  };

  const handleSort = (sortBy, sortField) => {
    setSortBy(sortBy);
    setSortField(sortField);
    let newListUser = _.cloneDeep(listUsers);
    newListUser = _.orderBy(newListUser, [sortField], [sortBy]);
    setListUsers(newListUser);
  };

  const handleSearch = debounce((e) => {
    let term = e.target.value;
    if (term) {
      let newListUsers = _.cloneDeep(listUsers);
      newListUsers = newListUsers.filter((item) => item.email.includes(term));
      setListUsers(newListUsers);
    } else {
      getUsers();
    }
  }, 500);

  const getUsersExport = (event, done) => {
    let results = [];
    if (listUsers && listUsers.length > 0) {
      results.push(["Id", "Avatar", "Last Name", "First Name", "Email"]);
      // eslint-disable-next-line array-callback-return
      listUsers.map((item) => {
        let arr = [];
        arr[0] = item.id;
        arr[1] = item.avatar;
        arr[2] = item.last_name;
        arr[3] = item.first_name;
        arr[4] = item.email;
        results.push(arr);
      });
      setDataExport(results);
      done();
    }
  };

  const handleImportExcel = (e) => {
    if (e.target?.files && e.target.files[0]) {
      let file = e.target.files[0];
      if (file.type !== "text/csv") {
        toast.error("Only import accept CSV file!");
        return;
      }
      Papa.parse(file, {
        complete: function (results) {
          let rawCsv = results.data;
          if (rawCsv.length > 0) {
            if (rawCsv[0] && rawCsv[0].length === 5) {
              if (
                rawCsv[0][0] !== "id" ||
                rawCsv[0][1] !== "avatar" ||
                rawCsv[0][2] !== "last_name" ||
                rawCsv[0][3] !== "first_name" ||
                rawCsv[0][4] !== "email"
              ) {
                toast.error("Wrong format header CSV file!");
              } else {
                let result = [];
                // eslint-disable-next-line array-callback-return
                rawCsv.map((item, index) => {
                  if (index > 0 && item.length === 5) {
                    let obj = {};
                    obj.id = item[0];
                    obj.avatar = item[1];
                    obj.last_name = item[2];
                    obj.first_name = item[3];
                    obj.email = item[4];
                    result.push(obj);
                  }
                });
                setListUsers(result);
              }
            } else {
              toast.error("Wrong format CSV file!");
            }
          } else {
            toast.error("Not found data on CSV file!");
          }
        },
      });
    }
  };

  const handleCloseMdal = () => {
    setShowModalAdd(false);
    setShowModalEdit(false);
    setShowModalDelete(false);
  };

  const handlePageClick = (e) => {
    setNextPages(+e.selected + 1);
  };

  return (
    <section className="p-5">
      <div className="flex flex-col items-center justify-between pb-10 md:flex-row gap-y-5 md:gap-y-0">
        <span className="text-xl font-bold">List user:</span>
        <div className="flex flex-col md:items-center md:flex-row gap-x-5 gap-y-[10px] md:gap-y-0">
          <Button
            handleClickAddUser={() => setShowModalAdd(true)}
            dataExport={dataExport}
            getUsersExport={getUsersExport}
            handleImportExcel={handleImportExcel}
          ></Button>
        </div>
      </div>

      <div className="w-full max-w-[300px] mb-5">
        <input
          onChange={(e) => handleSearch(e)}
          type="text"
          placeholder="Search email...."
          className="px-[10px] py-[5px] border border-colorGray rounded-md  transition-all w-full outline-none focus:border-colorPrimary"
        />
      </div>

      <div className="w-full overflow-x-auto">
        <Table
          listUsers={listUsers}
          handleEditUser={handleEditUser}
          handleDeleteUser={handleDeleteUser}
          handleSort={handleSort}
        ></Table>
      </div>

      <div className="mt-5">
        <ReactPaginate
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageCount={totalPages}
          previousLabel="Previous"
          className="paginate"
        />
      </div>

      <ModalAddUser
        open={showModalAdd}
        handleCloseMdal={handleCloseMdal}
        handleUpdateTable={handleUpdateTable}
      ></ModalAddUser>

      <ModalEditUser
        open={showModalEdit}
        handleCloseMdal={handleCloseMdal}
        dataUserEdit={dataUserEdit}
        handleUpdateEditTableUser={handleUpdateEditTableUser}
      ></ModalEditUser>

      <ModalDeleteUser
        open={showModalDelete}
        handleCloseMdal={handleCloseMdal}
        dataUserDelete={dataUserDelete}
        handleDeleteTableUser={handleDeleteTableUser}
      ></ModalDeleteUser>
    </section>
  );
};

export default Home;
