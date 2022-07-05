import { Typography, TextField } from '@mui/material';

const FormInput = ({
  error,
  label,
  sxLabel,
  sxField,
  textFieldId,
  fieldType,
  placeholder,
}) => {
  return (
    <>
      <Typography sx={sxLabel}>{label}</Typography>
      <Typography
        color="error"
        sx={{ fontSize: '10px', display: error ? 'block' : 'none' }}
      >
        Please Enter {label}
      </Typography>
      <TextField
        id={textFieldId}
        type={fieldType}
        placeholder={placeholder}
        size="small"
        sx={sxField}
      />
    </>
  );
};

export default FormInput;
