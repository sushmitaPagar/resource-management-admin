import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ResourceCard.css";

const ResourceCard = ({ product, handleAddToCart }) => {
  return (
          <Card className="card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt="product"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${product.cost}
                </Typography>
                <Rating name="read-only" value={product.rating} readOnly />
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button fullWidth={true} color="primary" variant="contained" onClick={handleAddToCart}>
                <AddShoppingCartOutlined />ADD TO CART
              </Button>
            </CardActions>
          </Card>
  );
};

export default ResourceCard;
