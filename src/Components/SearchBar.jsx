import { useEffect, useState } from "react";
import dataList from "./DataList";
import UserTile from "./UserTile";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState(dataList);

  const onUserClick = (id) => {
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          item.selection = true;
          console.log(item);
        }
        return item;
      });
    });
  };

  const onUserTileClick = (id) => {
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          item.selection = false;
        }
        return item;
      });
    });
  };

  const onInputClick = () => {
    setFlag(!flag);
  };

  const inputChange = (e) => {
    setFlag(true);
    setInput(e.target.value);
  };

  useEffect(() => {
    const lowercasedInput = input.toLowerCase();
    const searchedData =
      input.length === 0
        ? dataList
        : dataList.filter((item) =>
            item.name.toLowerCase().includes(lowercasedInput)
          );

    setData([...searchedData]);
    console.log(searchedData);
  }, [input]);
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-600 p-4">
        Choose a User:
      </label>
      <div className="px-4 flex flex-col items-center">
        <div className="border border-gray-300 w-2/3 flex flex-row  gap-1 flex-wrap p-2">
          {data.map((item, index) => {
            if (item.selection) {
              return (
                <div key={index}>
                  <UserTile
                    name={item.name}
                    selection={item.selection}
                    id={item.id}
                    onClick={() => onUserTileClick(item.id)}
                  />
                </div>
              );
            }
            return null;
          })}

          <input
            type="text"
            placeholder="Enter User"
            value={input}
            onChange={(e) => inputChange(e)}
            onClick={onInputClick}
            className="px-3 py-2 rounded-md focus:outline-none"
          />
        </div>

        {flag && (
          <div className="w-2/3 border-2 border-grey bg-slate-100 p-4 h-auto flex flex-row flex-wrap">
            {data.map((item, index) => {
              if (!item.selection) {
                return (
                  <div
                    key={index}
                    onClick={() => onUserClick(item.id)}
                    className="m-2 cursor-pointer">
                    <UserTile
                      name={item.name}
                      selection={item.selection}
                      id={item.id}
                      onClick={() => onUserTileClick(item.id)}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
