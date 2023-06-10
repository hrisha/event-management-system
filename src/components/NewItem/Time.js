import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import { useContext, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../../firebase";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { CostumeInputDialog, CustomTextareaAutosize } from "./Style";
import { OpenContext } from "./OpenContext";

export default function DialogEvent() {
  // const [selectedTime, setSelectedTime] = useState(dayjs("2022-04-17T15:30"));
  const { open, setOpen} = useContext(OpenContext);

  const [eventObject, setEventObject] = useState({
    title: "",
    description: "",
    time : dayjs("2023-06-17T15:30"),
    isCompleted : false
  });

  let userId = sessionStorage.getItem("userId");

  const handleInputChange = (e) => {
    setEventObject({
      ...eventObject,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleTimeChange = (newTime) => {
    setEventObject({
      ...eventObject,
      time: newTime
    });
  };

  const handleClick = () => {
    saveEventToFirebase();
  };

  const saveEventToFirebase = async (time) => {
    try {
      const eventData = {
        title: eventObject.title,
        description: eventObject.description,
        time: eventObject.time.toISOString(), 
        isCompleted: eventObject.isCompleted
      };
      await addDoc(collection(firestore, "users", userId, "events"), eventData);
      setOpen(false);
      console.log("Time saved to Firebase:");
    } catch (error) {
      console.error("Error saving time to Firebase:", error);
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          textAlign="center"
          borderBottom="1px solid #ddd"
          width="500px"
          margin="auto"
        >
          Create Event
        </DialogTitle>
        <DialogContent>
          <CostumeInputDialog placeholder="Title" name="title" onChange={handleInputChange} />
          <CustomTextareaAutosize placeholder="Description" name="description" onChange={handleInputChange} />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          "DateTimePicker",
          "MobileDateTimePicker",
          "DesktopDateTimePicker",
          "StaticDateTimePicker",
        ]}
      >
        <DemoItem label="Static variant">
          <StaticDateTimePicker
            value={eventObject.time}
            onChange={handleTimeChange}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick} >New Event</Button>
        </DialogActions>
      </Dialog>

        </>
  );
}
