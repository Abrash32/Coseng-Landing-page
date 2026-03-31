import Link from "next/link";
import classes from "./engagements.module.css";
import Image from "next/image";
export default function ProductEngagements() {
  const productEngagements = {
    caption: "Unique Photography Experiences",
    heading:
      "Capture Timeless Moments with Our Professional Photography Services",
    articles: [
      {
        title: "Group Photography Sessions",
        content:
          "Strengthen bonds with fun, creative photo shoots designed for groups, families, and friends. Whether it's a reunion, celebration, or just a casual get-together, we create lasting memories through professional photography.",
        image: "/photography/images/image5.jpg",
        // link: "/photography/book",
        cta: "Book Session",
      },
      {
        title: "Advanced Photography Techniques",
        content:
          "Explore the latest in photography equipment and techniques. From drone photography to high-definition portraits, our cutting-edge approach ensures every shot is as unique as you are.",
        image: "/photography/images/image6.jpg",
        // link: "/photography/book",
        cta: "Work with us",
      },
      {
        title: "Personalized Photography Experiences",
        content:
          "Step into custom-designed photo shoots that reflect your style and personality. Whether it's a themed session or a special event, we ensure your photos are as unforgettable as the experience.",
        image: "/photography/images/image7.jpg",
        // link: "/photography/book",
        cta: "Book Session",
      },
    ],
  };
  return (
    <div className={classes.productEngagements}>
      <div className={classes.header}>
        <p>{productEngagements.caption}</p>
        <h1>{productEngagements.heading}</h1>
      </div>
      <ul className={classes.engamenentContents}>
        {productEngagements.articles.map((article) => {
          return (
            <li key={article.title}>
              <div className={classes.aboutImage}>
                <Image src={article.image} fill alt={article.title} />
              </div>
              <div className={classes.engagementBottom}>
                <h2>{article.title}</h2>
                <p>{article.content}</p>
                {/* <Link href={article.link}>{article.cta}</Link> */}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
