import classes from "./moreOnProduct.module.css";
import { GrFormCheckmark } from "react-icons/gr";

export default function MoreOnProduct() {
  const moreOnProduct = {
    caption: "Capture Unforgettable Moments",
    heading: "Explore Our Photography and Videography Services",
    articles: [
      {
        title: "Timeless Photography",
        content:
          "Our skilled photographers capture the essence of every moment, creating memories that last a lifetime.",
      },
      {
        title: "Professional Videography",
        content:
          "Relive the emotions and highlights of your event with our cinematic video productions.",
      },
      {
        title: "Live Streaming",
        content:
          "Broadcast your special moments to family and friends across the globe in real-time.",
      },
      {
        title: "Tailored Experiences",
        content:
          "Customized coverage options to meet the unique needs of every event, from intimate gatherings to large celebrations.",
      },
      {
        title: "High-Quality Equipment",
        content:
          "We use state-of-the-art cameras and technology to ensure premium quality images and videos.",
      },
      {
        title: "Dedicated Team",
        content:
          "Our passionate team is committed to delivering excellence, making every event memorable and stress-free.",
      },
    ],
  };

  return (
    <div className={classes.moreOnProduct}>
      <div className={classes.header}>
        <p>{moreOnProduct.caption}</p>
        <h1>{moreOnProduct.heading}</h1>
      </div>
      <ul className={classes.moreOnProductContents}>
        {moreOnProduct.articles.map((article) => {
          return (
            <li key={article.title}>
              <div className={classes.marker}>
                <h1>
                  <GrFormCheckmark />
                </h1>
              </div>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
