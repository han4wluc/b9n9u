import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import "./CarouselBanner.styles.css";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import FlexView from "../../primitives/FlexView";

import Image from "../../primitives/Image";

function CarouselBanner(props) {
  const { games, onClickGame } = props;

  useEffect(() => {
    new Glide(".glide").mount();
  }, [0]);

  const items = [0, 1, 2].map(i => {
    const game = games[i];
    const handleClick = () => {
      onClickGame(game);
    };
    return (
      <li className="glide__slide carousel-item">
        {game ? (
          <Image
            onClick={handleClick}
            src={game.assets.banner.small}
            className="carousel-item-image"
          />
        ) : null}
      </li>
    );
  });

  return (
    <FlexView className="carousel-container">
      <div className="glide">
        <div data-glide-el="track" className="glide__track">
          <ul className="glide__slides">{items}</ul>
        </div>
      </div>
    </FlexView>
  );
}

export default CarouselBanner;
