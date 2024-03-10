import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import "./App.css"; // Importing Header.css

function App() {
  const [item, setItem] = useState([
    {
      id: 1,
      checked: false,
      name: "Do 30 minutes of yoga",
    },
    {
      id: 2,
      checked: false,
      name: "Run 3 kilometer",
    },
    {
      id: 3,
      checked: false,
      name: "Strength training session",
    },
  ]);
  const [newitem, setnewitm] = useState("");
  const [search, setSearch] = useState("");
  function addItm() {
    const id = item.length ? item[item.length - 1].id + 1 : 1;
    const nwitm = { id, checked: false, name: newitem };
    const ListItems = [...item, nwitm];
    setItem(ListItems);
    console.log(ListItems);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    addItm();
    setnewitm("");
  }
  function fun(id) {
    const curr = item.map((itm) =>
      itm.id === id ? { ...itm, checked: !itm.checked } : itm
    );
    setItem(curr);
  }
  function del(id) {
    const curr = item.filter((itm) => itm.id !== id);
    setItem(curr);
  }

  return (
    <div>
      <Header title1="TO DO LIST" />
      <AddItem
        newitem={newitem}
        setnewitm={setnewitm}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        item={item.filter((itm) =>
          itm.name.toLowerCase().includes(search.toLowerCase())
        )}
        fun={fun}
        del={del}
      />
      <Footer length={item.length} />
    </div>
  );
}

export default App;
