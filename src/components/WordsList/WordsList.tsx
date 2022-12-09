import { useEffect, useState } from "react";
import Word from "../Word/Word";
import "./WordsList.scss";

const WordsList: React.FC = () => {
	const [finalWord, setFinalWord] = useState("");
	const [currentWord, setCurrentWord] = useState(0);
	const [attemptsList, setAttemptsList] = useState(["", "", "", "", "", ""]);

	useEffect(() => {
		const words = require("word-list-json").filter((word: string) => word.length === 5);
		setFinalWord(words[Math.floor(Math.random() * words.length)]);
		console.log(finalWord);
	}, []);

	useEffect(() => {
		document.addEventListener("keypress", handleKeyPress);
		return () => {
			document.removeEventListener("keypress", handleKeyPress);
		};
	}, [attemptsList]);

	const handleKeyPress = (e: KeyboardEvent) => {
		if (currentWord === 6) return;
		const { key } = e;
		const newAttemptsList = [...attemptsList];
		newAttemptsList[currentWord] += key;
		if (newAttemptsList[currentWord].length === 5) setCurrentWord(currentWord + 1);
		setAttemptsList(newAttemptsList);
	};

	return (
		<div className="words-list">
			{attemptsList.map((attempt, index) => {
				return <Word key={index} finalWord={finalWord} currentText={attempt} />;
			})}
		</div>
	);
};

export default WordsList;
