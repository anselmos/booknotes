import React, { Fragment, useState } from "react";

const Chapter = ({ title, children }) => {
  const [hidden, sethidden] = useState(false);

  const onClicked = () => {
    sethidden(!hidden);
  };
  return (
    <Fragment>
      <div hidden={hidden}>
        <h2 onClick={onClicked}>{title}</h2>
        {children}
      </div>
      {hidden ? (
        <h2
          hidden={!hidden}
          onClick={onClicked}
        >
          {title} (... )
        </h2>
      ) : (
        <></>
      )}
    </Fragment>
  );
};

export default Chapter;
