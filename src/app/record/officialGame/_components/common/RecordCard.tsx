interface RecordCardProps {
  homeRecord: number | string;
  awayRecord: string | number;
  nameRecord: string;
}

export default function RecordCard({ homeRecord, awayRecord, nameRecord }: RecordCardProps) {
  return (
    <div className="w-[80%] tablet:w-[60%] pc:w-[40%] mx-auto text-black flex justify-between">
      <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
        {homeRecord}
      </span>
      <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
        {nameRecord}
      </span>
      <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
        {awayRecord}
      </span>
    </div>
  );
}
