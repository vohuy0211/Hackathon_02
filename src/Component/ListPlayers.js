import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
function ListPlayers({ state, setState, deleteNote }) {
    const handleMinus = (index) => {
        const updatedState = [...state];
        updatedState[index].count -= 1;
        setState(updatedState);
    };

    const handlePlus = (index) => {
        const updatedState = [...state];
        updatedState[index].count += 1;
        setState(updatedState);
    };
    if (state.length === 0) {
        alert("không còn người chơi ")
    }
    const maxScore = Math.max(...state.map((player) => player.count));
    return (
        <Container>
            {state.map((player, index) => (
                <div className="card mb-3" key={index}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                                <div>
                                    <button onClick={() => deleteNote(index)}><i className="fa-solid fa-xmark"></i></button>
                                    <i className={`fa-solid fa-crown ${player.count === maxScore ? 'text-danger' : 'red'
                                        }`}
                                    ></i>
                                </div>
                                <div className="ms-3">
                                    <h5>{player.name}</h5>
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                                <div style={{ width: '50px' }}>
                                    <button onClick={() => handleMinus(index)}><i className="fa-solid fa-minus"></i></button>
                                </div>
                                <div style={{ width: '80px' }}>
                                    <h5 className="mb-0">{player.count}</h5>
                                </div>
                                <button onClick={() => handlePlus(index)}><i className="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Container>
    )

}



export default ListPlayers;