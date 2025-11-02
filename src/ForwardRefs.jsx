/*
import { forwardRef } from "react"

// before React19 this feature use
const ForwardRefs = (props, ref) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
}
export default forwardRef(ForwardRefs);

*/

const ForwardRefs = (props) => {
    return (
        <div>
            <input type="text" ref={props.ref}/>
        </div>
    )
}
export default ForwardRefs