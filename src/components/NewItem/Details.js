import { Checkbox, FormControlLabel } from "@mui/material";
import { Box, Typography } from "@mui/material";

const Details = ({event}) => {
  return (
    <Box
      flex="1"
      textAlign="center"
      height="330px"
      bgcolor="#a7aab0"
      padding="10px 20px"
      boxSizing="border-box"
      borderRadius="5px"
      marginRight="10px"
    >
      <Typography fontSize="30px">{event.title}</Typography>
      <Typography bgcolor="#fff" borderRadius="5px" marginTop="20px" minHeight="100px" textAlign="left" padding="10px">
        {event.description}
      </Typography>
      <FormControlLabel label="Completed" control={<Checkbox />} />
      <Typography fontSize="30px">{event.time}</Typography>
    </Box>
  );
};

export default Details;
