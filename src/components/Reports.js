import React, { useEffect, useState } from "react";
import moment from "moment";
import { Report } from "./Report";
import { prioritizeData } from "../lib/prioritizeData";
import { fetchCollectCows, fetchCowsDue } from "../lib/xlinkClient";

export const CollectCowsReport = (props) => {

  return (<ReportWithData reportName="Collect Cows" fetchData={fetchCollectCows}></ReportWithData>)
};

export const CowsDueReport = (props) => {

  return (<ReportWithData reportName="Cows Due" fetchData={fetchCowsDue}></ReportWithData>)
};


const ReportWithData = (props) => {
  
  const [data, setData] = useState([null, null, null, null, null, null, null]);
  const [isLoading, setLoading] = useState(true);
  const [time, setTime] = useState("never");

  var fetchNewData = () => {
    setLoading(true);
    props.fetchData()
      .then(
        async (result) => {
          await new Promise(r => setTimeout(r, 300));
          var dd = prioritizeData(result);
          setData(dd);
          setLoading(false);
          setTime(moment().format('h:mm a'));

        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("error happened....");
        }
      );
  };

  useEffect(() => {
    fetchNewData();
  }, []);

  return (
    <Report reportName={props.reportName} data={data} refreshTime={time} refreshReport={fetchNewData} isLoading={isLoading}></Report>
  );
}