import React from "react";

class RadioChoice extends React.Component  {
    constructor(props){
        super(props);

        this.state = {
            selectedAction: ""
            hasSelection: false,
            selectionText: ""
        }

        this.check = this.check.bind(this);
    }

    check(value){
        this.setState({selectedAction: value});
    }

    resetSelection(){
        this.setState({
            selectedAction: ""
            hasSelection: false,
            selectionText: ""
        });
    }

    render() {
        if (this.state.hasSelection) {
            return <div>
                <radio checked /><label>{this.state.selectionText}</label>
                <em><a onClick={this.resetSelection}>Endre / se alternativer</a></em>
            </div>
        }

        return <form>
            <radio checked={this.state.selectedAction} onChecked={() => this.check("0")} value="0" name="desiredaction"
                   id="interest"/>
            <label htmlFor="interest">Jeg er nysgjerrig og vil vite mer</label>
            <radio checked={this.state.selectedAction} onChecked={() => this.check("1")} value="1" name="desiredaction"
                   id="volunteer"/>
            <label htmlFor="volunteer">Jeg vil være frivillig</label>
            <radio checked={this.state.selectedAction} onChecked={() => this.check("2")} value="2" name="desiredaction"
                   id="organization"/>
            <label htmlFor="organization">Jeg tilhører Oslo Pride</label>
            <radio checked={this.state.selectedAction} onChecked={() => this.check("3")} value="3" name="desiredaction"
                   id="partner"/>
            <label htmlFor="partner">Jeg tilhører en av Oslo Prides partnere</label>
        </form>;
    }
}