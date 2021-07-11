import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch, faHome} from '@fortawesome/free-solid-svg-icons'
import {useHistory} from 'react-router-dom'

const Layout = ({children}) => {
    const [state, setState] = useState({
        pathTo: '/',
        icon: faSearch
    })
    const history = useHistory()
    useEffect(() => {
        // other code
        history.push(state.pathTo)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])

    const redirectTo = () => {
        const path = history.location.pathname
        const icon = path === '/' ? faHome : faSearch
        const pathTo = path === '/' ? '/search' : '/'
        setState(prev => ({...prev, pathTo, icon}))
    }

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <main className="container main">
                {children}
            </main>
            <div className="open-search">
                <button onClick={redirectTo}><FontAwesomeIcon icon={state.icon}/></button>
            </div>
        </div>
    );
};

export default Layout;