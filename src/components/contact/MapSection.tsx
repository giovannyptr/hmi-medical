export default function MapSection() {
  return (
    <div className="w-full h-80 rounded-xl overflow-hidden shadow-md bg-gray-100 flex items-center justify-center">
      {/* Replace src with your actual Google Maps embed URL */}
      <iframe
        title="HMI Medical Location"
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209132424!2d-73.98784492346191!3d40.75798053540904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1699000000000!5m2!1sen!2sus"
      />
    </div>
  );
}
