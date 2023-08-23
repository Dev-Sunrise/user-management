import { CSVLink } from "react-csv";

const Button = ({
  handleClickAddUser,
  dataExport,
  getUsersExport,
  handleImportExcel,
}) => {
  return (
    <>
      <div>
        <label
          htmlFor="file"
          className="px-[15px] py-[5px] bg-gray-400 rounded-lg text-white capitalize font-medium flex items-center gap-x-[5px] hover:opacity-80 transition-all"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
              />
            </svg>
          </span>
          <span>Import Excel</span>
        </label>
        <input
          type="file"
          id="file"
          hidden
          onChange={(e) => handleImportExcel(e)}
        />
      </div>
      <button className="px-[15px] py-[5px] bg-purple-400 rounded-lg text-white capitalize font-medium flex items-center gap-x-[5px] hover:opacity-80 transition-all">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
        </span>
        <CSVLink
          filename={"users.csv"}
          data={dataExport}
          asyncOnClick={true}
          onClick={getUsersExport}
        >
          Export excel
        </CSVLink>
      </button>

      <button
        onClick={handleClickAddUser}
        className="px-[15px] py-[5px] bg-green-400 rounded-lg text-white capitalize font-medium flex items-center gap-x-[5px] hover:opacity-80 transition-all"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>
        </span>
        <span>Add user</span>
      </button>
    </>
  );
};

export default Button;
