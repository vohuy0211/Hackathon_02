
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
function Form({ addPlayer }) {
    const [player, setPlayer] = useState("")

    const handleInputPlayer = (e) => {
        setPlayer(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (player) {
            addPlayer(player);
            setPlayer("");
        }
    };
    return (
        <Container>
            <div className='formSubmit'>
                <form onSubmit={handleSubmit}>
                    <div className='ip-add'>
                        <input type='text' placeholder='Enter a players name'
                            value={player}
                            onChange={handleInputPlayer} />
                    </div>
                    <div className='btn-sm'>
                        <button type="submit">ADD PLAYER</button>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default Form;