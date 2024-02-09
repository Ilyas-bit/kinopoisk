import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/actions/user-actions";
import { getCategory } from "../../redux/selectors/selectors";

interface Category {
  label: string;
  translation: string;
}

const categories: Category[] = [
  { label: "Популярности", translation: "popularity.desc" },
  { label: "Рейтингу", translation: "vote_count.desc" },
  { label: "Избранное", translation: "favorites" },
];

export default function SortFilter() {
  const selectedСategoryRedux = useSelector(getCategory);
  const dispatchRedux = useDispatch();

  const [value, setValue] = useState<string | null>(
    categories.find(
      (category) => category.translation === selectedСategoryRedux
    )?.label || null
  );

  const changeCategory = (newCategory: Category) => {
    dispatchRedux(setCategory(newCategory?.translation || null));
  };

  useEffect(() => {
    setValue(
      categories.find(
        (category) => category.translation === selectedСategoryRedux
      )?.label || null
    );
  }, [selectedСategoryRedux]);

  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={categories.map((category) => category.label)}
        onChange={(_, newValue) => {
          setValue(newValue);
          const selectedCategory = categories.find(
            (category) => category.label === newValue
          );
          changeCategory(selectedCategory);
        }}
        value={value}
        clearOnBlur
        sx={{ mb: 6 }}
        renderInput={(params) => (
          <TextField {...params} label="Сортировать по:" />
        )}
      />
    </>
  );
}
