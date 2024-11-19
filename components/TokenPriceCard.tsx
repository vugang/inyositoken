// components/TokenPriceCard.tsx

import { Card } from "@/components/ui/card";

interface TokenPriceCardProps {
  price: string | null;
}

export function TokenPriceCard({ price }: TokenPriceCardProps) {
  return (
    <Card className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#ff6b6b]">Token Price</h2>
        <div className="bg-[#ffcdd2] text-[#ff6b6b] font-medium px-3 py-1 rounded-full animate-bounce">
          {price ? `ETH ${price}` : "Loading..."}
        </div>
      </div>
      <p className="text-[#6b7280] text-base mt-2 animate-fade-in">1 token = {price ? `ETH ${price}` : "Loading..."}</p>
    </Card>
  );
}
