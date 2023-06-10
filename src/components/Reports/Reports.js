import { DataGrid } from "@mui/x-data-grid";
import { BoxReport } from "./Style";
import { collection, onSnapshot } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../../firebase";
import { useNavigate } from "react-router";

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

export default function Reports() {
  const [rows, setRows] = useState([]);
  const history = useNavigate();

  let userId = sessionStorage.getItem("userId");

  if (userId === 'null') {
    history("/");
  }

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
