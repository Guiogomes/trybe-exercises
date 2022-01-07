import React, { useState } from 'react';

import Sound from 'react-sound';
import FeelingGood from '../music/Feeling Good - Michael Buble (on screen).mp3';

export default (handleSongLoading,
		handleSongPlaying,
		handleSongFinishedPlaying
	) => {
	const [isPlaying, setIsPlaying ] = useState(false);
	return (
		<div>
			<Sound 
			url={FeelingGood}
			playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
			playFromPosition={1000}
			onLoading={handleSongLoading}
			onPlaying={handleSongPlaying}
			onFinishedPlaying={handleSongFinishedPlaying}
			/>
			<button onClick={()=> setIsPlaying(!isPlaying)}>
				{!isPlaying ? 'Play' : 'Stop'}
				</button>
		</div>
	)
}