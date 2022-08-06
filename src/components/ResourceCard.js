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

//component which renders a single card
const ResourceCard = ( data ) => {

  return (
          <Card className="card">
            <CardActionArea className="card-action">
              <CardMedia
                className="card-media"
                component="img"
                height="50"
                image={data.resource.icon_url}
                alt="resource"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {data.resource.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.resource.category}
                </Typography>
                <Typography>
                  <Link href={data.resource.link} target="_blank" rel="noopener">{data.resource.link}</Link>
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
