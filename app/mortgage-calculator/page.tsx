'use client';

import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


export default function MortgageCalculator() {
  // State for calculator inputs
  const [homePrice, setHomePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(80000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [zipCode, setZipCode] = useState('10001');
  const [propertyTaxes, setPropertyTaxes] = useState(4000);
  const [homeInsurance, setHomeInsurance] = useState(1200);
  const [hoaFees, setHoaFees] = useState(0);

  // Calculate derived values
  const loanAmount = homePrice - downPayment;
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  
  // Calculate monthly payment (Principal & Interest)
  const monthlyPI = loanAmount > 0 && monthlyInterestRate > 0 
    ? (loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments))) / 
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)
    : 0;

  // Calculate PMI (Private Mortgage Insurance) - typically 0.3% to 1.5% of loan amount annually if down payment < 20%
  const pmiRate = downPaymentPercent < 20 ? 0.005 : 0; // 0.5% annually
  const monthlyPMI = (loanAmount * pmiRate) / 12;

  // Calculate monthly taxes and insurance
  const monthlyTaxes = propertyTaxes / 12;
  const monthlyInsurance = homeInsurance / 12;
  const monthlyHOA = hoaFees;

  // Total monthly payment
  const totalMonthlyPayment = monthlyPI + monthlyPMI + monthlyTaxes + monthlyInsurance + monthlyHOA;

  // Update down payment when percentage changes
  const handleDownPaymentPercentChange = (percent: number) => {
    setDownPaymentPercent(percent);
    setDownPayment((homePrice * percent) / 100);
  };

  // Update down payment percentage when dollar amount changes
  const handleDownPaymentChange = (amount: number) => {
    setDownPayment(amount);
    setDownPaymentPercent((amount / homePrice) * 100);
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Navigation />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <div className="mb-10">
          <h1 className="text-3xl tracking-wide font-bold text-gray-900 mb-2">Mortgage Calculator</h1>

        </div>
        <div className="flex flex-col text-black lg:flex-row gap-8">
          {/* Calculator Card */}
          <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-xl mx-auto lg:mx-0">
            <div className="flex items-center justify-between mb-6">
              <div className="font-semibold text-gray-900 text-lg">Customize your estimate</div>
              <div className="text-sm text-gray-600 flex items-center gap-2">
                ZIP Code:
                <input 
                  type="text" 
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="px-2 py-1 border border-gray-300 rounded w-20 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  maxLength={5}
                  title="ZIP Code"
                />
              </div>
            </div>
            {/* Home Price */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Home price</label>
              <div className="relative mb-2">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="w-full  pl-8 pr-4 py-2 text-lg font-semibold border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  title="Home price"
                />
              </div>
              <input
                type="range"
                min="100000"
                max="2000000"
                step="10000"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                title="Home price range"
              />
            </div>
            {/* Down Payment */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Down payment</label>
              <div className="grid grid-cols-2 gap-4 mb-2">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={downPayment}
                    onChange={(e) => handleDownPaymentChange(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-2 text-lg font-semibold border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    title="Down payment amount"
                  />
                </div>
                <div className="relative">
                  <input
                    type="number"
                    value={Math.round(downPaymentPercent * 10) / 10}
                    onChange={(e) => handleDownPaymentPercentChange(Number(e.target.value))}
                    className="w-full pr-8 pl-4 py-2 text-lg font-semibold border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    step="0.1"
                    min="0"
                    max="100"
                    title="Down payment percent"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                step="0.5"
                value={downPaymentPercent}
                onChange={(e) => handleDownPaymentPercentChange(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                title="Down payment percent range"
              />
            </div>
            {/* Interest Rate */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Interest rate</label>
              <div className="relative mb-2">
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full pr-8 pl-4 py-2 text-lg font-semibold border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  step="0.01"
                  min="0"
                  max="15"
                  title="Interest rate"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
              </div>
              <input
                type="range"
                min="3"
                max="10"
                step="0.01"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                title="Interest rate range"
              />
            </div>
            {/* Loan Term */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Loan term</label>
              <select
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full py-2 px-4 text-lg font-semibold border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                title="Loan term"
              >
                <option value={15}>15 years</option>
                <option value={20}>20 years</option>
                <option value={25}>25 years</option>
                <option value={30}>30 years</option>
              </select>
            </div>
            {/* Additional Costs */}
            <div className="mb-2">
              <div className="font-semibold text-gray-900 mb-2">Additional costs</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Property taxes (annual)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={propertyTaxes}
                      onChange={(e) => setPropertyTaxes(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      title="Property taxes (annual)"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Home insurance (annual)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={homeInsurance}
                      onChange={(e) => setHomeInsurance(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      title="Home insurance (annual)"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">HOA fees (monthly)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={hoaFees}
                      onChange={(e) => setHoaFees(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      title="HOA fees (monthly)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Results Card */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <div className="bg-white rounded-2xl shadow-md p-8 sticky top-8 border border-green-100">
              <div className="mb-6">
                <div className="text-gray-500 text-sm mb-1">Estimated monthly payment</div>
                <div className="text-5xl font-bold text-green-600">{formatCurrency(totalMonthlyPayment)}</div>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700">Principal & Interest</span>
                  <span className="font-semibold">{formatCurrency(monthlyPI)}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700">Property taxes</span>
                  <span className="font-semibold">{formatCurrency(monthlyTaxes)}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700">Home insurance</span>
                  <span className="font-semibold">{formatCurrency(monthlyInsurance)}</span>
                </div>
                {monthlyPMI > 0 && (
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-700">PMI</span>
                    <span className="font-semibold">{formatCurrency(monthlyPMI)}</span>
                  </div>
                )}
                {monthlyHOA > 0 && (
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-700">HOA fees</span>
                    <span className="font-semibold">{formatCurrency(monthlyHOA)}</span>
                  </div>
                )}
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center text-base font-semibold mb-2">
                  <span>Total monthly payment</span>
                  <span className="text-green-600">{formatCurrency(totalMonthlyPayment)}</span>
                </div>
                <div className="text-xs text-gray-500 mb-4">Includes principal, interest, taxes, insurance, and fees.</div>
                <div className="text-sm text-gray-600 space-y-1 mb-4">
                  <div className="flex justify-between">
                    <span>Loan amount</span>
                    <span>{formatCurrency(loanAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total interest</span>
                    <span>{formatCurrency((monthlyPI * numberOfPayments) - loanAmount)}</span>
                  </div>
                </div>
                <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Get pre-approved
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #059669;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #059669;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
} 