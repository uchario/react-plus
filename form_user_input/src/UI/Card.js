const Card = (props) => {
    return (
        <div className={`${props.card} ${props.className}`}>{props.children}</div>
    );
};

export default Card;