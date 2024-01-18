import React, { useState } from 'react';
import "./Progress.css"
const ProgressBar = () => {
	const [activeIndex, setActiveIndex] = useState(0);

    const steps = [
        {
          index: 0,
          label: 'Step 1',
        },
        {
          index: 1,
          label: 'Step 2',
        },
        {
          index: 2,
          label: 'Step 3',
        },
        {
          index: 3,
          label: 'Step 4',
        }
      ];
      
     
	return (


	<div className="progress-container">
	  <ul className="progress-indicator">
      {steps.map((step) => (
        <li
          key={step.index}
          className={`
            progress-step
            ${activeIndex === step.index ? 'active' : 'inactive'}
            ${activeIndex > step.index ? 'complete' : 'incomplete'}
          `}
        >
          <span className="step-number">{step.index + 1}</span>
          <h3>{step.label}</h3>
        </li>
      ))}
    </ul>

    <div className="actions">
	    {activeIndex > 0 && (
	      <button
	        onClick={() => setActiveIndex(activeIndex - 1)}
	        className="progress-button prev"
	      >Previous Step</button>
	    )}
	    {activeIndex < (steps.length - 1) && (
	      <button
	        onClick={() => setActiveIndex(activeIndex + 1)}
	        className="progress-button next"
	      >Next Step</button>
	    )}
	  </div>
	</div>
);
	


}


export default ProgressBar;