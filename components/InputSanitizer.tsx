  
import sanitize from "sanitize-html";
import { ethers } from "ethers";
import { Button } from "@/components/ui/button";
import soloABI from "@/abi/soloABI.json";
import { useActiveAccount } from "thirdweb/react";
import { MESSAGES } from "@/constants/messages";


interface InputSanitizerProps {
  tokenAmount: string;
  setTokenAmount: (value: string) => void;
  price: string | null;
  presaleSupply: number | null;
  timeRemaining: string;
  tokenSaleAddress: string;
  setStatus: (value: string) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

const InputSanitizer: React.FC<InputSanitizerProps> = ({
  tokenAmount,
  setTokenAmount,
  price,
  presaleSupply,
  timeRemaining,
  tokenSaleAddress,
  setStatus,
  isLoading,
  setIsLoading,
}) => {
  const activeAccount = useActiveAccount();

  const validateInput = (value: string) => {
    const regex = /^[1-9]\d*$/;
    return regex.test(value);
  };

  const sanitizeInput = (value: string) => {
    return sanitize(value, {
      allowedTags: [],
      allowedAttributes: {},
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = sanitizeInput(e.target.value);
 
    if ((validateInput(sanitizedValue) || sanitizedValue === "") && sanitizedValue.length <= 4) {
      setTokenAmount(sanitizedValue);
    }
  };
  

  const handlePurchase = async () => {
    if (!activeAccount?.address) {
      setStatus(MESSAGES.walletNotConnected);
      return;
    }

    if (timeRemaining === "Sale ended") {
      setStatus(MESSAGES.saleEnded);
      return;
    }

    const sanitizedTokenAmount = sanitizeInput(tokenAmount || "");
    const sanitizedPrice = sanitizeInput(price || "");

    if (!sanitizedTokenAmount) {
      setStatus(MESSAGES.tokenAmountRequired);
      return;
    }

    if (!sanitizedPrice) {
      setStatus(MESSAGES.priceRequired);
      return;
    }

    if (isNaN(Number(sanitizedTokenAmount))) {
      setStatus(MESSAGES.invalidTokenAmount);
      return;
    }

    if (Number(sanitizedTokenAmount) <= 0) {
      setStatus(MESSAGES.tokenAmountGreaterThanZero);
      return;
    }

    const amount = Number(sanitizedTokenAmount);
    if (amount <= 0 || !Number.isFinite(amount)) {
      setStatus(MESSAGES.enter);
      return;
    }

    if (amount > (presaleSupply || 0)) {
      setStatus(MESSAGES.exceedsTotalSupply);
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(tokenSaleAddress, soloABI, signer);

    try {
      setIsLoading(true); // Start loading
      const ethAmount = ethers.parseEther(
        (Number(sanitizedTokenAmount) * Number(sanitizedPrice)).toString()
      );

      const transaction = await contract.buy(sanitizedTokenAmount, {
        value: ethAmount,
      });
      await transaction.wait(); // Wait for transaction to be mined

      setStatus(MESSAGES.PurchaseSuccessful);
    } catch (error) {
      if ((error as any)?.code === "ACTION_REJECTED") {
        setStatus(MESSAGES.transactionCanceled);
      } else if ((error as any)?.reason === "Pausable: paused") {
        setStatus(MESSAGES.PresalePaused);
      } else if ((error as any)?.code === "CALL_EXCEPTION") {
        // Check for missing revert data, which could indicate insufficient gas
        setStatus(MESSAGES.insufficientGas);
      } else {
        console.error("Purchase failed:", error);
        setStatus(MESSAGES.purchaseFailed);
      }
  

    } finally {
      setIsLoading(false);
    }


  };

  return (
    <div>
      <input
         type="number"
        min="1"
        className="w-full mb-2 py-4 px-4 border border-gray-300 rounded-lg"
        placeholder="Enter token amount"
        value={tokenAmount}
        onChange={handleInputChange}
        aria-label="Token Amount"
      />

      <Button
        className={`w-full py-3 px-4 bg-[#4b6bfb] text-white font-bold rounded-lg hover:bg-[#3b5a9d] ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handlePurchase}
        disabled={isLoading} // Disable the button when isLoading is true
      >
        {isLoading ? "Processing..." : "Buy Tokens"}
      </Button>
    </div>
  );
};

export default InputSanitizer;