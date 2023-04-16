//import { Component } from "react";

import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({monsters}) => ( 
    <div className="card-list">
        {monsters && monsters.map((monster) => {      
            return <Card key={monster.id} monster={monster} />;
        })}
    </div>
);

// class CardList extends Component {   
//     render () {
//         console.log("Render from card list")
//         const {monsters} = this.props;

//         return (
//             <div className="card-list">
//                {monsters && monsters.map((monster) => {
//                     const {name, email, id} = monster;
                    
//                     return (
//                        <Card monster={monster} />
//                     )
//                     })}
//             </div>
//         )
//     }
// }

export default CardList;