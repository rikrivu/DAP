import './Table.scss';
import '../../themes/customScroll.scss';
export default function TableContentWrapper(props: { tableDetail: {} | any }) {      
    return (
      <div className="fixTableHead app-scroll ml-2">
      <table>
          <thead className="table-header">
              <tr>
                  {
                      props.tableDetail.result.list.raw_summary[0].map(
                          (col: string, colIndex: number) =>
                          (
                              <th className="table-header-name" key={colIndex}>{col}</th>
                          ))
                  }
              </tr>
          </thead>
          <tbody>
              {
                  props.tableDetail.result.list.raw_summary.slice(1).map((row: {} | any, rowIndex: number) => (
                      <tr  key={rowIndex}>
                          {
                              row.map((col: string, colIndex: number) => (
                                  <td className="table-body-data" key={colIndex}>{col}</td>
                              )) 
                          }
                      </tr>
                  ))
              }
          </tbody>

  </table>
</div> 
        
    )
}

