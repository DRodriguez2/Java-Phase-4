import Vendor from './Vendor'
import AddVendor from './AddVendor'
import Table from 'react-bootstrap/Table'
import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ManageVendors = () => {


    const [vendors, setVendors] = useState([
        {
            id: '1',
            name: 'Apple',
            project: 'Apple Project'
        },
        {
            id: '2',
            name: 'Microsoft',
            project: 'Microsoft Project'
        },
        {
            id: '3',
            name: 'Google',
            project: 'Google Project'
        },
    ])

    const addVendor = (vendor) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newVendor = { id, ...vendor }
        setVendors([...vendors, newVendor]);
    }

    const editVendor = (updatedVendor) => {
        let update = [...vendors]
        update[update.findIndex((vendor) => vendor.id === updatedVendor.id)] = updatedVendor
        setVendors(update)
    }

    const deleteVendor = (id) => {
        setVendors(vendors.filter((vendor) => vendor.id !== id))
    }

    return (
        <>
            <Row className="mt-5 text-center">
                <Col>
                    <h2>Manage Vendors</h2>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col sm={7} className="mt-3">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID#</th>
                                <th>Vendor Name</th>
                                <th>Vendor Project</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vendors.map((vendor) => (
                                <Vendor key={vendor.id} vendor={vendor} editVendor={editVendor} deleteVendor={deleteVendor} />
                            ))}
                        </tbody>
                    </Table>
                </Col>
                <Col></Col>
            </Row>

            <AddVendor addVendor={addVendor} />
        </>
    )


}



export default ManageVendors