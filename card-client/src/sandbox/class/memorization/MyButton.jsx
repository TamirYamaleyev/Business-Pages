import { Button } from "@mui/material";
import React, { memo } from "react";

export default memo(function MyButton({ handleClick, children, cl }) {

  return (
    <React.Fragment>
      <Button onClick={handleClick}>{children}</Button>
      {cl ? <p>{cl}</p> : null}
    </React.Fragment>
  );
});
