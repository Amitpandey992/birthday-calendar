import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

interface FavoriteListProps {
  favoriteBdays: any[];
}

const FavoriteList: React.FC<FavoriteListProps> = ({ favoriteBdays }) => {
  const formatDate = (timestamp: any) => {
    let date = new Date(timestamp);
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
  };

  return (
    <List>
      {favoriteBdays.map((favoriteBday, i) => (
        <ListItem
          key={i}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            fontWeight: "bold",
          }}
        >
          {favoriteBday.pages && favoriteBday.pages[0] && (
            <ListItemText
              primary={formatDate(favoriteBday.pages[0].timestamp)}
              sx={{ fontWeight: "bold" }}
            />
          )}
          <ListItemText
            primary={favoriteBday.text}
            sx={{ marginLeft: "30px" }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default FavoriteList;
