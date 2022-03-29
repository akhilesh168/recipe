import propType from "prop-types";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/core/CircularProgress";

export default function ButtonComponent(props) {
  const {
    title,
    variant,
    disabled = false,
    size,
    color,
    className,
    isLoading,
    ...others
  } = props;

  return (
    <Button
      {...others}
      variant={variant}
      disabled={disabled}
      size={size}
      color={color}
      className={className}
      title={title}
    >
      {isLoading ? <CircularProgress color="success" /> : null}
    </Button>
  );
}

ButtonComponent.propType = {};
