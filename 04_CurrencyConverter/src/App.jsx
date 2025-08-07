import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const BackgroundImage ="https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  const [amount, setAmount] = useState(0)
  const [currencyFromDropdown, setCurrencyFromDropdown] = useState("usd")
  const [currencyToDropdown, setCurrencyToDropdown] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(currencyFromDropdown)
  console.log('options', currencyInfo);
  
  const currencyDropdownOptions = Object.keys(currencyInfo)

  const handleSwap = ()=>{
    setCurrencyFromDropdown(currencyToDropdown)
    setCurrencyToDropdown(currencyFromDropdown)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const handleConvert = ()=>{
console.log(`${amount} and ${currencyToDropdown} ${currencyInfo[currencyToDropdown]}`);

    setConvertedAmount (amount*currencyInfo[currencyToDropdown])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full mb-1">
              <InputBox 
                label="From" 
                amount={amount}
                onAmountChange={(amount)=>(setAmount(amount))}
                currencyOptions={currencyDropdownOptions}
                selectCurrency={currencyFromDropdown}
                onCurrencyChange={(currency)=>(setCurrencyFromDropdown(currency))}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={handleSwap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={currencyDropdownOptions}
                selectCurrency={currencyToDropdown}
                onCurrencyChange={(currency)=>(setCurrencyToDropdown(currency))}
                disableAmountField
              />

            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={handleConvert}
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
