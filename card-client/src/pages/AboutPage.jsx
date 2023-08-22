import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  return (
    <Container>
      <PageHeader
        title="About Us"
        subtitle="A short explanation of our site"
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} alignSelf="center">
          
        <Typography fontSize={20} padding={2}>Welcome to <strong>BusinessPages</strong> - Your Gateway to Professional Identity!
        <br/><br />
        At BusinessPages, we believe that a business card is not just a piece of paper; it's a powerful representation of your brand,
        a tangible connection to potential clients, and an essential tool in today's competitive business landscape. We are your one-stop destination for creating stunning and impactful business cards that speak volumes about your professionalism and expertise.
        <br/><br />
        Who We Are:
        At BusinessPages, we are a team of creative designers, tech enthusiasts, and marketing experts passionate about helping
        professionals and businesses stand out from the crowd. We understand the significance of a well-designed business card,
        and our mission is to empower you with the tools to leave a lasting impression on your contacts.</Typography>

        </Grid>
        <Grid
          item
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "right" }}
        >
          <img src="/assets/images/card.jpg" alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
}
