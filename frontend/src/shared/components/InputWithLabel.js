import React from "react";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
});

const Label = styled("p")({
  color: "#b9bbbe",
  textTransform: "uppercase",
  fontWeight: "600",
});

const Input = styled("input")({
  flexGrow: 1,
  height: "40px",
  border: "none",
  borderRadius: "3px",
  color: "#dcddde",
  padding: "10px",
  background: "#1E1F22",
  margin: 0,
  boxSizing: "border-box",
  fontSize: "16px",
});

const InputWithLabel = (props) => {
  const { value, setValue, label, type, placeholder } = props;

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        value={value}
        onChange={handleValueChange}
        type={type}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default InputWithLabel;
