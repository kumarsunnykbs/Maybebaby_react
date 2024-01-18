import React, { useState, useEffect } from "react";
import { getFamilyHistoryApi } from "../../redux/api/api";
import MainHeader from "../../components/topbar/MainHeader";
import ModalMedia from "../homePage/ModalMedia";
import "./FamilyHistory.css";
import Footer from "../footer/Footer";
import ReactPaginate from "react-paginate";
import ey from "../../asset/image/ey.png";
import useCheckMobileScreen from "../../components/CheckMobileScreen";
const FamilyHistory = () => {
  const [data, setData] = useState([]);
  const [childImages, setChildImages] = useState([]);
  const [error, setError] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(10);

  const winWidth = useCheckMobileScreen()

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFamilyHistoryApi();
console.log(response,"response123");
      if (response.error) {
        // Handle error
        setError(response.error);
      } else {
        // Set data
        setData(response.body);
      }
    };
    fetchData();
  }, []);


  const viewChildrenImage = (images, isParent = false) => {

    const imagesArr = isParent ? [images] : JSON.parse(images);

    setChildImages(imagesArr);
    setOpenModal(true);
  };

  const appendZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  const formatDate = (value) => {
    const date = new Date(value);
    return `${appendZero(date.getDate())}-${appendZero(
      date.getMonth() + 1
    )}-${date.getFullYear()}`;
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);




  return (
    <>
      <MainHeader />
      {openModal && (
        <ModalMedia
          setOpenModal={setOpenModal}
          imageUploadResponse1={childImages}
        />
      )}
      <section className="family-new">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-center mt-3 mb-1 historyPageHeading">Image History</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="scroll-tbl new-familytable">
                <table className="table mt-4 mb-5 tb-cus">
                  <thead>
                    <tr>
                      <th scope="col">Father</th>
                      <th scope="col">Mother</th>
                      <th scope="col">children</th>
                      <th scope="col">creation date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((element, index) => {
                      return (
                        <tr key={element.id} className={index % 2 === 0 ? "allData" : "odd"}>
                          <td scope="row">
                            <img
                              className="img-size"
                              onClick={() => viewChildrenImage(element.father_image, true)}
                              style={{ borderRadius: "50%" }}
                              src={element.father_image}
                              alt="father"
                            />
                          </td>

                          <td scope="row">
                            <img
                              className="img-size"
                              onClick={() => viewChildrenImage(element.mother_image, true)}
                              style={{ borderRadius: "50%" }}
                              src={element.mother_image}
                              alt="mother"
                            />
                          </td>
                          <td>
                            <img onClick={() => viewChildrenImage(element.child_images)} className="ey" src={ey} />
                          </td>

                          <td scope="row"><p className="td-date">{formatDate(element.creation_date)}</p></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* React Paginate component */}
          <ReactPaginate
            previousLabel={<p><i class="fa-solid fa-arrow-left"></i>  Previous</p>}
            nextLabel={<p>Next <i class="fa-solid fa-arrow-right" /></p>}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(data.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={winWidth > 990 ? 5 : 2}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FamilyHistory;