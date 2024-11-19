// import { ethers } from "ethers";

// export const buyTokens = async ({
//   provider,
//   tokenSaleContract,
//   amount,
//   account,
//   price,
//   setStatus,
//   setIsLoading,
// }: {
//   provider: ethers.BrowserProvider;
//   tokenSaleContract: ethers.Contract;
//   amount: string;
//   account: string;
//   price: string;
//   setStatus: (status: string) => void;
//   setIsLoading: (loading: boolean) => void;
// }) => {
//   try { 
//     setIsLoading(true);  
//     setStatus("");  

//     const ethAmount = ethers.parseEther((Number(amount) * Number(price)).toString());

//     const transaction = await tokenSaleContract.buy(amount, {
//       value: ethAmount,  
//       from: account,
//     });

//     await transaction.wait(); 

//     setStatus("Purchase successful! Tokens will reflect shortly.");
//   } catch (error) {
//     console.error("Purchase failed:", error);

//     let errorMessage = "Purchase failed! .Transaction canceled";
 
//     if (error instanceof Error) {
//       if (error.message.includes('insufficient funds')) {
//         errorMessage = "Insufficient funds. Please ensure you have enough ETH for the purchase.";
//       }
//     }

//     setStatus(errorMessage);
//   } finally {
//     setIsLoading(false);  
//   }
// };
