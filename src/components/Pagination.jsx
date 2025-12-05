import axios from "axios";
import React, { useEffect, useState } from "react";

function Pagination() {
  const [users, setUsers] = useState([]);
  const itemsPerPage = 10;
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchedUser, setSearchedUser] = useState([]);
  const getUsers = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/users");
      setUsers(res?.data?.users);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const itemsToDisplay = users?.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    if (searchText) {
      const int = setTimeout(() => {
        const findUser = users?.filter((item) =>
          item?.email?.toLowerCase()?.includes(searchText?.toLowerCase())
        );
        setSearchedUser(findUser);
        console.log("hello");
      }, 1000);
      return () => clearTimeout(int);
    } else setSearchedUser([]);
  }, [searchText]);

  console.log(searchedUser, "user");

  return (
    <div>
      <input
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        className="border "
      />

      {searchedUser?.length > 0 &&
        searchedUser?.map((item) => <p className="text-red-600">{item?.email}</p>)}

      {itemsToDisplay?.map((item) => (
        <p>{item?.email}</p>
      ))}
      {currentPage > 1 && <button onClick={() => handlePrev()}>Prev</button>}
      {currentPage < totalPages && (
        <button onClick={() => handleNext()}>Next</button>
      )}
    </div>
  );
}

export default Pagination;
