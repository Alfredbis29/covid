import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { fetchDataApi } from '../redux/covid/covid';

const Detail = () => {
  const dispatch = useDispatch();
  const _ = useSelector((state) => state.covidData.datesData);
  if (Object.entries(_).length === 0) {
    dispatch(fetchDataApi());
  }

  const navigate = useNavigate();
  const params = useParams();
  const countryData = Object.entries(_).filter(
    (data) => data[0].localeCompare(params.Country) === 0,
  );

  return (
    <>
      {Object.entries(_).length === 0 && (
        <h4 className="m-4 text-white text1">Patient a bit!</h4>
      )}
      {Object.entries(_).length > 0 && (
        <main>
          <FaRegArrowAltCircleLeft
            className="arrow-left"
            onClick={() => navigate('/')}
          />
          <div className="row m-0 p-0 ">
            <div className="col m-0 p-3  d-flex flex-column align-items-center justify-content-center bg-image">
              <p className="text-white text-center text2">
                <span className="h5 text-center text1">
                  COVID-19 Statistics
                </span>
                <br />
                In all the world
              </p>
            </div>
            <div className="col bg-color m-0 p-3 ">
              <p className="text-white text3">
                <span className="text1 text-uppercase">
                  {params.Country}
                  :
                </span>
                <br />
                {countryData[0][1].today_confirmed}
              </p>
              <p className="text-white text2">
                <span className="text1">DATE:</span>
                <br />
                {countryData[0][1].date}
              </p>
            </div>
          </div>
          <p className="bg-color1 text-white m-0 p-0 text3u">STATISTICS</p>

          <motion.section
            className="bg-color"
            initial={{ x: '-100vw' }}
            animate={{ x: -0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="row countries-container m-0">
              <div className="col-6">
                <div className="countries">
                  <h4 className="text-white text-end text3">Total Confirmed</h4>
                  <p className="text-white text-end text2">
                    {countryData[0][1].today_confirmed}
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="countries">
                  <h4 className="text-white text-end text3">New Confirmed cases</h4>
                  <p className="text-white text-end text2">
                    {countryData[0][1].today_new_confirmed}
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="countries">
                  <h4 className="text-white text-end text3">Total Recovered</h4>
                  <p className="text-white text-end text2">
                    {countryData[0][1].today_recovered}
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="countries">
                  <h4 className="text-white text-end text3">New Recovered</h4>
                  <p className="text-white text-end text2">
                    {countryData[0][1].today_new_recovered}
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="countries">
                  <h4 className="text-white text-end text3">Total Deaths</h4>
                  <p className="text-white text-end text2">
                    {countryData[0][1].today_deaths}
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="countries">
                  <h4 className="text-white text-end text3">New Deaths</h4>
                  <p className="text-white text-end text2">
                    {countryData[0][1].today_new_deaths}
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </main>
      )}
    </>
  );
};

export default Detail;
