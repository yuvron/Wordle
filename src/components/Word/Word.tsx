import "./Word.scss";

interface WordProps {
	finalWord: string;
}

const Word: React.FC<WordProps> = ({ finalWord }) => {
	return (
		<div className="word">
			<span className="letter"></span>
			<span className="letter"></span>
			<span className="letter"></span>
			<span className="letter"></span>
			<span className="letter"></span>
		</div>
	);
};

export default Word;
