import React from 'react';
import NAVBAR from './navbar';
import SEARCHRESULTS from './searchresults';
//import SEARCHPAGINATION from './searchpagination';

export default class SEARCHPAGE extends React.Component{
	render(){
		return(
			<div>
				<NAVBAR  user = {this.props.user} />
				<div className="container content-contain">
					<div className="row">
						<div className="col-md-2">
						</div>
						<div className="col-md-7">
							<SEARCHRESULTS user={this.props.user} searchTerm={this.props.searchTerm}/>
							{/* <SEARCHPAGINATION /> */}
						</div>
						<div className="col-md-2 ">
						</div>
					</div>
				</div>
			</div>
		)
	}
}
