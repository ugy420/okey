import { useRef, useEffect } from "react";

export default function Details({show, onClose}){
    const dily = useRef(null);

    useEffect(() => {
        if(show){
            dily.current.showModal();
        }
        else{
            dily.current.close();
        }
    }, [show]);

    return (
      <dialog ref={dily}>
        <h1>Details</h1>
        <input type="text" placeholder="Enter your name" />
        <button onClick={() => {dily.current.close(); onClose()}}>Cancel</button>
      </dialog>
    );
}