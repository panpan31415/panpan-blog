import "./HistoryItem.scss";

type Item = {
  date: string;
  title: string;
  subtitle: string;
  descriptions: string[];
};
type HistoryItemProps = {
  item: Item;
};

export default function HistoryItem({ item }: HistoryItemProps) {
  return (
    <div className="history-item">
      <div className="history-item__date">{item.date}</div>
      <div className="history-item__title">{item.title}</div>
      <div className="history-item__subtitle">{item.subtitle}</div>
      <div className="history-item__description">
        <ul>
          {item.descriptions.map((description, index) => {
            if (description.includes(":")) {
              return (
                <li key={index}>
                  <span>{description.split(":")[0].trim()}:</span>{" "}
                  {description.split(":")[1].trim()}
                </li>
              );
            }
            return <li key={index}>{description}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
