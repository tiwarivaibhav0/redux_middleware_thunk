import { Frame, Loading } from "@shopify/polaris";
import React from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./connectProps";
import { fetchData } from "./redux/apiData/apiDataActions";

function FetchComp(props) {
  console.log(props);
  return (
    <>
      {props.loading && (
        <Frame>
          <Loading />
        </Frame>
      )}
      <div>
        <button onClick={() => props.dispatch(fetchData())}>Fetch</button>
      </div>
      <ul>
        {props.data.map((it, i) => (
          <li>{it.name}</li>
        ))}
      </ul>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchComp);
