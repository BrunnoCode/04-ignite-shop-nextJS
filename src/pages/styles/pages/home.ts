import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  gap: "3rem",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  marginLeft: "auto",
  minHeight: 656,
});

export const Product = styled("a", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  cursor: "poiter",
  position: "relative",

  display: "flex",
  placeItems: "center",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",
    background: "rgba(0, 0, 0, 0.6)",
    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    strong: {
      fontSize: "$lg",
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },
  },
});
