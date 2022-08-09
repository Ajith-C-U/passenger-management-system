import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionRemovePassenger } from "../../action";


const DragAndDropTable = (data: any) => {
    const dispatch = useDispatch<any>()

    const columnsFromBackend = {
        '1': {
            name: "First Class",
            items: data?.data?.filter((data: { chooseClass: string; }) => data?.chooseClass === "First Class")
        },
        '2': {
            name: "Business Class",
            items: data?.data?.filter((data: { chooseClass: string; }) => data?.chooseClass === "Business Class")
        },
        '3': {
            name: "Premium Economy",
            items: data?.data?.filter((data: { chooseClass: string; }) => data?.chooseClass === "Premium Economy")
        },
        '4': {
            name: "Economy Class",
            items: data?.data?.filter((data: { chooseClass: string; }) => data?.chooseClass === "Economy Class")
        },
        '5': {
            name: "Basic Economy",
            items: data?.data?.filter((data: { chooseClass: string; }) => data?.chooseClass === "Basic Economy")
        }
    };

    const [columns, setColumns] = useState(columnsFromBackend);


    const onDragEnd = (result: DropResult, columns: any, setColumns: any) => {
        if (!result.destination) return;
        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems,
                }
            });
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems
                }
            });
        }
    };


    const removeItem = (itemId: string, id: any) => {
        const newcolumns = { ...columns } as any;
        newcolumns[itemId].items = (newcolumns[itemId].items && newcolumns[itemId].items.filter((passenger: { id: any; }) => passenger.id !== id)) || []
        setColumns(newcolumns)
        dispatch(actionRemovePassenger(newcolumns))
    }



    return (
        <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
            <DragDropContext
                onDragEnd={result => onDragEnd(result, columns, setColumns)}
            >
                {Object.entries(columns).map(([columnId, column], index) => {
                    return (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}
                            key={columnId}
                        >
                            <h2>{column.name}</h2>
                            <div style={{ margin: 8 }}>
                                <Droppable droppableId={columnId} key={columnId}>
                                    {(provided, snapshot) => {
                                        return (
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                style={{
                                                    background: snapshot.isDraggingOver
                                                        ? "lightblue"
                                                        : "lightgrey",
                                                    padding: 4,
                                                    width: 250,
                                                    minHeight: 500
                                                }}
                                            >
                                                {column.items.map((item: any, index: number) => {
                                                    return (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={item.id}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => {
                                                                return (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={{
                                                                            userSelect: "none",
                                                                            padding: 16,
                                                                            margin: "0 0 8px 0",
                                                                            minHeight: "50px",
                                                                            backgroundColor: snapshot.isDragging
                                                                                ? "#263B4A"
                                                                                : "#456C86",
                                                                            color: "white",
                                                                            ...provided.draggableProps.style
                                                                        }}
                                                                    >
                                                                        <div>{item.startDate}</div>
                                                                        <div>{item.endDate}</div>
                                                                        <div>{item.numberofPassengers}</div>
                                                                        <div>{column.name}</div>
                                                                        <div className="d-flex">
                                                                        <div className="p-2 m-3">{item.action}</div>
                                                                        <Button className="p-2 m-4" onClick={() => removeItem(columnId, item.id)}>delete</Button>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            }}
                                                        </Draggable>
                                                    );
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        );
                                    }}
                                </Droppable>
                            </div>
                        </div>
                    );
                })}
            </DragDropContext>
        </div>
    );
}

export default DragAndDropTable;
