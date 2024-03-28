import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Skeleton from "@mui/material/Skeleton";
import * as React from "react";

export default function PostSkeleton() {
  return (
    <Card sx={{ my: 2 }}>
      <CardHeader
        avatar={
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        }
        title={
          <Skeleton
            animation="wave"
            height={20}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        }
        subheader={<Skeleton animation="wave" height={20} width="40%" />}
      />
      <Skeleton sx={{ height: 300 }} animation="wave" variant="rectangular" />
      <CardContent>
        <React.Fragment>
          <Skeleton animation="wave" height={20} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={20} width="80%" />
        </React.Fragment>
      </CardContent>
    </Card>
  );
}
