import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import BirthdayList from "./components/BirthdayList";
import FavoriteList from "./components/FavoriteList";
import { Dayjs } from "dayjs";

const App: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [favoriteBdays, setFavoriteBdays] = useState<any[]>([]);

  // Function to filter out duplicates
  const filterDuplicates = (arr: any[]) => {
    const unique = [];
    const map = new Map();
    for (const item of arr) {
      if (!map.has(item.text)) {
        map.set(item.text, true);
        unique.push(item);
      }
    }
    return unique;
  };

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteBdays");
    if (storedFavorites) {
      setFavoriteBdays(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favoriteBdays", JSON.stringify(favoriteBdays));
  }, [favoriteBdays]);

  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date);
  };

  const handleAddToFavorites = (birthday: any) => {
    setFavoriteBdays((prevFavorites) =>
      filterDuplicates([...prevFavorites, birthday])
    );
  };

  const handleRemoveFromFavorites = (birthday: any) => {
    setFavoriteBdays((prevFavorites) =>
      prevFavorites.filter((fav) => fav.text !== birthday.text)
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <DateCalendar value={selectedDate} onChange={handleDateChange} />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Birthdays on{" "}
              {selectedDate
                ? selectedDate.format("MMMM D, YYYY")
                : "Selected Date"}
            </Typography>

            <BirthdayList
              date={selectedDate}
              onAddToFavorites={handleAddToFavorites}
              onRemoveFromFavorites={handleRemoveFromFavorites}
              favoriteBdays={favoriteBdays}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Favourite Birthdays</Typography>
            <FavoriteList favoriteBdays={favoriteBdays} />
          </Grid>
        </Grid>
      </Container>
    </LocalizationProvider>
  );
};

export default App;
