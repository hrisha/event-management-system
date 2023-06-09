import { Checkbox, FormControlLabel } from "@mui/material";
import { Box, Typography } from "@mui/material";

const Details = () => {
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
      <Typography fontSize="30px">Item 1</Typography>
      <Typography bgcolor="#fff" borderRadius="5px" marginTop="20px">
        Description
      </Typography>
      <FormControlLabel label="Completed" control={<Checkbox />} />
    </Box>
  );
};

export default Details;
