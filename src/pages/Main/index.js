import React from "react";
import { isEmpty } from "lodash";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import { ListItem } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./reducers/main";

const Main = () => {
  const dispatch = useDispatch();
  const { loading, data, errorMsg } = useSelector((state) => state.main);

  return (
    <div>
      <h1>This is a basic react app based on redux and redux-saga!</h1>
      <Button onClick={() => dispatch(fetchData())}>
        Click to add data to state
      </Button>

      {loading && <h4>Fetching data...</h4>}
      {errorMsg && <h4>{errorMsg}</h4>}

      {!isEmpty(data) && (
        <List>
          {data.map(({ title, id }, idx) => (
            <ListItem key={idx} divider>
              <h4>{id}</h4>
              <p> {title}</p>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default Main;
