import { createNewUser } from "api/Service";
import PropTypes from "prop-types";
import { useState } from "react";
import { toast } from "react-toastify";

const ModalAddUser = ({ handleCloseMdal, open = false, handleUpdateTable }) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleCreateUser = async () => {
    let res = await createNewUser(name, job);
    if (res?.id) {
      setName("");
      setJob("");
      handleCloseMdal();
      toast.success("Create new user success!");
      handleUpdateTable({
        id: res.id,
        first_name: name,
      });
    } else {
    }
  };

  return (
    <div
      className={`fixed inset-0 z-20 flex items-center justify-center ${
        open ? "" : "opacity-0 invisible"
      }`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-25"
        onClick={handleCloseMdal}
      ></div>
      <div className="relative z-30 bg-white w-[375px] rounded-lg p-5">
        <span
          className="absolute top-[-15px] right-[-15px] bg-colorPrimary p-[5px] rounded-md text-white cursor-pointer"
          onClick={handleCloseMdal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>

        <h2 className="mb-5 text-xl font-bold text-center uppercase text-colorPrimary">
          Add User
        </h2>

        <form autoComplete="off" className="flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-[5px] items-start">
            <label className="inline-block font-bold">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name..."
              className="px-[10px] py-[5px] border border-colorGray rounded-md  transition-all w-full outline-none focus:border-colorPrimary"
            />
          </div>
          <div className="flex flex-col gap-y-[5px] items-start">
            <label className="inline-block font-bold">Job</label>
            <input
              onChange={(e) => setJob(e.target.value)}
              type="text"
              placeholder="Enter your job..."
              className="px-[10px] py-[5px] border border-colorGray rounded-md  transition-all w-full outline-none focus:border-colorPrimary"
            />
          </div>
          <button
            onClick={handleCreateUser}
            type="button"
            className="w-full py-[10px] hover:opacity-80 transition-all text-white font-bold capitalize bg-colorPrimary rounded-md"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

ModalAddUser.propTypes = {
  handleCloseMdal: PropTypes.func,
  open: PropTypes.bool,
};

export default ModalAddUser;
