// let guest =0
const ComponentPureInReact = () => {
    return (
        <>
            <h1>Keeping Component Pure in React js</h1>
            <Counter count={ 1 } />
            <Counter count={ 2 }/>
            <Counter count={3} />
            <Tea guest ={1} />
            <Tea guest ={3} />
            <Tea guest ={5} />
        </>
    )

}
const Counter = ({count}) => {
        return <h1>Counter {count}</h1>
}

const Tea = ({ guest }) => {
    // guest = guest+1
    return (
        <h1>We have {guest } guest and we have to make { guest} cup of tea</h1>
    )
}

export default ComponentPureInReact;