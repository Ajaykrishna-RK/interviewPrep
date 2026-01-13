import React, { useState } from "react";

function Page() {
  // Pagination Logic

  const values = [1, 2, 4, 5, 6, 6, 6, 743, 434, 23, 3, 23, 23, 3333];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(values.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const itemsToDisplay = values.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="cursor-pointer">
      <p onClick={() => handlePrev()}>Prev </p>
      {itemsToDisplay?.map((item) => (
        <p>{item}</p>
      ))}

      <p onClick={() => handleNext()}>Next </p>
    </div>
  );
}

export default Page;
