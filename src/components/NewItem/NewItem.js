import {
  Box,
  Typography
} from "@mui/material";
import {
  BoxDate,
  CostumeIconButton
} from "./Style";
import Details from "./Details";
import { useContext, useEffect, useState } from "react";
import DialogEvent from "./Time";
import { OpenContext } from "./OpenContext";
import { collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../../firebase";
import TimeParts from "./TimeParts";

const NewItem = () => {
  const [show, setShow] = useState(false);
  const { setOpen } = useContext(OpenContext);
  const [userEvents, setUserEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState({});

  let userId = sessionStorage.getItem("userId");

  useEffect(() => {
    return onSnapshot(
      collection(firestore, "users", userId, "events"),
      (snapshot) => {
        const events = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUserEvents(events);
        console.table(events);
      }
    );
  }, [setUserEvents, userId]);

  const handlePostClick = () => {
    setOpen(true);
  };

  const handleDetails = (event) => {
    setSelectedEvent(event);
    setShow(true);
  };

  return (
    <>
      <Box display="flex" marginTop="80px">
        <Box textAlign="center" width="400px" padding="0 10px">
          <CostumeIconButton
            onClick={handlePostClick}
          >
            Add New Event
          </CostumeIconButton>
          {userEvents.map((event) => {
            return (
              <BoxDate key={event.id} onClick={()=>handleDetails(event)}>
                <Box display="flex" justifyContent="space-evenly">
                  <TimeParts eventTime={event.time}/>
                </Box>
                <Typography marginTop="10px" fontSize="25px" color="#fff">
                  {event.title}
                </Typography>
              </BoxDate>
            );
          })}
        </Box>
        {show && <Details event={selectedEvent}/>}
      </Box>
      <DialogEvent />
    </>
  );
};

export default NewItem;
