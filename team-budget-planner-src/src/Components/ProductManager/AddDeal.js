import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const AddDeal = ({ addDeal }) => {

    const [vendor, setVendor] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')

    const formSubmit = (e) => {
        e.preventDefault()
        addDeal({ vendor, type, description })

        setVendor('')
        setType('')
        setDescription('')
    }

    return (
        <>
            <Container fluid className="mt-3">
                <Row>
                    <Col></Col>
                    <Col>
                        <Form onSubmit={formSubmit}>
                            <Form.Group>
                                <Form.Label>Vendor associated with deal:</Form.Label>
                                <Form.Control type="text" value={vendor} placeholder="Enter Vendor Name" onChange={(e) => setVendor(e.target.value)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Deal Type:</Form.Label>
                                <Form.Control type="text" value={type} placeholder="Enter type" onChange={(e) => setType(e.target.value)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Deal Description:</Form.Label>
                                <Form.Control type="text" value={description} placeholder="Enter brief description:" onChange={(e) => setDescription(e.target.value)} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Add Deal
                             </Button>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

        </>
    )
}

export default AddDeal