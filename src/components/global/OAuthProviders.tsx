import { Facebook, GitHub, Google, Twitter } from "@mui/icons-material";
import { Grid } from "@mui/material";

export default function OAuthProviders() {
  return (
    <Grid container justifyContent="center" gap={1}>
      <Google color="inherit" />
      <GitHub color="inherit" />
      <Facebook color="inherit" />
      <Twitter color="inherit" />
    </Grid>
  );
}
