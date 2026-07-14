interface Props {
  data: any;
}

export default function CVPreview({ data }: Props) {
  const person = data.personal;

  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg">
      <h1 className="text-3xl font-bold">
        {person.fullName || "Your Name"}
      </h1>

      <p className="text-blue-600">
        {person.title || "Professional Title"}
      </p>

      <div className="mt-4 space-y-1 text-gray-700">
        <p>{person.email}</p>
        <p>{person.phone}</p>
        <p>{person.address}</p>

        {person.linkedIn && <p>{person.linkedIn}</p>}

        {person.portfolio && <p>{person.portfolio}</p>}

        {person.github && <p>{person.github}</p>}
      </div>
    </div>
  );
}