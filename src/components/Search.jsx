import { useState } from 'react';

function Search(props) {
    // cara biasa
    // let search = "";

    // cara hooks
    const [search, setSearch] = useState("");

    // const onSearchChange = (event) => {
    //     // console.log(event.target.value);
    //     // cara biasa
    //     // search = event.target.value;

    //     // cara hooks
    //     setSearch(event.target.value);
    //     props.onSearchChange(event.target.value);
    // }

    const onSearchChange = () => {
        props.onSearchChange(search);
    }

    const onKeyDown = e => {
        if (e.key === 'Enter') {
            onSearchChange();
        }
    }
    return (
        <>
            <div>
                Cari Artikel : <input type="text" onChange={(e) => setSearch(e.target.value)} onKeyDown={onKeyDown} placeholder="Search" />
                <button onClick={onSearchChange}>Cari</button>
            </div>
            <small>Ditemukan {props.totalPosts} data dengan pencarian kata : {search}</small>
        </>
    )
}

export default Search;