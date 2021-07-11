import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getBooks, putBook} from "../store/actions/actionBook";
import CardBook from "../component/CardBook";
import {options} from "../config";

const Home = () => {
        const dispatch = useDispatch()
        const {books} = useSelector(state => state.book)

        useEffect(() => {
            // other code
            dispatch(getBooks())
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

    const handlerSelect = (e, id) => dispatch(putBook(id, {shelf: e.target.value}))
        const categoryCard = (title, type) => {
            return <>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{title}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {books.filter(e => e.shelf === type).map(el => {
                                return <CardBook key={el.id}
                                                 type={type}
                                                 handlerSelect={(e) => handlerSelect(e, el.id)}
                                                 img={el.imageLinks.smallThumbnail}
                                                 title={el.title}
                                                 author={el.authors}
                                                 options={options}
                                />
                            })}
                        </ol>
                    </div>
                </div>
            </>
        }

        return (
            <div className="list-books-content">
                {categoryCard('Read', 'read')}
                {categoryCard('Currently reading', 'currentlyReading')}
                {categoryCard('Want to read', 'wantToRead')}
            </div>
        );
    }
;

export default Home;