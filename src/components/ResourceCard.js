import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import "./ResourceCard.css";
import Link from '@mui/material/Link';

const ResourceCard = ( data ) => {
  //console.log("from ResourceCard: data = ", data);

  return (
          <Card className="card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={data.resource.icon_url}
                alt="resource"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.resource.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.resource.category}
                </Typography>
                <Typography>
                  <Link href={data.resource.link}>{data.resource.link}</Link>
                </Typography>
                <Typography>
                  {data.resource.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
  );
};

export default ResourceCard;
