import EnemyPoke from "./EnemyPoke";
import Backpack from "./Backpack";

function ChoosePoke(props) {



    return (
        <div>
            <div>
                {/* <EnemyPoke /> */}
                {/* <PlayersPoke /> */}
            </div>
            <div>
                <Backpack />
            </div>
            <button>Start the fight</button>
        </div>
    );
}

export default ChoosePoke;