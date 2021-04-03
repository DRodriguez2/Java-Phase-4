import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
const Home = () => {
    return (
        <>
            <Row>
                <Col className="mt-5">
                    <Jumbotron className="mt-5 text-center">
                        <h1>Team Budget Planner</h1>
                        <p>
                            Select a a link from the navbar to get started
                        </p>
                    </Jumbotron>
                </Col>
            </Row>
        </>

    )
}

export default Home