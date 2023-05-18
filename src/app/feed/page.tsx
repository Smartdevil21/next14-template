import React from "react";
import Styles from "@/styles/pages/feed.module.scss";
import axios, { AxiosResponse } from "axios";
import FeedCard from "@/components/feed/FeedCard";
import { IFeed } from "@/typings/interfaces/feed.interface";

export default async function Feed() {
  const result: AxiosResponse<IFeed[]> = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(result.data);

  return (
    <div className={Styles.feed}>
      {result.data.map((ele, index) => {
        return <FeedCard key={index} feedData={ele} />;
      })}
    </div>
  );
}
