import React, { useState,useEffect,useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from "./list.css"
import ThemeContext from '../contexts/ThemeContext';

const List = ({ items }) => {
    const { darkMode} = useContext(ThemeContext);

    const [list, setList] = useState([])

    useEffect(() => {
        const names = items.map(el => ({
            id: uuidv4(),
            name: el,
            addIndicat: false,
        }));
        setList(names);
    }, [items]);




    const handleClick = (id) => {
        setList(list.map(el => {
            if (el.id === id && !el.addIndicat) {
                return { ...el, name: "!!!" + el.name, addIndicat: true };
            }
            return el;
        }))
    }


    return (
        <>
            <ul className='ulList'>
                {
                    list.map(el => (
                        <li key={el.id} className={`${darkMode ? 'liList' : 'liListDark'}`}>
                            <p className="pList">{el.name}</p>
                            <button className={`${darkMode ? "buttonList" : "buttonListDark"}`} onClick={() => handleClick(el.id)}> +!!!</button>
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default List; 