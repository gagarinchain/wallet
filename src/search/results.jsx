import React, {PureComponent} from "react";
import {AccountContainer} from "../account/account-container";
import {BlockInfoContainer} from "../explorer/block-info-container";

export class Results extends PureComponent {
    render() {
            if (this.props.res == null) {
                return <div>Loading</div>
            }
            if (this.props.res.id == null) {
                return <div>Not found</div>
            }
            if (this.props.res.type === "A") {
                console.log(this.props.res.id)
                return <AccountContainer id={this.props.res.id}/>
            }
            if (this.props.res.type === "B") {
                return <BlockInfoContainer id={this.props.res.id}/>
            }

            return null;
    }
}