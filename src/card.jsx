import Pic from "./assets/mandala.png";

function Card() {
    return (
        <div className="card">
            <img src={Pic} alt="mandala" className="img" />
            <h2 className="rohit_bhadwa">Card Title</h2>
            <p className="rohit_bada_bhadwa">This is a description of the card content.</p>
        </div>
    )
}
export default Card;

/* .card {
border: 1px solid hsl(0,0%,80%);
border-radius: 5%;
box-shadow: 10px 10px 2px hsla(0,0%,0%,0.1);
padding: 5rem;
text-align: center;
max-width: 100px; 
height: auto;
margin: 5rem;
display: inline-block;
}

.img {
    max-width: 60%;
    height: auto;
    border-radius: 50%;
    box-shadow:  5px 5px 12px hsla(0,0%,0%,0.5);
}

.rohit_bhadwa {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 10px 0 0 0;
    color: hsla(171, 26%, 11%, 0.915);
}

.rohit_bada_bhadwa {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: hsl(0,0%,80%);

}*/