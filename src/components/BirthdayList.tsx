import React, { useEffect, useState } from "react";
import axios from "axios";
import { List, ListItem, ListItemText } from "@mui/material";
import { Dayjs } from "dayjs";
import { StarBorder } from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";

interface BirthdayListProps {
  date: Dayjs | null;
  onAddToFavorites: (birthday: any) => void;
  onRemoveFromFavorites: (birthday: any) => void;
  favoriteBdays: any[];
}

const BirthdayList: React.FC<BirthdayListProps> = ({
  date,
  onAddToFavorites,
  onRemoveFromFavorites,
  favoriteBdays,
}) => {
  const [birthdays, setBirthdays] = useState<any[]>([]);

  useEffect(() => {
    const fetchBirthdays = async () => {
      if (!date) return;

      try {
        const response = await axios.get(
          `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${date.format(
            "MM/DD"
          )}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_APP_ACCESS_TOKEN}`,
            },
          }
        );

        setBirthdays(response.data.births);
      } catch (error) {
        console.error("Error fetching birthdays:", error);
      }
    };

    fetchBirthdays();
  }, [date]);

  const isFavorite = (birthday: any) => {
    return favoriteBdays.some((fav) => fav.text === birthday.text);
  };

  return (
    <List>
      {birthdays.map((birthday, index) => (
        <ListItem key={index}>
          <ListItemText primary={`${birthday.text}`} />
          {isFavorite(birthday) ? (
            <StarIcon
              sx={{ color: "blue", cursor: "pointer" }}
              onClick={() => onRemoveFromFavorites(birthday)}
            />
          ) : (
            <StarBorder
              onClick={() => onAddToFavorites(birthday)}
              sx={{ cursor: "pointer" }}
            />
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default BirthdayList;
