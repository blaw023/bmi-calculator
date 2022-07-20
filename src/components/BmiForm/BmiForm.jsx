import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { bottomOutterBox } from './constants';
import '../App/App.css';

const initialValues = {
	weight: '',
	height: '',
	date: ''
}

const BmiForm = ({ change }) => {
	// What hook should we use here?
	// Use state to get user info from github

	//Use a useEffect hook to make api call to github. 
	// API: https://api.github.com/users/blaw023

	const handleChange = e => {
		let { value, name } = e.target;
		if (value > 999) {
			value = 999;
		}
		const date = new Date().toLocaleString().split(',')[0];
		// how do we keep track of state after a change happens?
	};

	const handleSubmit = () => {
		change(state);
		//Once a form is submitted, how do we reset the values?
	};

	return (
		<>
			<div className="row">
				<div className="col m6 s12">
					<label htmlFor="weight">Weight (in kg)</label>
					<input
						id="weight"
						name="weight"
						type="number"
						min="1"
						max="999"
						placeholder="50"
						value={state.weight}
						onChange={handleChange}
					/>
				</div>

				<div className="col m6 s12">
					<label htmlFor="height">Height (in cm)</label>
					<input
						id="height"
						name="height"
						type="number"
						min="1"
						max="999"
						placeholder="176"
						value={state.height}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="center">
				<button
					id="bmi-btn"
					className="calculate-btn"
					type="button"
					disabled={state.weight === '' || state.height === ''}
					onClick={handleSubmit}
				>
					Calculate BMI
				</button>
			</div>
		</>
	);
};

BmiForm.propTypes = {
	change: PropTypes.func.isRequired
};

export default BmiForm;
