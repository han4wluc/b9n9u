import React from "react";
import "./Navigator.styles.css";
import FlexView from "../../../../primitives/FlexView";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
function Navigator(props = {}) {
  const { leftOnClick } = props;
  return (
    <FlexView className="navigator" justifyContentCenter>
      <FontAwesomeIcon onClick={leftOnClick} icon={faArrowLeft} />
    </FlexView>
  );
}

export default Navigator;
