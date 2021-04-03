
import Table from 'react-bootstrap/Table'
import { useState } from 'react'
import Finance from './Finance'
import AddFinance from './AddFinance'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const ManageFinances = () => {

  const [finances, setFinances] = useState([
    {
      number: '1',
      amount: '1000.00',
      billingCycle: 'Annual',
      budget: '50000.00'
    },
    {
      number: '2',
      amount: '500.00',
      billingCycle: 'Semi-Annual',
      budget: '10000.00'
    },
    {
      number: '3',
      amount: '2000.00',
      billingCycle: 'Monthly',
      budget: '75000.00'
    }
  ])

  const addFinance = (finance) => {
    const number = Math.floor(Math.random() * 10000) + 1;
    const newFinance = { number, ...finance }
    setFinances([...finances, newFinance]);
  }

  const editFinance = (updatedFinance) => {
    let update = [...finances]
    update[update.findIndex((finance) => finance.number === updatedFinance.number)] = updatedFinance
    setFinances(update)
  }

  const deleteFinance = (number) => {
    setFinances(finances.filter((finance) => finance.number !== number))
  }

  return (
    <>

      <Row className="mt-5 text-center">
        <Col>
          <h2>Manage Finances</h2>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col sm={7} className="mt-3">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Transaction No.</th>
                <th>Transaction Amount</th>
                <th>Billing Cycle</th>
                <th>Alloted Budget</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {finances.map((finance) => (
                <Finance key={finance.number} finance={finance} editFinance={editFinance} deleteFinance={deleteFinance} />
              ))}
            </tbody>
          </Table>
        </Col>
        <Col></Col>
      </Row>
      <AddFinance addFinance={addFinance} />
    </>
  )
}

export default ManageFinances