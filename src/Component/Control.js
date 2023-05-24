import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AutoLayoutSizingExample({ state }) {
    const calculateTotalPoints = () => {
        let totalPoints = 0;
        state.forEach((player) => {
            totalPoints += player.count;
        });
        return totalPoints;
    };
    return (
        <Container>
            <Row className='header'>
                <Col>
                    <div>
                        Players : {state.length}
                    </div>
                    <div>
                        Total Points : {calculateTotalPoints()}
                    </div>
                </Col>
                <Col xs={3}>
                    <h1>
                        Bảng điểm
                    </h1>
                </Col>
                <Col></Col>
            </Row>

        </Container>
    );
}

export default AutoLayoutSizingExample;