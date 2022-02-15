import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 5px;
  padding: 5px 10px;
  background-color: ${(props) => props.theme.cardColor};
  margin-bottom: 5px;
`;

interface IDraggableProps {
  toDo: string;
  index: number;
}

function DraggableCard({ toDo, index }: IDraggableProps) {
  return (
    <Draggable draggableId={toDo} index={index} key={toDo}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);