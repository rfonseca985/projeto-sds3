import { SalePage } from "types/sale";

type Props = {
    page: SalePage;
    onePageChange: Function;
}

const Pagination = ( { page, onePageChange } : Props) => {

    return (
        <div className="row d-flex">
            <nav className="d-flex justify-content-center">
                <ul className="pagination">
                    <li className={`page-item ${page.first ? 'disabled' : ''} `}>
                        <button className="page-link" onClick={() => onePageChange(page.number - 1)} >Anterior</button>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">{page.number + 1}</span>
                    </li>
                    <li className={`page-item ${page.last ? 'disabled' : ''} `}>
                        <button className="page-link"onClick={() => onePageChange(page.number + 1)}>Próxima</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Pagination;