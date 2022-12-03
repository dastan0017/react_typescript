import React, { FC, useRef, useState } from 'react'

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>("")
    const [isDrag, setIsDrag] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("DRAGGING")
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
        console.log("Dropped")
    }

    return (
        <div>
            <input type="text" value={value} onChange={changeHandler} placeholder="Controllable" />
            <input type="text" placeholder="Uncontrollable" ref={inputRef} />

            <button onClick={clickHandler}>BUTTON</button>
            <div onDrag={dragHandler} draggable style={{ width: 200, height: 200, background: 'red' }}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                style={{ width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 15 }}>
            </div>
        </div>
    )
}

export default EventsExample