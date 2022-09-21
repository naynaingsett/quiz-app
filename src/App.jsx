import { useState } from 'react';
import './App.css';
import kitten from './kitten.jpg';
import puppy from './puppy.jpg';
import {
	BsHeartFill,
	BsQuestion,
} from 'react-icons/bs';
function App() {
	const [result1, setResult1] = useState('0');
	const [result2, setResult2] = useState('0');
	const [result, setResult] = useState('0');
	const [click1, setClick1] = useState(false);
	const [click2, setClick2] = useState(false);
	const [que1, setque1] = useState(false);
	const [que2, setque2] = useState(false);
	const [submit, setSubmit] = useState(false);
	const [start, setStart] = useState(false);
	const plusone = () => {
		setResult1(1);
	};
	const plustwo = () => {
		setResult1(2);
	};
	const plusthree = () => {
		setResult2(1);
	};
	const plusfour = () => {
		setResult2(2);
	};

	const getresult = () => {
		setResult(result1 + result2);
	};

	return (
		<>
			<div className='hero-container'>
				<BsQuestion className='question-mark' />
				<p className='disclaimer'>
					Best user experience on large screens
				</p>
				<div className='hero-info'>
					<h1 className='hero-header'>
						Your New
						<br /> Best Friend
					</h1>
					<p className='hero-p'>
						Life's tough enough without a best
						friend. If by chance you're navigating
						through a forest without one, it might
						even be perilous.
					</p>
					<div className='info'>
						<h3>
							A quiz to find your perfect forest
							paring.
						</h3>
						<p>(And keep yourself safe.)</p>
					</div>

					<a href='#question1'>
						<button
							className='btn'
							onClick={() => setStart(true)}
						>
							Let's get started
						</button>
					</a>
				</div>
			</div>
			{start && (
				<div
					className='que-container que1'
					id='question1'
				>
					<div className='no'>
						<h1>1.</h1>
					</div>
					<div>
						<h1>
							Which diet is more similar to yours?
						</h1>
						<label className='container'>
							Meat. Delicious meat.
							<input
								type='radio'
								name='1'
								onClick={() => {
									plusone();
									setque1(true);
								}}
							/>
							<span className='checkmark'></span>
						</label>
						<label className='container'>
							I'm vegan.
							<input
								type='radio'
								name='1'
								onClick={() => {
									plustwo();
									setque1(true);
								}}
							/>
							<span className='checkmark'></span>
						</label>

						{que1 && (
							<a href='#question2'>
								<button
									onClick={() => setClick1(true)}
									className='btn'
								>
									Next
								</button>
							</a>
						)}
					</div>
				</div>
			)}
			{click1 && (
				<div
					className='que-container que2'
					id='question2'
				>
					<div className='no'>
						<h1>2.</h1>
					</div>
					<div>
						<h1>
							You are at a party. What would you
							do?
						</h1>
						<label className='container'>
							Live your life to the fullest and
							enjoy the party!
							<input
								type='radio'
								name='2'
								onClick={() => {
									plusthree();
									setque2(true);
								}}
							/>
							<span className='checkmark'></span>
						</label>
						<label className='container'>
							Chill at the corner of the room
							<input
								type='radio'
								name='2'
								onClick={() => {
									plusfour();
									setque2(true);
								}}
							/>
							<span className='checkmark'></span>
						</label>

						{que2 && (
							<a href='#confirm'>
								<button
									onClick={() => setClick2(true)}
									className='btn'
								>
									Next
								</button>
							</a>
						)}
					</div>
				</div>
			)}
			{click1 && click2 && (
				<div
					className='que-container confirm'
					id='confirm'
				>
					<h1
						style={{
							maxWidth: '350px',
							lineHeight: '3rem',
							fontSize: '2rem',
							fontFamily: 'Bitter,sans-serif',
						}}
					>
						Ready to meet your new little friend?
					</h1>
					<a href='#answer'>
						<button
							onClick={() => {
								getresult();
								setSubmit(true);
							}}
							className='btn submit'
						>
							Yes, please!
						</button>
					</a>
				</div>
			)}
			{submit && (
				<div id='answer'>
					{result === 3 ? (
						<div className='ans-container'>
							<p>Your new friend is</p>
							<h1>Kitten</h1>
							<img
								src={kitten}
								alt='kitten'
								className='pic'
							/>
						</div>
					) : result === 2 || 4 ? (
						<div className='ans-container'>
							<h6>Your new little friend is</h6>
							<h1>Puppy</h1>
							<img
								src={puppy}
								alt='puppy'
								className='pic'
							/>
						</div>
					) : (
						'error'
					)}
				</div>
			)}
			{submit && (
				<div>
					<div className='restart'>
						<h1>
							One can never have enough friends,
							so...
						</h1>
						<button
							className='btn restart-btn'
							onClick={() => {
								setResult1(0);
								setResult2(0);
								setClick1(false);
								setClick2(false);
								setResult(0);
								setque1(false);
								setque2(false);
								setSubmit(false);
								setStart(false);
							}}
						>
							Let's go again!
						</button>
					</div>
					<div className='footer'>
						<p>
							Designed and hand-coded with{' '}
							<BsHeartFill
								style={{
									fontSize: '.9rem',
								}}
							/>{' '}
							by{' '}
							<a href='https://www.linkedin.com/in/nay-naing-sett-1623592441'>
								<span className='name'>
									Nay Naing Sett
								</span>
							</a>
						</p>
					</div>
				</div>
			)}
		</>
	);
}

export default App;
