import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

interface JobInfoProps {
  handleExperienceChange: (data: any) => void;
  handleEducationChange: (data: any) => void;
}

const JobInfo: React.FC<JobInfoProps> = function ({
  handleEducationChange,
  handleExperienceChange,
}) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Experience</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="beginner"
        name="radio-buttons-group"
        onChange={(data) => {
          handleExperienceChange(data);
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
        defaultValue="Bachelor"
        name="radio-buttons-group"
        onChange={(data) => {
          handleEducationChange(data);
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
