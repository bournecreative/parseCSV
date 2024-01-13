import { useEffect, useState, useRef } from "react";
import styles from "./table.module.css";

interface CountryDebt {
  location: string;
  indicator: string;
  subject: string;
  time: string;
  value: string;
}

export const Table: React.FC = () => {
  const [data, setData] = useState<CountryDebt[]>();
  const [header, setHeader] = useState<string[]>();
  const isMounted = useRef(true);

  useEffect(() => {
    const getData = async () => {
      const result = await fetch("http://localhost:3000/")
        .then((res) => res.json())
        .then((csvData) => {
          const header = csvData.slice(0, 1);
          console.log(header);
          const content = csvData.slice(1, csvData.length);
          setHeader(header);
          setData(content);
        });
    };
    if (isMounted.current) {
      getData();
    }
    () => (isMounted.current = false);
  }, []);

  const tableHeader =
    header &&
    header.map((item, index) => {
      return (
        <tr key={item[0] + index}>
          <th>{item[0]}</th>
          <th>{item[1]}</th>
          <th>{item[2]}</th>
        </tr>
      );
    });

  const tableBody =
    data &&
    data.map((item, index) => {
      return (
        <tr key={item.subject + index}>
          <td>{item.location}</td>
          <td>{item.time}</td>
          <td>{parseInt(item.value).toFixed(2)}</td>
        </tr>
      );
    });
  return (
    <div>
      {
        <table className={styles.table}>
          <thead>{tableHeader}</thead>
          <tbody>{tableBody}</tbody>
        </table>
      }
    </div>
  );
};
