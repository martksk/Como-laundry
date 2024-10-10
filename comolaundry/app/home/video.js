'use client'

export default function Video() {
  return (
    <div className="flex relative">
      <video className="w-full h-full object-cover" loop autoPlay muted>
        <source src="/images/preview.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
