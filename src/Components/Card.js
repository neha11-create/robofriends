import React from 'react';
// below lines are written in JSX they are not html 
const Card =(props) => {
	return(
               // this classname bg light and all are tachyons classes which are predefined and they are not css grow is for animation
			<div className=' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
				<img  alt='robot'src={`https://robohash.org/${props.id}?500*500`} />
				<div>
					<h2>{props.name}</h2>
					<p>{props.email} </p>
				</div>
			</div>
// because props is a js expression so we need to wrap it in a curly bracket otherwise it'll give error
	);
}
export default Card;