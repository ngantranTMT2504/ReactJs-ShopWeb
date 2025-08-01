
export const TableCustom = (props) => {
const {data = [], columns = [] , onEdit, onDelete} = props

  return (
     <table className="table table-bordered">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.title}</th>
          ))}

          <td className="fw-bold text-center">
            Action
          </td>
        </tr>

      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={columns.length} className="text-center">No data found</td>
          </tr>
        ) : (
          data.map((row) => (
            <tr key={row.id}>
              {columns.map((col) => (
                <td key={col.key}>{row[col.key]}</td>
              ))}
             <td className="text-center">
                <button
                  className="btn btn-sm btn-primary me-2"
                  onClick={() => onEdit(row.id)}
                >
                  <i className="bi bi-pencil-square"></i> Sửa
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => onDelete(row.id)}
                >
                  <i className="bi bi-trash"></i> Xóa
                </button>
              </td>
        
          </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
