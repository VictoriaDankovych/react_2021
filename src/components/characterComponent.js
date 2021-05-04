function CharacterComponent(props) {
    return <div  >
        <img
            src={props.image} alt=""/>
   <p>
        {props.description}
    </p>

    </div>
}
export default CharacterComponent;