import React, { useEffect, useState } from "react";
import moment from "moment";
import { Report } from "./Report";
import { prioritizeData } from "../lib/prioritizeData";
import { fetchCollectCows, fetchCowsDue } from "../lib/xlinkClient";

export const CollectCowsReport = (props) => {
  const priorityFields = ["Animal Number", "Away", "Day Production", "Lactation days"]
  return (<ReportWithData reportName="Collect Cows" fetchData={fetchCollectCows} priorityFields={priorityFields}></ReportWithData>)
};

export const CowsDueReport = (props) => {
  const priorityFields = ["Animal Number", "Animal Name", "Expected Calving Date"]
  var dataToPrependd = [
    {"Animal Number": "12", "Animal Name": "Brittany L", "Expected Calving Date": "2/24/23", "Age": "30", "Animal Life No.": "", "Lactation No.": "3", "What?": "Yes, you're pregnant!"}
  ]
  return (<ReportWithData reportName="Cows Due" fetchData={fetchCowsDue} priorityFields={priorityFields} dataToPrepend={dataToPrependd}></ReportWithData>)
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
          var dd = prioritizeData(result, props.priorityFields);
          console.log("here")
          if (props.dataToPrepend) {
            console.log(props.dataToPrepend)
            dd = props.dataToPrepend.concat(dd)
          }
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