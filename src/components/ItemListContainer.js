const ItemListContainer = ({greeting}) => {
    return (
        <div className="drawer drawer-end text-center py-4">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Capacitación virtual continua</label>
            </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80 text-base-content  bg-purple-600">
            <li><a className="text-white">Curso</a></li>
            <li><a className="text-white">Curso</a></li>
            <li><a className="text-white">Curso</a></li>
            <li><a className="text-white">Curso</a></li>
            <li><a className="text-white">Curso</a></li>
            <li><a className="text-white">Curso</a></li>
            <li><a className="text-white">Curso</a></li>
            </ul>
          </div>
        </div>
    )
}
export default ItemListContainer