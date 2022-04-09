import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

const style = {
  height: 20,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

export default function Scrool() {
  const [state, setState] = useState({
    items: Array.from({ length: 25 })
  });

  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      setState({
        items: state.items.concat(Array.from({ length: 20 }))
      });
    }, 1000);
  };

  return (
    <div>
      <h1>react-infinite-scroll-component</h1>
      <hr />
      <div id="scrollableDiv" style={{ height: 300, overflow: "auto" }}>
        <InfiniteScroll
          dataLength={state.items.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
        >
          {state.items.map((i, index) => (
            <div style={style} key={index}>
              div - #{index}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}
