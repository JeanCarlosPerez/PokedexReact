import React from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Pagination = (props) =>{
    const {OnLeftClick, OnRightClick, Page, TotalPages} = props
    return(
        <div className="Pagination">
            <button className="botones" onClick={OnLeftClick}><FaArrowLeft /></button>
            <div>{Page} de {TotalPages}</div>
            <button className="botones" onClick={OnRightClick}><FaArrowRight /></button>
        </div>

    )
}

export default Pagination;