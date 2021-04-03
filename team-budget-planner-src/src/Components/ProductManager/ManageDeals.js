import Table from 'react-bootstrap/Table'
import { useState } from 'react'
import Deal from './Deal'
import AddDeal from './AddDeal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ManageDeals = () => {

    const [deals, setDeals] = useState([
        {
            number: '1',
            vendor: 'Apple',
            type: 'Fix',
            description: 'Refactoring iPhone products'
        },
        {
            number: '2',
            vendor: 'Microsoft',
            type: 'Testing',
            description: 'Unit Testing Microsoft Office Products'
        },
        {
            number: '3',
            vendor: 'Google',
            type: 'Data',
            description: 'Visualizing Data'
        }

    ])

    const addDeal = (deal) => {
        const number = Math.floor(Math.random() * 10000) + 1;
        const newDeal = { number, ...deal }
        setDeals([...deals, newDeal]);
    }

    const editDeal = (updatedDeal) => {
        let update = [...deals]
        update[update.findIndex((deal) => deal.number === updatedDeal.number)] = updatedDeal
        setDeals(update)
    }

    const deleteDeal = (number) => {
        setDeals(deals.filter((deal) => deal.number !== number))
    }

    return (
        <>
            <Row className="mt-5 text-center">
                <Col>
                    <h2>Manage Deals</h2>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col sm={7} className="mt-3">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Deal No.</th>
                                <th>Associated Vendor</th>
                                <th>Deal Type</th>
                                <th>Deal Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {deals.map((deal) => (
                                <Deal key={deal.number} deal={deal} editDeal={editDeal} deleteDeal={deleteDeal} />
                            ))}
                        </tbody>
                    </Table>
                </Col>
                <Col></Col>
            </Row>
            <AddDeal addDeal={addDeal} />
        </>
    )
}

export default ManageDeals