function Food() {
    const food1 = "macaroni";
    const food2 = "pizza";
    const food3 = "burger";

    return (
        <ul>
            <li>
                {food1}
                
            </li>
            <li>
                food2
            </li>
            <li>
                {food3.toUpperCase()}
            </li>
        </ul>
    );
}
export default Food;