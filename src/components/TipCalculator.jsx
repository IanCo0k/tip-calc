import React, { useState } from 'react';

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);

  const calculateTotal = () => {
    const bill = parseFloat(billAmount);
    const tip = (bill * parseFloat(tipPercentage)) / 100;
    const total = bill + tip;
    setTotalAmount(total.toFixed(2));
    setTipAmount(tip.toFixed(2));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-xl">
        <div className="flex flex-col items-center text-center mb-8">
          <h1 className="text-3xl font-bold text-purple-600">Tip Calculator</h1>
          <p className="text-gray-400">Select a tip percentage and enter the bill amount:</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setTipPercentage('10')}
            className={`p-4 text-white rounded ${
              tipPercentage === '10' ? 'bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            10%
          </button>
          <button
            onClick={() => setTipPercentage('15')}
            className={`p-4 text-white rounded ${
              tipPercentage === '15' ? 'bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            15%
          </button>
          <button
            onClick={() => setTipPercentage('20')}
            className={`p-4 text-white rounded ${
              tipPercentage === '20' ? 'bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            20%
          </button>
          <button
            onClick={() => setTipPercentage('25')}
            className={`p-4 text-white rounded ${
              tipPercentage === '25' ? 'bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            25%
          </button>
        </div>
        <div className="mt-8">
          <div className="flex items-center gap-4">
            <div className="rounded border border-gray-600 p-4 flex-grow">
              <label htmlFor="billAmount" className="text-gray-400">
                Bill Amount
              </label>
              <input
                type="text"
                id="billAmount"
                placeholder="Enter bill amount"
                value={billAmount}
                onChange={(e) => setBillAmount(e.target.value)}
                className="px-4 py-2 rounded border bg-gray-700 text-white w-full"
              />
            </div>
            <button
              onClick={calculateTotal}
              className="p-4 rounded bg-purple-600 text-white"
            >
              Calculate
            </button>
          </div>
          {totalAmount > 0 && (
            <div className="mt-8">
              <div className="rounded border border-gray-600 p-4">
                <div className="flex justify-between">
                  <p className="text-gray-400">Tip Amount:</p>
                  <h2 className="text-2xl font-bold text-purple-400">${tipAmount}</h2>
                </div>
                <div className="flex justify-between mt-4">
                  <p className="text-gray-400">Total Amount:</p>
                  <h2 className="text-2xl font-bold text-purple-400">${totalAmount}</h2>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;
