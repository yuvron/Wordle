import "./Word.scss";

interface WordProps {
	finalWord: string;
	currentText: string;
}

const Word: React.FC<WordProps> = ({ finalWord, currentText }) => {
	return (
		<div className="word">
			{[...Array(5)].map((element, index) => {
				let outcome = "";
				if (finalWord) {
					if (currentText[index]) outcome = "wrong";
					if (finalWord.includes(currentText[index])) outcome = "part-correct";
					if (finalWord[index] === currentText[index]) outcome = "correct";
				}
				return (
					<span key={index} className={`letter ${outcome}`}>
						{currentText[index]}
					</span>
				);
			})}
		</div>
	);
};

export default Word;
