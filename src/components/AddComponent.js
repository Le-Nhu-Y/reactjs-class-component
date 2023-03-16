import { Component } from "react";
class AddComponent extends Component{
    render (){
        return(
            <h1>
                Total: {
                    this.props.firsNumber + this.props.secondNumber
                }
            </h1>
        )
    }
}

export default AddComponent;