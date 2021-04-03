import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const AddVendor = ({ addVendor }) => {

    const [name, setName] = useState('')
    const [project, setProject] = useState('')

    const formSubmit = (e) => {
        e.preventDefault()
        addVendor({ name, project })

        setName('')
        setProject('')
    }

    return (
        <>
            <Container fluid className="mt-3">
                <Row>
                    <Col></Col>
                    <Col>
                        <Form onSubmit={formSubmit}>
                            <Form.Group>
                                <Form.Label>Vendor Name:</Form.Label>
                                <Form.Control type="text" value={name} placeholder="Enter Vendor Name" onChange={(e) => setName(e.target.value)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Vendor Project:</Form.Label>
                                <Form.Control type="text" value={project} placeholder="Enter Vendor Project" onChange={(e) => setProject(e.target.value)} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Add Vendor
                            </Button>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}

export default AddVendor