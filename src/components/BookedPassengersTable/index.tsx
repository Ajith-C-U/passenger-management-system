import { useCallback, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Container from '../DragAndDrop/DragAndDrop';
import update from 'immutability-helper'
import { Card } from '../DragAndDrop/Card';

export interface Item {
    id: number
    text: string
}

export interface ContainerState {
    cards: Item[]
}

function CustomTable1({ ...props }) {
    const { data } = props

    const [cards, setCards] = useState([data])

    useEffect(() => {
        setCards(data)
    }, [])

    console.log(cards,"dsad");
    
    


    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
        setCards((prevCards: Item[]) =>
            update(prevCards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevCards[dragIndex] as Item],
                ],
            }),
        )
    }, [])

    const renderCard = useCallback(
        (card: { id: number; text: string }, index: number) => {
            return (
                <Card
                    key={card.id}
                    index={index}
                    id={card.id}
                    text={card.text}
                    moveCard={moveCard}
                />
            )
        },
        [moveCard],
    )

    return (
        <DndProvider backend={HTML5Backend}>
            <Container />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Number Of Passengers</th>
                        <th>Class</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data: { id: number, startDate: string, endDate: string, numberofPassengers: string, chooseClass: string, action: any }) => {
                        return (
                            <>
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.startDate}</td>
                                    <td>{data.endDate}</td>
                                    <td>{data.numberofPassengers}</td>
                                    <td>{data.chooseClass}</td>
                                    <td>{data.action}</td>
                                </tr>
                            </>
                        )
                    })}

                </tbody>
            </Table>
        </DndProvider>
    );
}

export default CustomTable1;