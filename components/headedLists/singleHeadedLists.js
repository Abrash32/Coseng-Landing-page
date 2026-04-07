export default function SingleHeadedLists({ lists, type }) {
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        marginTop: "0.5rem",
      }}
    >
      {lists.map((list) => (
        <li
          key={list}
          className={`generalList ${
            type === "highlights" ? "highlightsGeneralList" : ""
          }`}
        >
          {list}{" "}
        </li>
      ))}
    </ul>
  );
}
