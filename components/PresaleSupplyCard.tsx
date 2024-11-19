// components/PresaleSupplyCard.tsx

import { Card } from "@/components/ui/card";

interface PresaleSupplyCardProps {
  supply: number | null;
}
 
export function PresaleSupplyCard({ supply }: PresaleSupplyCardProps) {
  return (
    <Card className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#ffa726]">Presale Supply</h2>
        <div className="bg-[#ffe0b2] text-[#ffa726] font-medium px-3 py-1 rounded-full animate-bounce">
          {supply ? supply.toLocaleString() : "Loading..."}
        </div>
      </div>
      <p className="text-[#6b7280] text-base mt-2 animate-fade-in">Total tokens available</p>
    </Card>
  );
}
