import React from "react";
// import { useState } from 'react'
import "./News.css";
import Download from "../Home/Download";
import { Link } from "react-router-dom";
import Newss from "../Home/Utilities/Newss";

// import SweetPagination from "sweetpagination";

import Footer from "../Home/Footer";

function News() {
  // const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

  // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <>
      <div className="News__head">
        <div className="News__head-title">
          <h2>CredBevy News</h2>
        </div>
        <div className="News__head-body">
          <p>News related to Credbevy all around the world gathered here</p>
        </div>
      </div>
      <div className="News__searchbar">
        {/* <img alt="search-icon" src={searchIcon} /> */}
        <input type="text" placeholder="Search Something.." />
      </div>
      <div className="News__grid-container">
        <div className="News__grid-item1">
          <div className="News__grid-item1-image"></div>
          <div className="News__grid-item1-content">
            <Link to="/NewsSingle" style={{ textDecoration: "none" }}>
              <div className="News__grid-item1-content-head">
                <h4>
                  Credbevy raises unknown amount in undisclosed round funding{" "}
                </h4>
              </div>
            </Link>
            <div className="News__grid-item1-content-body">
              <p>
                News related to Credbevy all around the world gathered here.
                News related to Credbevy all around the world gathered hereNews
                related to Credbevy all around the world gathered here.......
              </p>
            </div>
            <div className="News__grid-item1-content-profile">
              <div className="News__grid-item1-content-profile-img"></div>
              <div className="News__grid-item1-content-profile-name">
                Oripeloye Timilehin
              </div>
            </div>
          </div>
        </div>
        <div className="newss__container">
          <Newss
            newsTitle={"Credbevy raises unknown amount in indisclosed round"}
            newsContent={
              "News related to Credbevy all around the world gathered here. News related to Credbevy all around the world gathered hereNews related to Credbevy all around the world gathered here......."
            }
            newsProfileName={"Oripeloye Timilehin"}
          />

          <Newss
            newsTitle={"Credbevy raises unknown amount in indisclosed round"}
            newsContent={
              "News related to Credbevy all around the world gathered here. News related to Credbevy all around the world gathered hereNews related to Credbevy all around the world gathered here......."
            }
            newsProfileName={"Oripeloye Timilehin"}
          />
          <Newss
            newsTitle={"Credbevy raises unknown amount in indisclosed round"}
            newsContent={
              "News related to Credbevy all around the world gathered here. News related to Credbevy all around the world gathered hereNews related to Credbevy all around the world gathered here......."
            }
            newsProfileName={"Oripeloye Timilehin"}
          />

          <Newss
            newsTitle={"Credbevy raises unknown amount in indisclosed round"}
            newsContent={
              "News related to Credbevy all around the world gathered here. News related to Credbevy all around the world gathered hereNews related to Credbevy all around the world gathered here......."
            }
            newsProfileName={"Oripeloye Timilehin"}
          />

          <Newss
            newsTitle={"Credbevy raises unknown amount in indisclosed round"}
            newsContent={
              "News related to Credbevy all around the world gathered here. News related to Credbevy all around the world gathered hereNews related to Credbevy all around the world gathered here......."
            }
            newsProfileName={"Oripeloye Timilehin"}
          />
          <Newss
            newsTitle={"Credbevy raises unknown amount in indisclosed round"}
            newsContent={
              "News related to Credbevy all around the world gathered here. News related to Credbevy all around the world gathered hereNews related to Credbevy all around the world gathered here......."
            }
            newsProfileName={"Oripeloye Timilehin"}
          />

          <Newss
            newsTitle={"Credbevy raises unknown amount in indisclosed round"}
            newsContent={
              "News related to Credbevy all around the world gathered here. News related to Credbevy all around the world gathered hereNews related to Credbevy all around the world gathered here......."
            }
            newsProfileName={"Oripeloye Timilehin"}
          />
          <Newss
            newsTitle={"Credbevy raises unknown amount in indisclosed round"}
            newsContent={
              "News related to Credbevy all around the world gathered here. News related to Credbevy all around the world gathered hereNews related to Credbevy all around the world gathered here......."
            }
            newsProfileName={"Oripeloye Timilehin"}
          />
          <Newss
            newsTitle={"Credbevy raises unknown amount in indisclosed round"}
            newsContent={
              "News related to Credbevy all around the world gathered here. News related to Credbevy all around the world gathered hereNews related to Credbevy all around the world gathered here......."
            }
            newsProfileName={"Oripeloye Timilehin"}
          />
        </div>
      </div>
      <div className="news__pagination">
        {/* {currentPageData.map((item) => (
          <div>
            <h3>{item}</h3>
          </div>
        ))} */}
        PAGINATION
        {/* <SweetPagination
          currentPageData={setCurrentPageData}
          dataPerPage={10}
          getData={items}
          navigation={true}
          color
        /> */}
      </div>

      <Download />
      <Footer />
    </>
  );
}

export default News;
