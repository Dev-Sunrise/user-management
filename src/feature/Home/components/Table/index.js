const Table = ({ handleEditUser, listUsers, handleDeleteUser, handleSort }) => {
  return (
    <table className=" table-list">
      <thead>
        <tr>
          <th>
            <div className="flex items-center gap-x-[15px]">
              <span
                onClick={() => handleSort("desc", "id")}
                className="transition-all cursor-pointer text-colorGray hover:text-colorPrimary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                >
                  <path d="M450.7 38c-8.3-6-19.1-7.7-28.8-4.4l-48 16c-16.8 5.6-25.8 23.7-20.2 40.5s23.7 25.8 40.5 20.2l5.9-2V160H384c-17.7 0-32 14.3-32 32s14.3 32 32 32h48 48c17.7 0 32-14.3 32-32s-14.3-32-32-32H464V64c0-10.3-4.9-19.9-13.3-26zM160 480c9 0 17.5-3.8 23.6-10.4l88-96c11.9-13 11.1-33.3-2-45.2s-33.3-11.1-45.2 2L192 365.7V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V365.7L95.6 330.4c-11.9-13-32.2-13.9-45.2-2s-13.9 32.2-2 45.2l88 96C142.5 476.2 151 480 160 480zM418.3 307a32 32 0 1 1 27.4 57.9A32 32 0 1 1 418.3 307zM405.1 419.8l-6.8 9.2c-10.5 14.2-7.5 34.2 6.7 44.8s34.2 7.5 44.8-6.7l48.8-65.8c14-18.9 21.5-41.7 21.5-65.2c0-48.6-39.4-88-88-88s-88 39.4-88 88c0 39.2 25.6 72.4 61.1 83.8z" />
                </svg>
              </span>
              <span>ID</span>
              <span
                onClick={() => handleSort("asc", "id")}
                className="transition-all cursor-pointer text-colorGray hover:text-colorPrimary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                >
                  <path d="M450.7 38c8.3 6 13.3 15.7 13.3 26v96h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H432 384c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V108.4l-5.9 2c-16.8 5.6-34.9-3.5-40.5-20.2s3.5-34.9 20.2-40.5l48-16c9.8-3.3 20.5-1.6 28.8 4.4zM160 32c9 0 17.5 3.8 23.6 10.4l88 96c11.9 13 11.1 33.3-2 45.2s-33.3 11.1-45.2-2L192 146.3V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V146.3L95.6 181.6c-11.9 13-32.2 13.9-45.2 2s-13.9-32.2-2-45.2l88-96C142.5 35.8 151 32 160 32zM445.7 364.9A32 32 0 1 0 418.3 307a32 32 0 1 0 27.4 57.9zm-40.7 54.9C369.6 408.4 344 375.2 344 336c0-48.6 39.4-88 88-88s88 39.4 88 88c0 23.5-7.5 46.3-21.5 65.2L449.7 467c-10.5 14.2-30.6 17.2-44.8 6.7s-17.2-30.6-6.7-44.8l6.8-9.2z" />
                </svg>
              </span>
            </div>
          </th>
          <th>Avatar</th>
          <th>Last Name</th>
          <th>
            <div className="flex items-center gap-x-[15px]">
              <span
                onClick={() => handleSort("desc", "first_name")}
                className="transition-all cursor-pointer text-colorGray hover:text-colorPrimary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                >
                  <path d="M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 320c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 416H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 352H352c-17.7 0-32-14.3-32-32zM416 32c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 224H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128C392.8 38.8 403.9 32 416 32zM395.8 176h40.4L416 135.6 395.8 176z" />
                </svg>
              </span>
              <span>First Name</span>
              <span
                onClick={() => handleSort("asc", "first_name")}
                className="transition-all cursor-pointer text-colorGray hover:text-colorPrimary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                >
                  <path d="M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 320c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zM416 32c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 38.8 428.1 32 416 32zM395.8 176L416 135.6 436.2 176H395.8z" />
                </svg>
              </span>
            </div>
          </th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map((item) => (
            <tr key={item.id}>
              <td>
                <span>{item.id}</span>
              </td>
              <td>
                <div className="w-[40px] h-[40px] inline-block">
                  <img
                    src={item.avatar}
                    alt=""
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              </td>
              <td>
                <span className="line-clamp-1">{item.last_name}</span>
              </td>
              <td>
                <span className="line-clamp-1">{item.first_name}</span>
              </td>
              <td>
                <span className="line-clamp-1">{item.email}</span>
              </td>
              <td>
                <div className="flex items-center gap-x-4">
                  <span
                    onClick={() => handleEditUser(item)}
                    className="transition-all cursor-pointer hover:opacity-80"
                  >
                    <svg
                      width={25}
                      height={24}
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.625 4H4.625C4.09457 4 3.58586 4.21071 3.21079 4.58579C2.83571 4.96086 2.625 5.46957 2.625 6V20C2.625 20.5304 2.83571 21.0391 3.21079 21.4142C3.58586 21.7893 4.09457 22 4.625 22H18.625C19.1554 22 19.6641 21.7893 20.0392 21.4142C20.4143 21.0391 20.625 20.5304 20.625 20V13"
                        stroke="#624DE3"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.125 2.50001C19.5228 2.10219 20.0624 1.87869 20.625 1.87869C21.1876 1.87869 21.7272 2.10219 22.125 2.50001C22.5228 2.89784 22.7463 3.4374 22.7463 4.00001C22.7463 4.56262 22.5228 5.10219 22.125 5.50001L12.625 15L8.625 16L9.625 12L19.125 2.50001Z"
                        stroke="#624DE3"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span
                    onClick={() => handleDeleteUser(item)}
                    className="transition-all cursor-pointer hover:opacity-80"
                  >
                    <svg
                      width={25}
                      height={24}
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.625 6H5.625H21.625"
                        stroke="#A30D11"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.625 6V4C8.625 3.46957 8.83571 2.96086 9.21079 2.58579C9.58586 2.21071 10.0946 2 10.625 2H14.625C15.1554 2 15.6641 2.21071 16.0392 2.58579C16.4143 2.96086 16.625 3.46957 16.625 4V6M19.625 6V20C19.625 20.5304 19.4143 21.0391 19.0392 21.4142C18.6641 21.7893 18.1554 22 17.625 22H7.625C7.09457 22 6.58586 21.7893 6.21079 21.4142C5.83571 21.0391 5.625 20.5304 5.625 20V6H19.625Z"
                        stroke="#A30D11"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.625 11V17"
                        stroke="#A30D11"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.625 11V17"
                        stroke="#A30D11"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
