import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {clearSearchBook, putBook, searchBook} from "../store/actions/actionBook";
import CardBook from "../component/CardBook";
import {options} from "../config";

const Search = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState({query: ''})
    const {searchBooks, books} = useSelector(state => state.book)

    useEffect(() => {
        // other code
        if (state.query){
            dispatch(searchBook(state))
        }
        return function () {
            dispatch(clearSearchBook())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])

    const obj = {}
    books.forEach(el => {
        obj[el.id] = el.shelf
    })

    const changeHandler = e => setState(prevState => ({...prevState, query: e.target.value}))
    const handlerSelect = (e, id) => dispatch(putBook(id, {shelf: e.target.value}))
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <div className="search-books-input-wrapper">
                    <input type="text"
                           value={state.query}
                           onChange={changeHandler}
                           placeholder="Search by title or author"/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {searchBooks.error ? 'Empty' : searchBooks.map(el => {
                        return <CardBook key={el.id}
                                         infoForSearch={obj[el.id]}
                                         img={el?.imageLinks?.smallThumbnail}
                                         title={el.title}
                                         author={el.authors}
                                         handlerSelect={(e) => handlerSelect(e, el.id)}
                                         options={options}
                        />
                    })}
                </ol>
            </div>
        </div>
    );
};

export default Search;