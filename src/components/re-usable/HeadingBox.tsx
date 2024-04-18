export default function HeadingBox({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) {
  return (
    <div className="md:mb-10">
      <h3 className="text-3xl md:text-5xl font-bold font-book">{heading}</h3>
      <p className="text-lg md:text-3xl font-light">{subHeading}</p>
    </div>
  );
}
