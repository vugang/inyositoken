// components/TimeRemainingCard.tsx

import { Card } from "@/components/ui/card";

interface TimeRemainingCardProps {
  timeRemaining: string;
}

export function TimeRemainingCard({ timeRemaining }: TimeRemainingCardProps) {
  return (
    <Card className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#64b5f6]">Time Remaining</h2>
        <div className="bg-[#bbdefb] text-[#64b5f6] font-medium px-3 py-1 rounded-full animate-bounce">
          {timeRemaining}
        </div>
      </div>
      <p className="text-[#6b7280] text-base mt-2 animate-fade-in">
        Token sale ends in {timeRemaining}
      </p>
    </Card>
  );
}
