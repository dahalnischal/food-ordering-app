export default function SectionHeader({ subHeader, mainHeader }) {
  return (
    <div className="text-center">
      <h3 className="text-gray-500 font-medium leading-4 uppercase">
        {subHeader}
      </h3>
      <h2 className="text-primary font-bold text-4xl">{mainHeader}</h2>
    </div>
  );
}
