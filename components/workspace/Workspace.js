'use client'
import Split from "react-split";
import ProblemDesc from "../ProblemDesc";
import Playground from "./Playground";


const Workspace = ({ problems }) => {
	
	return (
		<Split className='split px-1 h-[92vh]' minSize={500}>
			<ProblemDesc problems={problems} />
			<Playground />
		</Split>
	);
}

export default Workspace
