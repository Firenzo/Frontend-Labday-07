import React from "react";
import { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { setTimeout } from "timers/promises";

// import { Nav, PageBody } from "../styles"

export type SubjectSearchPorps = {
  items: {
    name: string;
    id: number;
  }[];
  isOpen: boolean;
  subject: string;
  field: string;
  language: string;
};

export type Item = {
  name: string;
  id: number;
};

export const SubjectSearch = ({
  items,
  subject,
  field,
  language,
}: SubjectSearchPorps) => {
  const [result, setResult] = useState<Array<string>>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOnSelect = (item: Item) => {
    setResult([...result, item.name]);
  };

  const formatResult = (item: Item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };

  const deleteItem = (item: string) => {
    const newResult = result.filter((data) => data !== item);
    setResult(newResult);
  };

  const save = async () => {
    await fetch("/api/field", {
      body: JSON.stringify({
        fieldName: field,
        language: language,
        value: result,
      }),
      method: "PUT",
    });

    setIsOpen(false);
  };

  return (
    <>
      {isOpen ? (
        <div style={{ width: 631 }}>
          <ReactSearchAutocomplete
            items={items}
            onSelect={handleOnSelect}
            autoFocus
            formatResult={formatResult}
            showIcon={false}
            styling={{
              height: "34px",
              border: "1px solid darkgreen",
              borderRadius: "4px",
              backgroundColor: "white",
              boxShadow: "none",
              hoverBackgroundColor: "lightgreen",
              color: "darkgreen",
              fontSize: "16px",
              fontFamily: "arial",
              iconColor: "green",
              lineColor: "lightgreen",
              placeholderColor: "darkgreen",
              clearIconMargin: "3px 8px 0 0",
              zIndex: 2,
            }}
          />
          <div>
            {result.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    display: "block",
                    padding: "5px 0",
                    color: "#2977ff",
                  }}
                >
                  {item}
                </span>
                <span
                  onClick={() => deleteItem(item)}
                  style={{
                    color: "black",
                    padding: "5px 0",
                    cursor: "pointer",
                  }}
                >
                  X
                </span>
              </div>
            ))}
          </div>
          <button
            style={{
              margin: "10px 0",
              padding: "5px 0",
            }}
            onClick={save}
          >
            save
          </button>
        </div>
      ) : (
        <div>
          <button
            style={{
              margin: "15px 0",
            }}
            onClick={() => setIsOpen(true)}
          >
            Add {subject}
          </button>
          {result.map((item, index) => (
            <span
              key={index}
              style={{
                display: "block",
                padding: "5px 0",
                color: "#2977ff",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default SubjectSearch;
