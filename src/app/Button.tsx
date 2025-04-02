// "use client";

// import { useState } from "react";

// export default function LikeButton() {
//   const [likes, setLikes] = useState(0);

//   function handleClick() {
//     setLikes(likes + 1);
//   }

//   return <button onClick={handleClick}>Like ({likes})</button>;
// }

import React from "react";
import { Button, Flex } from "antd";

const App: React.FC = () => (
  <Flex gap="small" wrap>
    <Button type="primary">Primary Button</Button>
  </Flex>
);

export default App;
