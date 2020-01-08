import React from "react";
import Profile from "../Components/Profile";

interface RegistrationFormProps {
    selectedAction: string,
    profile: any,
    onSelectAction(value: string): void
}

const RegistrationForm = (props: RegistrationFormProps) => {
    return <div>
        <div>
            <h1>Velkommen til Oslo Pride</h1>
            <h2>Hva kan vi hjelpe deg med?</h2>
            <form>
                <input type="radio" disabled checked={props.selectedAction === "0"}
                       onChecked={props.onSelectAction("0")} value="0"
                       name="desiredaction" id="interest" />
                <label htmlFor="interest">Jeg er nysgjerrig og vil vite mer</label>
                <input type="radio" disabled checked={props.selectedAction === "1"}
                       onChecked={props.onSelectAction("1")} value="1"
                       name="desiredaction" id="volunteer"/>
                <label htmlFor="volunteer">Jeg vil være frivillig</label>
                <input type="radio"  disabled checked={props.selectedAction==="2"}
                       onChecked={props.onSelectAction("2")} value="2"
                       name="desiredaction" id="organization" />
                <label htmlFor="organization">Jeg tilhører Oslo Pride</label>
                <input type="radio"  disabled checked={props.selectedAction==="3"}
                       onChecked={props.onSelectAction("3")} value="3"
                       name="desiredaction" id="partner" />
                <label htmlFor="partner">Jeg tilhører en av Oslo Prides partnere</label>
            </form>

            <div>
                <h3>Du er logget inn som</h3>
                <Profile {...props.profile} />
            </div>

        </div>
    </div>

};