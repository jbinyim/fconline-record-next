export default function RecordBody({ children }: { children: React.ReactNode }) {
  return (
    <section className="pc:w-[1200px] tablet:w-[80%] w-[90%] mx-auto grid grid-cols-1 gap-[20px]">
      {children}
    </section>
  );
}
