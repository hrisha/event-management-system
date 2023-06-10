import { DataGrid } from "@mui/x-data-grid";
import { BoxReport } from "./Style";
import { collection, onSnapshot } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../../firebase";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "eventTitle", headerName: "Title", width: 200 },
  { field: "eventTime", headerName: "Event Time", width: 200 },
  {
    field: "eventStatus",
    headerName: "Status",
    width: 130,
  },
  {
    field: "description",
    headerName: "Description",
    width: 300,
  }
];

// const rows = [
//   { id: 1, eventTime: "Snow", eventTitle: "Jon", eventStatus: 35 },
//   { id: 2, eventTime: "Lannister", eventTitle: "Cersei", age: 42 },
//   { id: 3, eventTime: "Lannister", eventTitle: "Jaime", age: 45 },
//   { id: 4, eventTime: "Stark", eventTitle: "Arya", age: 16 },
//   { id: 5, eventTime: "Targaryen", eventTitle: "Daenerys", age: null },
//   { id: 6, eventTime: "Melisandre", eventTitle: null, age: 150 },
//   { id: 7, eventTime: "Clifford", eventTitle: "Ferrara", age: 44 },
//   { id: 8, eventTime: "Frances", eventTitle: "Rossini", age: 36 },
//   { id: 9, eventTime: "Roxie", eventTitle: "Harvey", age: 65 },
// ];

export default function Reports() {
  const [rows, setRows] = useState([]);
  let userId = sessionStorage.getItem("userId");

  useEffect(() => {
    return onSnapshot(
      collection(firestore, "users", userId, "events"),
      (snapshot) => {
        const events = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        let eventsArray = [];
        let i=0;
        events.forEach(event => {
          eventsArray.push({
            id: 1 + i, 
            eventTime: event.time, 
            eventTitle: event.title, 
            eventStatus: event.isCompleted || (new Date(event.time) < new Date()) ? "Completed" : "Pending",
            description: event.description
          });
          i++;
        });
        setRows(eventsArray);
        console.table(events);
      }
    );
  }, [setRows, userId]);

  return (
    <BoxReport>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </BoxReport>
  );
}
