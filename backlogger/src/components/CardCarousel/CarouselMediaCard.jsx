import React from "react";
import {Card, CardActionArea, CardMedia} from "@mui/material";
import PropTypes from "prop-types";
import Placeholder from "../../assets/elementor-placeholder-image.webp";

const CarouselMediaCard = ({image, title}) => (
  <div className="media-card">
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{width: 175, height: 250}}
          image={Placeholder}
          alt="green iguana"
        />
        <div className="media-title">{title}</div>
      </CardActionArea>
    </Card>
  </div>
  );

CarouselMediaCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default CarouselMediaCard;