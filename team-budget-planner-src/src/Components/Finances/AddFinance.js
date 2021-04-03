import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const AddFinance = ({ addFinance }) => {

    const [amount, setAmount] = useState('')
    const [billingCycle, setBillingCycle] = useState('')
    const [budget, setBudget] = useState('')

    const formSubmit = (e) => {
        e.preventDefault()
        addFinance({ amount, billingCycle, budget })

        setAmount('')
        setBillingCycle('')
        setBudget('')
    }

    return (
        <>
            <Container fluid className="mt-3">
                <Row>
                    <Col></Col>
                    <Col>
                        <Form onSubmit={formSubmit}>
                            <Form.Group>
                                <Form.Label>Transaction Amount:</Form.Label>
                                <Form.Control type="text" value={amount} placeholder="Enter amount" onChange={(e) => setAmount(e.target.value)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Select a billing cycle:</Form.Label>
                                <Form.Control as="select" value={billingCycle} onChange={(e) => setBillingCycle(e.target.value)}>
                                    <option>Annual</option>
                                    <option>Semi Annual</option>
                                    <option>Monthly</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Enter budget:</Form.Label>
                                <Form.Control type="text" value={budget} placeholder="Enter budget" onChange={(e) => setBudget(e.target.value)} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Add Finance
                </Button>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>


        </>
    )
}

export default AddFinance