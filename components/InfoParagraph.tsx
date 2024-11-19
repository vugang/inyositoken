//InfoParagraph.tsx

 
export function InfoParagraph() {
  return (
    <p className="text-[#4b6bfb] font-medium text-lg mb-1 animate-pulse">
      A revolutionary cryptocurrency deployed on the Arbitrum network,
      it aims to provide a secure, decentralized, and scalable platform
      for a wide range of applications. With its advanced blockchain technology
      and unique consensus mechanism, InYosi Token offers fast and low-cost
      transactions, making it an ideal choice for users and developers alike.
      Built on a robust and transparent blockchain, InYosi Token ensures the
      security and integrity of every transaction.
      <a
        href={`https://sepolia.etherscan.io/token/0x5C0d1ed3f7518F17d73f7687926367360a773e13`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-[#4b6bfb] hover:underline ml-2"
      >
        View InYosi Token on Arbitrum Sepolia
      </a>
      .
    </p>
  );
}