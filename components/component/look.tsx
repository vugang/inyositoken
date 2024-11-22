"use client";

import { useState, useEffect } from "react";
import { ethers } from "ethers";
import soloABI from "@/abi/soloABI.json";
import { FaMountain } from "react-icons/fa";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { chain } from "@/app/client";
import { Footer } from "@/components/Footer"; // Import the Footer component
import { InfoParagraph } from "@/components/InfoParagraph";
import { TokenPriceCard } from "@/components/TokenPriceCard";
import { PresaleSupplyCard } from "@/components/PresaleSupplyCard";
import { TimeRemainingCard } from "@/components/TimeRemainingCard";
import { ClientComponent } from "@/components/ClientComponents"; 
import InputSanitizer from "@/components/InputSanitizer";
 
const tokenSaleAddress = "0x612F12c62fa8505ECeAb0e9FcfaD54C1d57fA045";

export function Look() {
  const [tokenAmount, setTokenAmount] = useState<string>("");
  const [price, setPrice] = useState<string | null>(null);
  const [presaleSupply, setPresaleSupply] = useState<number | null>(null);
  const [status, setStatus] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false); 
  const [timeRemaining, setTimeRemaining] = useState<string>("");

  const activeAccount = useActiveAccount();
  const client = ClientComponent();
 

  useEffect(() => {
    const fetchSaleEndTime = async () => {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const contract = new ethers.Contract(tokenSaleAddress, soloABI, provider);

        // Fetch sale start time and duration
        const saleStartTime = await contract.saleStartTime();
        const saleDuration = await contract.SALE_DURATION();

        // Calculate sale end time (sale start time + duration)
        const saleEndTime = parseInt(saleStartTime) + parseInt(saleDuration);

        // Start countdown to the sale end time
        const calculateTimeRemaining = () => {
          const now = Math.floor(Date.now() / 1000); // current time in seconds
          const timeDiff = saleEndTime - now;

          if (timeDiff <= 0) {
            setTimeRemaining("Sale ended");
            return;
          }

          const days = Math.floor(timeDiff / (60 * 60 * 24));
          const hours = Math.floor((timeDiff % (60 * 60 * 24)) / (60 * 60));
          const minutes = Math.floor((timeDiff % (60 * 60)) / 60);
          const seconds = Math.floor(timeDiff % 60);

          setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        };

        // Calculate initially and set interval for countdown
        calculateTimeRemaining();
        const interval = setInterval(calculateTimeRemaining, 1000);

        return () => clearInterval(interval);
      } catch (error) {
        console.error("Error fetching sale end time:", error);
        setTimeRemaining("Error fetching sale end time");
      }
    };

    fetchSaleEndTime();
  }, []);

  // Fetching token price
  useEffect(() => {
    const fetchTokenPrice = async () => {
      if (activeAccount?.address) {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const contract = new ethers.Contract(tokenSaleAddress, soloABI, provider);
          const fetchedPrice = await contract.price();
          const formattedPrice = ethers.formatUnits(fetchedPrice, "ether");
          setPrice(formattedPrice);
        } catch (error) {
          console.error("Error fetching token price:", error);
          setStatus("Error fetching token price. Please try again.");
        }
      }
    };
    fetchTokenPrice();
  }, [activeAccount]);

  // Fetching presale supply
  useEffect(() => {
    const fetchPresaleSupply = async () => {
      if (activeAccount?.address) {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const contract = new ethers.Contract(tokenSaleAddress, soloABI, provider);
          const supply = await contract.presaleSupply();
          const formattedSupply = ethers.formatUnits(supply, "ether");
          setPresaleSupply(Number(formattedSupply));
        } catch (error) {
          console.error("Error fetching presale supply:", error);
          setStatus("Error fetching presale supply. Please try again.");
        }
      }
    };
    fetchPresaleSupply();
  }, [activeAccount]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#f0f4ff] animate-fade-in">
      <header className="bg-[#f0f4ff] py-4 px-6 flex items-center justify-between animate-fade-in">
        <div className="flex items-center gap-4">
          <FaMountain className="w-8 h-8 text-[#4b6bfb] animate-bounce" />
          <h1 className="text-3xl font-bold text-[#4b6bfb] animate-pulse">InYosi Token</h1>
        </div>
        <ConnectButton client={client} chain={chain} />
      </header>

      <main className="flex-1 py-5 px-6 md:px-10 lg:px-16 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          <TokenPriceCard price={price} />
          <PresaleSupplyCard supply={presaleSupply} />
          <TimeRemainingCard timeRemaining={timeRemaining} />
        </div>

        <div className="mt-15 bg-[#f0f4ff] rounded-lg shadow-md p-6 animate-fade-in flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4 text-[#4b6bfb] animate-bounce">Switch to arbitrum Network</h2>
          <div className="w-full max-w-md animate-fade-in">
            <InputSanitizer
              tokenAmount={tokenAmount}
              setTokenAmount={setTokenAmount}
              price={price}
              presaleSupply={presaleSupply}
              timeRemaining={timeRemaining}
              tokenSaleAddress={tokenSaleAddress}
              setStatus={setStatus}
              setIsLoading={setIsLoading} // Correctly passing setIsLoading
              isLoading={isLoading} // Dynamic state for button
            />
            <p
              className={`mt-4 text-lg text-center ${
                status.includes("error") ? "text-red-500" : "text-black-500"
              } animate-fade-in`}
            >
              {status}
            </p>
          </div>

          <InfoParagraph />
        </div>
      </main>

      <Footer />
    </div>
  );
}
