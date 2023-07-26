import propTypes from 'prop-types'
const Props=({name,age})=>{
    return(
        <div>
            <h1>hi props</h1>
            <h2>{name}</h2>
            <h2>{age}</h2>
        </div>
    )
}

Props.propTypes={
    name:propTypes.string,
    age:propTypes.number
}

export default Props;