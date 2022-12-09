import { useEffect, useState } from "react";
import Word from "../Word/Word";
import "./WordsList.scss";

const WordsList: React.FC = () => {
	const [finalWord, setFinalWord] = useState("");

	useEffect(() => {
		const words = require("word-list-json").filter((word: string) => word.length === 6);
		setFinalWord(words[Math.floor(Math.random() * words.length)]);
	}, []);

	return (
		<div className="words-list">
			<Word finalWord={finalWord} />
			<Word finalWord={finalWord} />
			<Word finalWord={finalWord} />
			<Word finalWord={finalWord} />
			<Word finalWord={finalWord} />
			<Word finalWord={finalWord} />
		</div>
	);
};

export default WordsList;
