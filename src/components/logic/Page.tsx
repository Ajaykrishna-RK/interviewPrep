import React, { useState } from "react";

function Page() {
  // Pagination Logic

  const values = [1, 2, 4, 5, 6, 6, 6, 743, 434, 23, 3, 23, 23, 3333];
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(values.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const itemsToView = values.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="cursor-pointer">
      <p onClick={handlePrev}>prev</p>
      {itemsToView?.map((item) => (
        <p>{item}</p>
      ))}
      <p onClick={handleNext}>Next</p>
      <p>
        {" "}
        Total Pages : {totalPages} /{currentPage}
      </p>
    </div>
  );
}

export default Page;
