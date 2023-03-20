import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  styled,
  Typography,
  Button,
} from "@mui/material";

export const CardBox = styled(Card)({
  width: 380,
  paddingTop: 20,
  paddingBottom: 36,
  borderRadius: "20px",
  boxShadow: "-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)",
  background:
    "linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)",
});

export const Header = styled(CardHeader)({
  padding: 0,
  paddingLeft: 20,
});

export const BackgroundImage = styled(CardMedia)({
  height: 168,
  width: 308,
  margin: "-14px auto 18px",
});

export const UserLine = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
  marginBottom: 62,
  height: "8px",
  backgroundColor: "#EBD8FF",
  boxShadow:
    "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF",
});

export const UserImage = styled(CardMedia)({
  width: 80,
  height: 80,
});

export const UserName = styled(Typography)({
  fontFamily: "Montserrat",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "1.2",
  textTransform: "uppercase",
  color: "#f8f8f8",
  textAlign: "center",
  marginBottom: "15px",
});
export const UserInfo = styled(Typography)({
  fontFamily: "Montserrat",
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "1.2",
  textTransform: "uppercase",
  color: "#ffffff",
  textAlign: "center",

  ":not(:last-of-type)": {
    marginBottom: "16px",
  },
  ":last-of-type": { marginBottom: "26px" },
});

export const FollowButton = styled(Button)(({ isfollowing }) => ({
  fontFamily: "Montserrat",
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "1.22",
  width: 196,
  backgroundColor: isfollowing ? "#5CD3A8" : "rgba(235, 216, 255, 1)",
  color: "#373737",
  padding: "14px",
  boxShadow: "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)",
  borderRadius: "10px",
  margin: "0 auto",
  ":hover, :focus": {
    backgroundColor: isfollowing ? "#FF4136" : "rgba(200, 170, 255, 1)",
  },
}));
