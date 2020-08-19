import React from 'react'

function Pagination({perPage,totalPost,paginate}) {
    const pageNumber = [];
    for(let i = 1;i<= Math.ceil(totalPost/perPage);i++){
        pageNumber.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumber.map(numb => (
                    <li key={numb} className="page-item">
                        <a href="#!" className="page-link" onClick={()=>paginate(numb)}>{numb}</a>
                    </li>
                ))}

            </ul>
        </nav>
    )
}

export default Pagination
