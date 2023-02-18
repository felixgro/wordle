import { FC, useEffect, useState } from 'react';
import Board from './Board';
import style from './Wordle.module.scss';

type WordleProps = {
	getSolution: () => string;
	maxTries?: number;
	word: string;
};

export enum GameState {
	PLAYING,
	WON,
	LOST,
	RESET
}

const Wordle: FC<WordleProps> = ({ word, getSolution, maxTries }) => {
	maxTries = maxTries || 6;
	const [gameState, setGameState] = useState(GameState.PLAYING);
	const [solution, setSolution] = useState(word);

	useEffect(() => {
		switch (gameState) {
			case GameState.WON:
				console.log('congrats!');
				break;
			case GameState.LOST:
				console.log('you lost... the word was: ' + solution);
				break;
			case GameState.RESET:
				setGameState(GameState.PLAYING);
				break;
		}
	}, [gameState, solution]);

	const enableReset = () => {
		window.addEventListener('keydown', (evt) => {
			if (evt.key !== 'Enter') return;
			setSolution(getSolution);
			setGameState(GameState.RESET);
		}, { once: true });
	}

	return (
		<main className={style.main}>
			<section className='grid-cell'>
				<div className={style.gameWrapper}>
					{gameState === GameState.RESET
						? <div></div>
						: <Board
							gameState={gameState}
							solution={solution}
							maxTries={maxTries}
							onWin={() => {
								setGameState(GameState.WON)
								enableReset();
							}}
							onLoose={() => {
								setGameState(GameState.LOST)
								enableReset()
							}}
						/>
					}

					{gameState === GameState.WON || gameState === GameState.LOST ?
						<div className={style.modal}>
							<h3>{gameState === GameState.WON ? 'You made it!' : 'Oops..'}</h3>
							{gameState === GameState.WON ? (
								<p>Press enter to play again</p>
							) : (
								<p>The word was <span>{solution}</span>.<br />Press Enter to try again.</p>
							)}

						</div>
						: null}
				</div>
			</section>
		</main>
	);
};

export default Wordle;
