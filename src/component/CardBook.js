import React from 'react';

const CardBook = ({img, title, author, options, type, handlerSelect, infoForSearch}) => {
    return (
        <li>
            <div className="book">
                {infoForSearch && <div className="disabled">{infoForSearch}</div>}
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${img})`
                        }}
                    />
                    {options && !infoForSearch &&
                    <div className="book-shelf-changer">
                        <select placeholder="More..." value={type} onChange={handlerSelect}>
                            {!type && <option value="">More...</option>}
                            {options.map(el => {
                                return <option value={el.value}
                                               disabled={el.value === type}
                                               key={el.value}>{el.text}
                                </option>
                            })}
                        </select>
                    </div>}
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{author && author.join(',')}</div>
            </div>
        </li>
    );
};

export default CardBook;