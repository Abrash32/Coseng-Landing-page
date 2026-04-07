export default function HeadedLists({ lists, type }) {
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
          key={list.split(":")[0]}
          className={`generalList
            ${type === "highlights" ? "highlightsGeneralList" : ""}`}
        >
          <span style={{ fontWeight: "bold" }}>{list.split(":")[0]}:</span>{" "}
          <span>{list.split(":")[1]}</span>
        </li>
      ))}
    </ul>
  );
}
