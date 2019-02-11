import React from "react";

export default function List(props) {
	return (
		<ul>
			{props.items.map(item => {
				return (
					<li key={item.id}>
						<span
							style={{
								textDecoration: item.complete ? "line-through" : "none"
							}}
							onClick={() => props.toggle && props.toggle(item.id)}
						>
							{item.name}
						</span>
						<button onClick={() => props.remove(item)}>X</button>
					</li>
				);
			})}
		</ul>
	);
}
