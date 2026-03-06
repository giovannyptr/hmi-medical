const items = [
  {
    icon: "📍",
    label: "Address",
    value: "123 Medical Drive, Health City, HC 10001",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+1 (555) 123-4567",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "info@hmimedical.com",
  },
  {
    icon: "🕐",
    label: "Hours",
    value: "Mon – Fri: 8:00 AM – 6:00 PM\nSat: 9:00 AM – 2:00 PM",
  },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
      <p className="text-gray-600">
        Have questions or need to schedule an appointment? Reach out to us using
        any of the methods below.
      </p>
      <ul className="flex flex-col gap-5">
        {items.map(({ icon, label, value }) => (
          <li key={label} className="flex items-start gap-4">
            <span className="text-2xl">{icon}</span>
            <div>
              <p className="text-sm font-semibold text-gray-700">{label}</p>
              <p className="text-gray-600 whitespace-pre-line">{value}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
