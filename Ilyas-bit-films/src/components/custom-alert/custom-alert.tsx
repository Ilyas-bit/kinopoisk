import { useState, useEffect } from "react";
import Alert, { AlertColor } from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Slide from "@mui/material/Slide";

interface CustomAlertsProps {
  type: AlertColor | undefined; // Используйте AlertColor или undefined
  text: string;
  duration?: number;
}

export function CustomAlerts({
  type,
  text,
  duration = 1000,
}: CustomAlertsProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <Stack
      sx={{
        position: "fixed",
        top: "6px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
      }}
      spacing={2}
    >
      <Slide direction="down" in={isVisible} mountOnEnter unmountOnExit>
        <Alert severity={type}>{text}</Alert>
      </Slide>
    </Stack>
  );
}
