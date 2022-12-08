import { useEffect, useState } from "react";
import "./GameBox.scss";

const GameBox: React.FC = () => {
	const [finalWord, setFinalWord] = useState("");

	useEffect(() => {
		const wordsList = require("word-list-json").filter((word: string) => word.length === 6);
		setFinalWord(wordsList[Math.floor(Math.random() * wordsList.length)]);
	}, []);

	return <>The final word is: {finalWord}</>;
};

export default GameBox;
