import React, { Fragment, useState } from "react";

const Section = ({ text, description, children }) => {
  const [hiddenDescription, setHideDescription] = useState(false);

  const onClickedDescription = () => {
    setHideDescription(!hiddenDescription);
  };
  return (
    <Fragment>
      <h3>
        {text}{" "}
        {hiddenDescription ? (
          <div onClick={onClickedDescription}> (... )</div>
        ) : (
          <></>
        )}
      </h3>
      <div
        hidden={hiddenDescription}
        onClick={onClickedDescription}
      >
        {description}
      </div>
      <div>{children}</div>
    </Fragment>
  );
};

export default Section;
