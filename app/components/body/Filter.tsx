"use client";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useMemo } from "react";
import { FieldValues, useForm } from "react-hook-form";

const Filter = function () {
  const continents = {
    Africa: false,
    Antarctica: false,
    Asia: false,
    Australia: false,
    Europe: false,
    NA: false,
    SA: false,
  };
  const level = {
    Entry: false,
    Intermediate: false,
    Expert: false,
  };

  const employmentType = {
    PartTime: false,
    FullTime: false,
    Internship: false,
  };

  const {
    register,
    watch,
    setValue,
    reset,
    formState: { dirtyFields },
  } = useForm<FieldValues>({
    defaultValues: {
      ...continents,
      ...level,
      ...employmentType,
    },
  });
  // Continent
  const Africa = watch("Africa");
  const Antarctica = watch("Antarctica");
  const Asia = watch("Asia");
  const Australia = watch("Australia");
  const Europe = watch("Europe");
  const SA = watch("SA");
  const NA = watch("NA");
  // Level
  const Entry = watch("Entry");
  const Intermediate = watch("Intermediate");
  const Expert = watch("Expert");

  const PartTime = watch("PartTime");
  const FullTime = watch("FullTime");
  const Internship = watch("Internship");

  const handleChange = (value: boolean, name: string) => {
    setValue(name, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  return (
    <div className="flex flex-col gap-6 text-white ">
      <div className="">
        <p className="text-lg font-bold ">Location</p>
        <div className="relative text-myGray">
          <FormGroup>
            {Object.keys(continents).map((continent) => (
              <FormControlLabel
                key={continent}
                className="flex items-center gap-0 -mb-3 text-xs font-light"
                control={
                  <Checkbox
                    {...register(continent)}
                    onChange={(e) => handleChange(e.target.checked, continent)}
                    sx={{
                      color: blue[200],
                      "& .MuiSvgIcon-root": { fontSize: 20 },
                      opacity: 0.2,
                      "&.Mui-checked": {
                        opacity: 0.8,
                        color: blue[600],
                      },
                    }}
                  />
                }
                label={continent}
              />
            ))}
          </FormGroup>
        </div>
      </div>
      <div>
        <p className="text-lg font-bold ">Level</p>
        <div className="relative text-myGray">
          <FormGroup>
            {Object.keys(level).map((level) => (
              <FormControlLabel
                key={level}
                className="flex items-center gap-0 -mb-3 text-xs font-light"
                control={
                  <Checkbox
                    {...register(level)}
                    onChange={(e) => handleChange(e.target.checked, level)}
                    sx={{
                      color: blue[200],
                      "& .MuiSvgIcon-root": { fontSize: 20 },
                      opacity: 0.2,
                      "&.Mui-checked": {
                        opacity: 0.8,
                        color: blue[600],
                      },
                    }}
                  />
                }
                label={level}
              />
            ))}
          </FormGroup>
        </div>
      </div>
      <div>
        <p className="text-lg font-bold ">Status</p>
        <div className="relative text-myGray">
          <FormGroup>
            {Object.keys(employmentType).map((type) => (
              <FormControlLabel
                key={type}
                className="flex items-center gap-0 -mb-3 text-xs font-light"
                control={
                  <Checkbox
                    {...register(type)}
                    onChange={(e) => handleChange(e.target.checked, type)}
                    sx={{
                      color: blue[200],
                      "& .MuiSvgIcon-root": { fontSize: 20 },
                      opacity: 0.2,
                      "&.Mui-checked": {
                        opacity: 0.8,
                        color: blue[600],
                      },
                    }}
                  />
                }
                label={type}
              />
            ))}
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default Filter;
