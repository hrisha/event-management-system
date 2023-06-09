import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import {
  BoxDate,
  CostumeIconButton,
  CostumeInputDialog,
  CustomTextareaAutosize,
} from "./Style";
import Details from "./Details";
import { useState } from "react";
import HelperText from "./Time";
import { LinkPages } from "../Header/Style";

const NewItem = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handlePostClick = () => {
    setOpen(true);
  };
  const handleDetails = () => {
    setShow(!show);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const data = [
    {
      id: 1,
      title: "item 1",
      isActive: "active",
      date: [
        {
          id: 1,
          label: "Days",
          time: 365,
        },
        {
          id: 2,
          label: "Hours",
          time: 12,
        },
        {
          id: 3,
          label: "Mints",
          time: 34,
        },
        {
          id: 4,
          label: "Secs",
          time: 58,
        },
      ],
    },
    {
      id: 2,
      title: "item 2",
      date: [
        {
          id: 1,
          label: "Days",
          time: 365,
        },
        {
          id: 2,
          label: "Hours",
          time: 12,
        },
        {
          id: 3,
          label: "Mints",
          time: 34,
        },
        {
          id: 4,
          label: "Secs",
          time: 58,
        },
      ],
    },
  ];

  return (
    <>
      <Box display="flex" marginTop="80px">
        <Box textAlign="center" width="400px" padding="0 10px">
          <CostumeIconButton
            bgcolor="#64748b"
            color="#fff"
            padding="5px"
            borderRadius="5px"
            onClick={handlePostClick}
          >
            Add New Event
          </CostumeIconButton>
          {data.map(({ title, date, id, isActive }) => {
            return (
              <BoxDate key={id} onClick={handleDetails}>
                <Box display="flex" justifyContent="space-evenly">
                  {date.map((date) => {
                    return (
                      <Box
                        bgcolor="#64748b"
                        color="#fff"
                        padding="5px"
                        borderRadius="5px"
                        width="45px"
                        key={date.id}
                      >
                        <Typography>{date.time}</Typography>
                        <Typography>{date.label}</Typography>
                      </Box>
                    );
                  })}
                </Box>
                <Typography marginTop="10px" fontSize="25px" color="#fff">
                  {title}
                </Typography>
              </BoxDate>
            );
          })}
        </Box>
        {show && <Details />}
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          textAlign="center"
          borderBottom="1px solid #ddd"
          width="500px"
          margin="auto"
        >
          Create item
        </DialogTitle>
        <DialogContent>
          <CostumeInputDialog placeholder="Title" />
          <CustomTextareaAutosize placeholder="Description" />
          <HelperText />
        </DialogContent>
        <DialogActions>
          <Button>New Item</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default NewItem;
