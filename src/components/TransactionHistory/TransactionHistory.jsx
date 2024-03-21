import './TransactionHistory.css';

const TransactionHistory = ({items}) => {
    return(
        <table className='table'>
  <thead>
    <tr>
      <th className='listName'>Type</th>
      <th className='listName'>Amount</th>
      <th className='listName'>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map((item) =>
        <tr key={item.id} className='listRow'>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
        </tr>
    )}
  </tbody>
</table>

    );
}

export default TransactionHistory;