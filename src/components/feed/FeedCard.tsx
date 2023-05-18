import React from "react";
import { IFeed } from "@/typings/interfaces/feed.interface";

interface IProps {
  feedData: IFeed;
}

function FeedCard({ feedData }: IProps) {
  return (
    <div>
      <h1>{feedData.title}</h1>
      <p>{feedData.body}</p>
    </div>
  );
}

export default FeedCard;
