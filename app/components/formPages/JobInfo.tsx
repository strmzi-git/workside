import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

interface JobInfoProps {
  setValue: (id: string, value: string) => void;
  // handleExperienceChange: (data: any) => void;
  // handleEducationChange: (data: any) => void;
}

const JobInfo: React.FC<JobInfoProps> = function ({ setValue }) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Experience</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        onChange={(data: any) => {
          const value = data.target.getAttribute("value");
          setValue("experience", value);
        }}
      >
        <FormControlLabel
          value="Beginner"
          control={<Radio />}
          label="Beginner"
        />
        <FormControlLabel
          value="Intermediate"
          control={<Radio />}
          label="Intermediate"
        />
        <FormControlLabel
          value="Advanced"
          control={<Radio />}
          label="Advanced"
        />
        <FormControlLabel value="Expert" control={<Radio />} label="Expert" />
      </RadioGroup>
      <FormLabel id="demo-radio-buttons-group-label">
        Minimum Education Level
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        onChange={(data: any) => {
          const value = data.target.getAttribute("value");
          setValue("educationLevel", value);
        }}
      >
        <FormControlLabel
          value="Highschool"
          control={<Radio />}
          label="Highschool"
        />
        <FormControlLabel
          value="Bachelor"
          control={<Radio />}
          label="Bachelor"
        />
        <FormControlLabel value="Master" control={<Radio />} label="Master" />
        <FormControlLabel value="PhD" control={<Radio />} label="PhD" />
      </RadioGroup>
    </FormControl>
  );
};

export default JobInfo;
